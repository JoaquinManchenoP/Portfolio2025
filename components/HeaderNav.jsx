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

  {
    label: "Settings",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M19.14 12.94a7.18 7.18 0 0 0 .06-.94 7.18 7.18 0 0 0-.06-.94l2.11-1.65a.46.46 0 0 0 .11-.58l-2-3.46a.45.45 0 0 0-.56-.2l-2.49 1a6.86 6.86 0 0 0-1.63-.94l-.38-2.65A.45.45 0 0 0 13.89 2h-3.78a.45.45 0 0 0-.45.38l-.38 2.65a6.86 6.86 0 0 0-1.63.94l-2.49-1a.45.45 0 0 0-.56.2l-2 3.46a.46.46 0 0 0 .11.58L4.86 11a7.18 7.18 0 0 0-.06.94 7.18 7.18 0 0 0 .06.94l-2.11 1.65a.46.46 0 0 0-.11.58l2 3.46a.45.45 0 0 0 .56.2l2.49-1a6.86 6.86 0 0 0 1.63.94l.38 2.65a.45.45 0 0 0 .45.38h3.78a.45.45 0 0 0 .45-.38l.38-2.65a6.86 6.86 0 0 0 1.63-.94l2.49 1a.45.45 0 0 0 .56-.2l2-3.46a.46.46 0 0 0-.11-.58Zm-7.14 2.31a3.25 3.25 0 1 1 3.25-3.25 3.25 3.25 0 0 1-3.25 3.25Z" />
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

            if (action.href) {
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  aria-label={action.label}
                  className={sharedClass}
                >
                  {action.icon}
                </Link>
              );
            }

            return (
              <button
                key={action.label}
                className={sharedClass}
                aria-label={action.label}
                type="button"
              >
                {action.icon}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white px-4 py-2.5 text-sm font-semibold text-black shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white text-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 active:scale-95"
        >
          Hire Me
        </button>
      </div>
    </header>
  );
}
