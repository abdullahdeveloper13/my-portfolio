import Portfolio from "@/components/Portfolio";
import ProjectsSection from "@/components/ProjectsSection";
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdullah Abdul Hameed",
  jobTitle: "Full Stack Web & App Developer",
  url: "https://abdullahdeveloper13.vercel.app",
  email: "rafayhameed42@gmail.com",
  sameAs: ["https://github.com/abdullahdeveloper13", "https://linkedin.com/in/abdullah-hameed-18b3b737b/"],
  knowsAbout: ["Full-stack web development", "SaaS platforms", "React", "Next.js", "React Native", "AI integrations", "CMS development", "EMR systems", "E-commerce"],
};

export default function Home(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(personSchema)}} /><Portfolio projectsSection={<ProjectsSection/>}/></>}
