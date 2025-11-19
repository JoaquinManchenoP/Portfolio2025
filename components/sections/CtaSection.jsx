export default function CtaSection({
  title,
  description,
  primaryLabel,
  secondaryLabel,
}) {
  return (
    <section className="rounded-3xl border border-white/5 bg-[#0e0f11] p-6 text-center shadow-inner shadow-black/60 -mx-1 sm:-mx-4 transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_25px_65px_rgba(0,0,0,0.7)]">
      <p className="text-2xl font-semibold">{title}</p>
      <p className="mt-2 text-sm text-white/60">{description}</p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <button className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white active:scale-95">
          {primaryLabel}
        </button>
        <button className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 active:scale-95">
          {secondaryLabel}
        </button>
      </div>
    </section>
  );
}
