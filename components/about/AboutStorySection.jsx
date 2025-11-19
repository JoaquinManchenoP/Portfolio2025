export default function AboutStorySection({ paragraphs }) {
  return (
    <section className="rounded-3xl border border-white/5 bg-white/[0.04] p-6 -mx-1 sm:-mx-4 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
      <h2 className="text-xl font-semibold">More About Me</h2>
      <div className="mt-4 space-y-4 text-sm text-white/70">
        {paragraphs.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>
    </section>
  );
}
