import Link from "next/link";
import ProjectVisual from "./ProjectVisual";
import { projects } from "@/lib/projects";

export default function ProjectsSection() {
  return (
    <section className="section work-section" id="projects">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">02 / Selected work</div>
            <h2>Real products.<br /><i>Real constraints.</i></h2>
          </div>
          <div className="section-head-side">
            <p>Different problems, one consistent goal: make the experience clear, useful and ready for the real world.</p>
            <Link href="/projects" className="text-link">View all projects <span>↗</span></Link>
          </div>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-showcase" key={project.id}>
              <div className="project-info">
                <div className="project-number mono">
                  0{index + 1} <span>/</span> {project.category}
                </div>
                <Link href={`/projects/${project.slug}`} className="project-title-link">
                  <h3>{project.title}</h3>
                </Link>
                <p>{project.description}</p>
                <div className="project-foot">
                  <span className="project-type">{project.type}</span>
                  {project.liveUrl ? (
                    <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                      View live project <span>↗</span>
                    </a>
                  ) : (
                    <span className="project-type">Concept / internal work</span>
                  )}
                  <a href={`/projects/${project.slug}`} className="text-link">
                    Read case study <span>↗</span>
                  </a>
                </div>
              </div>
              <div className="project-visual">
                <ProjectVisual title={project.title} />
              </div>
            </article>
          ))}
        </div>
        <div className="project-actions">
          <Link href="/projects" className="button dark">View all projects <span>↗</span></Link>
        </div>
      </div>
    </section>
  );
}
