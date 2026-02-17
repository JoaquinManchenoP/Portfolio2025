import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CtaSection from "@/components/sections/CtaSection";
import FooterSection from "@/components/sections/FooterSection";

const experience = [
  {
    name: "Capmation",
    description: "Software Consultant",
    icon: "C",
    colors: "from-[#615CF9] via-[#8577ff] to-[#b0a7ff]",
    companyLink: "https://capmation.com/",
  },
  {
    name: "Mednet Solutions",
    description: "Software Engineer",
    icon: "M",
    colors: "from-[#FF875E] via-[#FFB464] to-[#FFE989]",
    companyLink: "https://www.mednetsolutions.com/",
  },
  {
    name: "Dubow Textile",
    description: "Software Engineer",
    icon: "D",
    colors: "from-[#4F34FF] via-[#7D63FF] to-[#C6A6FF]",
    companyLink: "https://dubowtextile.com/",
  },
  {
    name: "Metrosolutions S.A.",
    description: "IT technician",
    icon: "D",
    colors: "from-[#4F34FF] via-[#7D63FF] to-[#C6A6FF]",
    companyLink: "",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] py-10 px-4 text-white">
      <main className="mx-auto flex w-full max-w-xl flex-col gap-5 rounded-[40px] border border-white/5 bg-[#111315] p-5 font-sans shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:p-8">
        <HeaderNav className="-mx-1 sm:-mx-4" />
        <HeroSection
          label="Software Developer"
          status="Available"
          title="Joaquin Mancheno"
          description="Software developer with a B.S. in Software Engineering, a B.A. in Computing in the Arts, an M.S. in Data Science, and a  minor in CIS. Primarily focused on software development roles, but also open to data science, IT, and related technical areas."
          primaryCta="Contact Me"
          secondaryCta="Copy Email"
        />
        <ProjectsSection
          title="Experience"
          subtitle=""
          actionLabel="View All"
          items={experience}
        />
        <CtaSection
          title="Let's work together."
          description=""
          primaryLabel="Contact me"
          secondaryLabel="Copy Email"
        />
      </main>
    </div>
  );
}
