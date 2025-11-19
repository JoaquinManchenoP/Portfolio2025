export default function HeroSection({
  label,
  status,
  title,
  description,
  primaryCta,
  secondaryCta,
}) {
  return (
    <section className="group rounded-3xl border border-white/5 bg-white/[0.04] p-6 -mx-1 sm:-mx-4 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/50">
              {label}
            </p>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-200">
              {status}
            </span>
          </div>
          <div>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-white/70">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <button className="flex-1 min-w-[120px] rounded-2xl bg-white px-5 py-3 font-semibold text-black shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white active:scale-95">
              {primaryCta}
            </button>
            <button className="flex-1 min-w-[120px] rounded-2xl border border-white/20 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:text-white active:scale-95">
              {secondaryCta}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="h-28 w-28 rounded-full bg-gradient-to-b from-[#ffe9d0] to-[#f7bf7d] p-1 ring-4 ring-black/30 shadow-[0_25px_50px_rgba(0,0,0,0.45)]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#fdf7ef] text-5xl transition-transform duration-500 group-hover:scale-110">
              🧑🏻‍🎨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
