import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import CtaSection from "@/components/sections/CtaSection";
import FooterSection from "@/components/sections/FooterSection";

const experience = [
  {
    name: "Capmation",
    description: "Software Consultant",
    icon: "C",
    colors: "from-[#615CF9] via-[#8577ff] to-[#b0a7ff]",
  },
  {
    name: "Dubow Textile",
    description: "Software Engineer",
    icon: "D",
    colors: "from-[#4F34FF] via-[#7D63FF] to-[#C6A6FF]",
  },
  {
    name: "Mednet Solutions",
    description: "Software Engineer",
    icon: "M",
    colors: "from-[#FF875E] via-[#FFB464] to-[#FFE989]",
  },
];

const softwareProjects = [
  {
    name: "Video Game Store",
    description: "Showcase your work beautifully",
    icon: "V",
    colors: "from-[#dfe4ff] to-[#9fb3ff]",
    link: "https://videogamestore-next-2i28o9dsg-joaquinmanchenop.vercel.app/",
  },
  {
    name: "Music & Movie blog",
    description: "Modern finance template",
    icon: "F",
    colors: "from-[#ffdede] to-[#ff9494]",
    link: "https://music-blog-zee9u6npn.vercel.app/",
  },
  {
    name: "Movie Watch List",
    description: "Dark portfolio for agencies",
    icon: "G",
    colors: "from-[#dbe9ff] to-[#87a7ff]",
    link: "https://react-movie-app-f0d0c.web.app/?",
  },
  {
    name: "Client Prtfolio",
    description: "Minimal case study layout",
    icon: "S",
    colors: "from-[#f4f4f4] to-[#c1c1c1]",
    link: "https://edu-portfolio-pi.vercel.app/",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] py-10 px-4 text-white">
      <main className="mx-auto flex w-full max-w-xl flex-col gap-5 rounded-[40px] border border-white/5 bg-[#111315] p-5 font-sans shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:p-8">
        <HeaderNav className="-mx-1 sm:-mx-4" />
        <HeroSection
          label="Product Designer"
          status="Available for work"
          title="I'm Brian Do"
          description="Product designer from Jakarta, ID. Currently designing at Rectangle."
          primaryCta="Hire Me"
          secondaryCta="Copy Email"
        />
        <ProjectsSection
          title="Experience"
          subtitle=""
          actionLabel="View All"
          items={experience}
        />
        <ProductsSection items={softwareProjects} />
        <CtaSection
          title="Let's work together."
          description="Creating user experience and visually appealing design."
          primaryLabel="Hire Me"
          secondaryLabel="Copy Email"
        />
        <FooterSection />
      </main>
    </div>
  );
}
