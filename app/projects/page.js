import HeaderNav from "@/components/HeaderNav";
import ProjectsHeroSection from "@/components/projects/ProjectsHeroSection";
import ProjectListSection from "@/components/projects/ProjectListSection";
import ProductsIntroSection from "@/components/projects/ProductsIntroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import CtaSection from "@/components/sections/CtaSection";
import FooterSection from "@/components/sections/FooterSection";

const projectList = [
  {
    name: "Morva Labs",
    description: "Visual design, Branding",
    icon: "M",
    colors: "from-[#615CF9] via-[#8577ff] to-[#b0a7ff]",
  },
  {
    name: "Rectangle",
    description: "Product design, Icon design",
    icon: "R",
    colors: "from-[#4F34FF] via-[#7D63FF] to-[#C6A6FF]",
  },
  {
    name: "Simply",
    description: "Landing page, Illustration design",
    icon: "S",
    colors: "from-[#FF875E] via-[#FFB464] to-[#FFE989]",
  },
  {
    name: "Glassdoor",
    description: "Icon design, Illustration design",
    icon: "G",
    colors: "from-[#70D6FF] via-[#4FB0FF] to-[#2667FF]",
  },
  {
    name: "Seven LTD.",
    description: "Branding, Landing page",
    icon: "7",
    colors: "from-[#cda7ff] via-[#a485ff] to-[#7a5cf9]",
  },
];

const products = [
  {
    name: "Portafo",
    description: "Showcase your work beautifully",
    icon: "P",
    colors: "from-[#dfe4ff] to-[#9fb3ff]",
  },
  {
    name: "Faktur Invoice",
    description: "Modern finance template",
    icon: "F",
    colors: "from-[#ffdede] to-[#ff9494]",
  },
  {
    name: "Goven",
    description: "Dark portfolio for agencies",
    icon: "G",
    colors: "from-[#dbe9ff] to-[#87a7ff]",
  },
  {
    name: "Subtle Folio",
    description: "Minimal case study layout",
    icon: "S",
    colors: "from-[#f4f4f4] to-[#c1c1c1]",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#050505] py-10 px-4 text-white">
      <main className="mx-auto flex w-full max-w-xl flex-col gap-5 rounded-[40px] border border-white/5 bg-[#111315] p-5 font-sans shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:p-8">
        <HeaderNav className="-mx-1 sm:-mx-4" />

        <ProjectsHeroSection
          title="My Works"
          description="Discover my portfolio, where purposeful interfaces meet captivating design. My work strives to enhance experiences and inspire."
        />
        <ProjectListSection items={projectList} />
        <ProductsIntroSection
          title="Explore My Products"
          description="Some of the digital products that I worked on as side projects, check them out now."
        />
        <ProductsSection items={products} />
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
