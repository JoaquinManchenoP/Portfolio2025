import HeaderNav from "@/components/HeaderNav";
import AboutIntroSection from "@/components/about/AboutIntroSection";
import AboutPortraitSection from "@/components/about/AboutPortraitSection";
import AboutStorySection from "@/components/about/AboutStorySection";
import SideProjectsSection from "@/components/about/SideProjectsSection";
import CtaSection from "@/components/sections/CtaSection";
import FooterSection from "@/components/sections/FooterSection";

const sideProjects = [
  {
    name: "Goven",
    tag: "Framer Template",
  },
  {
    name: "Upshift",
    tag: "Web Design Collections",
  },
  {
    name: "Subtle Folio",
    tag: "Framer Template",
  },
];

const storyParagraphs = [
  "Brian Do holds a bachelor's degree in Graphic Design from a prestigious university in the United States and has a relentless drive for staying up-to-date with the latest technologies and design trends. Actively involved in the design community, Brian regularly participates in diverse design conferences and meetups.",
  "When he's not immersed in design work, he finds solace in playing the guitar and exploring new coffee shops in his local area. Brian firmly believes in maintaining a healthy work-life balance, making sure to take breaks and reenergize his creativity. In his spare time, he also volunteers at a local animal shelter on weekends.",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] py-10 px-4 text-white">
      <main className="mx-auto flex w-full max-w-xl flex-col gap-5 rounded-[40px] border border-white/5 bg-[#111315] p-5 font-sans shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:p-8">
        <HeaderNav className="-mx-1 sm:-mx-4" />
        <AboutIntroSection
          title="It's Me Brian"
          description="I'm Brian Do, a product designer with over 5 years of experience, currently residing in Jakarta, Indonesia. I have a deep passion for crafting purposeful interfaces and products. My main goal is to bridge the divide between people and technology, transforming intricate challenges into meaningful and seamless experiences."
        />
        <AboutPortraitSection
          imageSrc="/images/about-image.jpg"
          alt="Portrait of Brian Do"
        />
        <AboutStorySection paragraphs={storyParagraphs} />

        <SideProjectsSection projects={sideProjects} />

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
