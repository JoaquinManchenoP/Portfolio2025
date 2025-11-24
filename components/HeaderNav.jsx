import Link from "next/link";

const navActions = [
  {
    label: "Home",
    href: "/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 3 3 10h2v9h5v-5h4v5h5v-9h2z" />
      </svg>
    ),
  },
  {
    label: "Profile",
    href: "/about",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 12a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 12 12zm0 2c-3 0-5.5 1.57-5.5 3.5V20h11v-2.5C17.5 15.57 15 14 12 14z" />
      </svg>
    ),
  },
  {
    label: "Projects",
    href: "/projects",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M4 5h5l2 2h9v12H4z" />
      </svg>
    ),
  },
];

export default function HeaderNav({ className = "" }) {
  return (
    <header
      className={`rounded-3xl border border-white/5 bg-white/5 p-4 shadow-inner shadow-black/40 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08] ${className}`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center justify-between gap-2 sm:justify-start">
          {navActions.map((action) => {
            const sharedClass =
              "flex h-10 w-10 items-center justify-center rounded-2xl border border-white/5 bg-black/30 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60 active:scale-95";

            return (
              <div
                key={action.label}
                className="group relative flex flex-col items-center"
              >
                {action.href ? (
                  <Link
                    href={action.href}
                    aria-label={action.label}
                    className={sharedClass}
                  >
                    {action.icon}
                  </Link>
                ) : (
                  <button
                    className={sharedClass}
                    aria-label={action.label}
                    type="button"
                  >
                    {action.icon}
                  </button>
                )}
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-black/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white opacity-0 shadow-lg shadow-black/40 transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100">
                  {action.label}
                </span>
              </div>
            );
          })}
        </div>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white px-4 py-2.5 text-sm font-semibold text-black shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white text-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 active:scale-95"
        >
          Download CV
        </button>
      </div>
    </header>
  );
}
