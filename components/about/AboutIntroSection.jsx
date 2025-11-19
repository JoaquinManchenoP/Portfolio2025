export default function AboutIntroSection({ title, description }) {
  return (
    <section className="rounded-3xl border border-white/5 bg-white/[0.04] p-6 -mx-1 sm:-mx-4 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
      <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/50">
        About
      </p>
      <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-sm text-white/70">{description}</p>
    </section>
  );
}
