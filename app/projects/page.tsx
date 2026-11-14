import Link from "next/link";
import ProjectVisual from "@/components/ProjectVisual";
import { getCaseStudySlugs, getCaseStudy } from "@/lib/case-studies";

export const metadata = {
  title: "Selected Work — Abdullah Abdul Hameed",
  description: "Case studies of real products, SaaS platforms, mobile apps, AI systems and business software.",
};

export default function ProjectsPage() {
  const slugs = getCaseStudySlugs();
  const studies = slugs
    .map((slug) => getCaseStudy(slug))
    .filter((study): study is NonNullable<typeof study> => Boolean(study));

  return (
    <section className="section work-section projects-index">
      <div className="wrap">
        <div className="projects-topbar">
          <Link href="/" className="button dark">← Back to home</Link>
        </div>
        <div className="section-head">
          <div>
            <div className="eyebrow">02 / Selected work</div>
            <h2>Real products.<br /><i>Real constraints.</i></h2>
          </div>
          <p>Different problems, one consistent goal: make the experience clear, useful and ready for the real world.</p>
        </div>
        <div className="project-list">
          {studies.map((study, index) => (
            <article className="project-showcase" key={study.slug}>
              <div className="project-info">
                <div className="project-number mono">
                  0{index + 1} <span>/</span> {study.category}
                </div>
                <Link href={`/projects/${study.slug}`} className="project-title-link">
                  <h3>{study.title}</h3>
                </Link>
                <p>{study.description}</p>
                <div className="project-foot">
                  <span className="project-type">{study.duration}</span>
                  <div className="project-foot-links">
                    {study.liveUrl ? (
                      <a href={study.liveUrl} target="_blank" rel="noreferrer" className="text-link">
                        View live <span>↗</span>
                      </a>
                    ) : null}
                    <Link href={`/projects/${study.slug}`} className="text-link">
                      Read case study <span>↗</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="project-visual">
                <ProjectVisual title={study.title} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
