import Image from "next/image";

export default function AboutPortraitSection({ imageSrc, alt }) {
  return (
    <section className="rounded-3xl border border-white/5 bg-white/[0.05] p-4 -mx-1 sm:-mx-4 transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.09]">
      <div className="overflow-hidden rounded-[28px] border border-white/5 bg-black/20 shadow-inner shadow-black/60 transition-transform duration-500 hover:scale-[1.01]">
        <Image
          src={imageSrc}
          alt={alt}
          width={900}
          height={600}
          className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
          priority
        />
      </div>
    </section>
  );
}
