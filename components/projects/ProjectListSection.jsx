export default function ProjectListSection({ items }) {
  return (
    <section className="rounded-3xl border border-white/5 bg-white/[0.04] -mx-1 sm:-mx-4 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
      <div className="space-y-3 p-4 sm:p-6">
        {items.map((project) => (
          <article
            key={project.name}
            className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 px-4 py-4 transition hover:-translate-y-0.5 hover:border-white/30"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${project.colors} text-base font-bold text-black`}
              >
                {project.icon}
              </div>
              <div>
                <p className="text-sm font-semibold">{project.name}</p>
                <p className="text-xs text-white/60">{project.description}</p>
              </div>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 text-white/70">
              →
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
