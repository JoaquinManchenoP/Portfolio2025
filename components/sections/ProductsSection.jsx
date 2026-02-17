export default function ProductsSection({ items }) {
  return (
    <section className="rounded-3xl border border-white/5 bg-white/[0.02] -mx-1 sm:-mx-4 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
      <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
            Software Projects
          </p>
        </div>
      </div>
      <div className="space-y-3 p-4 sm:p-6">
        {items.map((product) => (
          <article
            key={product.name}
            className="group flex items-center justify-between rounded-2xl border border-white/5 bg-black/20 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-black/35"
          >
            <a href={product.link}>
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${product.colors} text-base font-bold text-black shadow-lg shadow-black/40 transition-transform duration-300 group-hover:scale-110`}
                >
                  {product.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold">{product.name}</p>
                  <p className="text-xs text-white/60">{product.description}</p>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
