export default function ProjectsSection({
  title,
  subtitle,
  actionLabel,
  items,
}) {
  return (
    <section className="rounded-3xl border border-white/5 bg-white/[0.04] -mx-1 sm:-mx-4 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
      <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
            {title}
          </p>
          <p className="text-xs text-white/50">{subtitle}</p>
        </div>
        {actionLabel && (
          <button className="rounded-2xl border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 transition hover:border-white/40">
            {actionLabel}
          </button>
        )}
      </div>
      <div className="space-y-3 p-4 sm:p-6">
        {items.map((item) => (
          <article
            key={item.name}
            className="group flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-black/40"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.colors} text-base font-bold text-black shadow-lg shadow-black/40 transition-transform duration-300 group-hover:scale-110`}
              >
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-white/60">{item.description}</p>
              </div>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 text-white/70 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
