export default function ProductsIntroSection({ title, description }) {
  return (
    <section className="rounded-3xl border border-white/5 bg-white/[0.03] p-6 -mx-1 sm:-mx-4 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-sm text-white/65">{description}</p>
    </section>
  );
}
