import { notFound } from "next/navigation";
import { getCaseStudy, getCaseStudySlugs, type CaseStudy, type CaseStudyStep } from "@/lib/case-studies";

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="case-study">
      {/* Hero Section - Full viewport height */}
      <header className="case-study-hero">
        <div className="wrap">
          <nav className="case-study-nav" aria-label="Breadcrumb">
            <a href="/">Abdullah</a> <span>/</span> <a href="/projects">Work</a> <span>/</span>
            <span>{study.title}</span>
          </nav>
          
          <div className="case-study-header-content">
            <div className="case-study-meta">
              <span className="eyebrow">Case Study</span>
              <h1>{study.title}</h1>
              <p className="category">{study.category}</p>
              <p className="description">{study.description}</p>
              
              <div className="case-study-tags">
                <span className="tag">{study.duration || "Project Duration"}</span>
                <span className="tag">{study.role || "Full Stack Developer"}</span>
                <span className="tag">{study.client || "Client Project"}</span>
              </div>
            </div>
            
            <div className="case-study-actions">
              {study.liveUrl ? (
                <a href={study.liveUrl} target="_blank" rel="noreferrer" className="button blue large">
                  View Live Project <span>↗</span>
                </a>
              ) : null}
              {study.githubUrl ? (
                <a href={study.githubUrl} target="_blank" rel="noreferrer" className="button dark large">
                  View Source Code <span>↗</span>
                </a>
              ) : null}
              <a href="/" className="text-link">Back to portfolio <span>↖</span></a>
            </div>
          </div>
        </div>
      </header>

      {/* Project Overview - Full section */}
      <section className="case-study-section">
        <div className="wrap">
          <div className="case-study-overview-grid">
            <div className="overview-main">
              <h2 className="section-title">Project Overview</h2>
              <p className="overview-lead">{study.overview}</p>
              <p className="overview-detail">{study.description}</p>
              
              <div className="project-details">
                <div className="detail-card">
                  <h4>Client</h4>
                  <p>{study.client || "Independent / Client project"}</p>
                </div>
                <div className="detail-card">
                  <h4>Role</h4>
                  <p>{study.role || "Full Stack Developer"}</p>
                </div>
                <div className="detail-card">
                  <h4>Duration</h4>
                  <p>{study.duration || "4 weeks"}</p>
                </div>
                <div className="detail-card">
                  <h4>Status</h4>
                  <p>{study.liveUrl ? "Live & Running" : "Completed"}</p>
                </div>
              </div>
            </div>
            
            <aside className="overview-sidebar">
              <div className="sidebar-section">
                <h3>Technologies</h3>
                <ul className="tech-tags">
                  {study.technologies.length > 0 ? (
                    study.technologies.map((t) => <li key={t}>{t}</li>)
                  ) : (
                    <>
                      <li>Next.js</li>
                      <li>React</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                    </>
                  )}
                </ul>
              </div>
              
              {study.keyFeatures.length > 0 && (
                <div className="sidebar-section">
                  <h3>Key Features</h3>
                  <ul className="feature-list">
                    {study.keyFeatures.map((f, i) => (
                      <li key={i}><span className="check">✓</span> {f}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {study.liveUrl && (
                <div className="sidebar-section">
                  <h3>Live Demo</h3>
                  <a href={study.liveUrl} target="_blank" rel="noreferrer" className="live-link">
                    {study.liveUrl.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              )}
              
              {study.githubUrl && (
                <div className="sidebar-section">
                  <h3>Source Code</h3>
                  <a href={study.githubUrl} target="_blank" rel="noreferrer" className="live-link">
                    View on GitHub
                  </a>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Process Steps - Full section with detailed steps */}
      <section className="case-study-section process-section">
        <div className="wrap">
          <div className="section-header">
            <span className="eyebrow">Development Process</span>
            <h2>How This Project<br />Was Built</h2>
            <p>A detailed walkthrough of each phase from concept to launch.</p>
          </div>
          
          {study.steps.length > 0 ? (
            <div className="process-timeline">
              {study.steps.map((step, index) => (
                <div className="timeline-step" key={step.title}>
                  <div className="step-marker">
                    <span className="step-number">0{index + 1}</span>
                    <div className="step-line"></div>
                  </div>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                    <ul className="step-details">
                      {step.details.map((detail, i) => (
                        <li key={i}>
                          <span className="bullet">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="process-timeline">
              {[
                { title: "Discovery & Planning", description: "Analyzed requirements and created project roadmap." },
                { title: "Design & Architecture", description: "Designed UI/UX and planned technical architecture." },
                { title: "Frontend Development", description: "Built responsive interfaces with React and Next.js." },
                { title: "Backend Development", description: "Implemented APIs, database, and integrations." },
                { title: "Testing & Quality Assurance", description: "Tested thoroughly for bugs and performance." },
                { title: "Deployment & Launch", description: "Deployed to production and configured monitoring." }
              ].map((step, index) => (
                <div className="timeline-step" key={step.title}>
                  <div className="step-marker">
                    <span className="step-number">0{index + 1}</span>
                    <div className="step-line"></div>
                  </div>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Challenges & Solutions */}
      {(study.challenges.length > 0 || study.keyFeatures.length > 0) && (
        <section className="case-study-section challenges-section">
          <div className="wrap">
            <div className="section-header">
              <span className="eyebrow">Challenges & Solutions</span>
              <h2>Overcoming<br />The Hard Parts</h2>
              <p>Key challenges faced and how they were resolved.</p>
            </div>
            
            <div className="challenges-grid">
              {study.challenges.length > 0 ? (
                study.challenges.map((challenge, i) => (
                  <div className="challenge-card" key={i}>
                    <div className="challenge-icon">⚠</div>
                    <h4>Challenge {i + 1}</h4>
                    <p>{challenge}</p>
                  </div>
                ))
              ) : (
                study.keyFeatures.slice(0, 4).map((feature, i) => (
                  <div className="challenge-card" key={i}>
                    <div className="challenge-icon">✓</div>
                    <h4>Feature {i + 1}</h4>
                    <p>{feature}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      )}

      {/* Technical Deep Dive */}
      <section className="case-study-section tech-section">
        <div className="wrap">
          <div className="section-header">
            <span className="eyebrow">Technical Details</span>
            <h2>Tech Stack<br />& Architecture</h2>
            <p>Technologies and tools used to build this project.</p>
          </div>
          
          <div className="tech-grid-full">
            {study.technologies.length > 0 ? (
              study.technologies.map((tech, i) => (
                <div className="tech-card" key={tech}>
                  <span className="tech-icon">{"📦"}</span>
                  <span className="tech-name">{tech}</span>
                </div>
              ))
            ) : (
              <>
                <div className="tech-card"><span className="tech-icon">{"⚛"}</span><span className="tech-name">React</span></div>
                <div className="tech-card"><span className="tech-icon">{"▲"}</span><span className="tech-name">Next.js</span></div>
                <div className="tech-card"><span className="tech-icon">{"🔷"}</span><span className="tech-name">TypeScript</span></div>
                <div className="tech-card"><span className="tech-icon">{"🎨"}</span><span className="tech-name">Tailwind CSS</span></div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Deployment */}
      {study.deployment && (
        <section className="case-study-section deployment-section">
          <div className="wrap">
            <div className="section-header">
              <span className="eyebrow">Deployment</span>
              <h2>Shipping To<br />Production</h2>
              <p>How the project was released and the real deployment issues that had to be solved.</p>
            </div>

            <div className="deployment-grid">
              <div className="deployment-panel">
                <h3>Release Overview</h3>
                <p>{study.deployment.summary}</p>
              </div>
              <div className="deployment-panel">
                <h3>Environment</h3>
                <ul className="deployment-env">
                  {study.deployment.environment.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {study.deployment.issues.length > 0 && (
              <div className="deployment-issues-block">
                <h3 className="deployment-subtitle">Deployment Issues &amp; Fixes</h3>
                <div className="deployment-issues">
                  {study.deployment.issues.map((item, i) => (
                    <div className="deployment-issue" key={i}>
                      <div className="issue-head">
                        <span className="issue-number">{String(i + 1).padStart(2, "0")}</span>
                        <h4>{item.problem}</h4>
                      </div>
                      <div className="issue-fix">
                        <span>Fix</span>
                        <p>{item.fix}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Key Results */}
      {study.keyFeatures.length > 0 && (
        <section className="case-study-section results-section">
          <div className="wrap">
            <div className="section-header">
              <span className="eyebrow">Key Results</span>
              <h2>What Was<br />Achieved</h2>
              <p>Major outcomes and deliverables from this project.</p>
            </div>
            
            <div className="results-list">
              {study.keyFeatures.map((feature, i) => (
                <div className="result-item" key={i}>
                  <span className="result-number">{String(i + 1).padStart(2, '0')}</span>
                  <div className="result-content">
                    <h4>{feature}</h4>
                    <p>Successfully implemented and deployed.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="case-study-section nav-section">
        <div className="wrap">
          <div className="project-nav">
            <a href="/projects" className="nav-card">
              <span className="nav-icon">←</span>
              <span className="nav-label">All Projects</span>
              <span className="nav-title">View all case studies</span>
            </a>
            <a href="/" className="nav-card primary">
              <span className="nav-icon">🏠</span>
              <span className="nav-label">Home</span>
              <span className="nav-title">Back to portfolio</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="case-study-section cta-section">
        <div className="wrap">
          <div className="cta-box">
            <h2>Like What You See?</h2>
            <p>Let&apos;s work together on your next project.</p>
            <div className="cta-buttons">
              <a href="/#contact" className="button blue">Get In Touch</a>
              <a href="/projects" className="button dark">View All Projects</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer wrap">
        <span>© {new Date().getFullYear()} Abdullah Abdul Hameed · Full Stack Web & App Developer</span>
        <span><a href="/">Back to top ↑</a></span>
      </footer>
    </article>
  );
}