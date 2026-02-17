import HeaderNav from "@/components/HeaderNav";
import AboutIntroSection from "@/components/about/AboutIntroSection";
import AboutPortraitSection from "@/components/about/AboutPortraitSection";
import AboutStorySection from "@/components/about/AboutStorySection";
import CtaSection from "@/components/sections/CtaSection";
import FooterSection from "@/components/sections/FooterSection";

const storyParagraphs = [
  "I have a life long interest in technology and how it can be used to build and create new things. I enjoy staying up to date with the latest trends and news in tech, and I’m always looking for ways to improve my skills and expand what I can do.",
  "Outside of technology, I spend a my time creating art, playing guitar. In general, I enjoy learning and improving, whether that means developing software, exploring new tools, improving my language skills, or growing creatively through music and art.",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] py-10 px-4 text-white">
      <main className="mx-auto flex w-full max-w-xl flex-col gap-5 rounded-[40px] border border-white/5 bg-[#111315] p-5 font-sans shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:p-8">
        <HeaderNav className="-mx-1 sm:-mx-4" />
        <AboutIntroSection
          title="It's Me Joaquin"
          description="I’m a software developer with previous professional experience working in the U.S. I’m especially interested in building technically challenging and meaningful products, and I’m always looking to learn and improve my skills across different areas of technology."
        />
        <AboutPortraitSection
          imageSrc="/images/about-image.jpg"
          alt="Portrait of Brian Do"
        />
        <AboutStorySection paragraphs={storyParagraphs} />
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
