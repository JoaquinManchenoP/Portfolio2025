export default function FollowSection({ socials }) {
  return (
    <section className="rounded-3xl border border-white/5 bg-white/[0.03] p-6 -mx-1 sm:-mx-4 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold">Follow Me</p>
          <p className="text-sm text-white/60">Sharing new work weekly.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="rounded-2xl border border-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:text-white active:scale-95"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
