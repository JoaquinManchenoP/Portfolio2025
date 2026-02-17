import HeaderNav from "@/components/HeaderNav";
import ProjectsHeroSection from "@/components/projects/ProjectsHeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import CtaSection from "@/components/sections/CtaSection";
import FooterSection from "@/components/sections/FooterSection";

const softwareProjects = [
  {
    name: "Habitoo",
    description: "A Habit Building and Tracking App",
    icon: "V",
    colors: "from-[#dfe4ff] to-[#9fb3ff]",
    link: "https://habit-builder-eight.vercel.app/",
  },
  {
    name: "Video Game Catalog App",
    description: "Showcase your work beautifully",
    icon: "V",
    colors: "from-[#dfe4ff] to-[#9fb3ff]",
    link: "https://videogamestore-next-2i28o9dsg-joaquinmanchenop.vercel.app/",
  },
  {
    name: "Client Prtfolio",
    description: "Minimal case study layout",
    icon: "S",
    colors: "from-[#f4f4f4] to-[#c1c1c1]",
    link: "https://edu-portfolio-pi.vercel.app/",
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
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#050505] py-10 px-4 text-white">
      <main className="mx-auto flex w-full max-w-xl flex-col gap-5 rounded-[40px] border border-white/5 bg-[#111315] p-5 font-sans shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:p-8">
        <HeaderNav className="-mx-1 sm:-mx-4" />
        <ProjectsHeroSection
          title="My Projects"
          description="Take a look at my personal projects."
        />
        <ProductsSection items={softwareProjects} />
        <CtaSection
          title="Let's work together."
          description=""
          primaryLabel="Hire Me"
          secondaryLabel="Copy Email"
        />
      </main>
    </div>
  );
}
