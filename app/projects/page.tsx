import Link from "next/link";
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
    <section className="section work-section">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <div>
            <div className="eyebrow">02 / Selected work</div>
            <h2>Real products.<br /><i>Real constraints.</i></h2>
          </div>
          <p>Different problems, one consistent goal: make the experience clear, useful and ready for the real world.</p>
        </div>
        <div className="project-list" data-reveal>
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
                  <a href={`/projects/${study.slug}`} className="text-link">
                    Read case study <span>↗</span>
                  </a>
                </div>
              </div>
              <div className="project-visual">{study.title}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
