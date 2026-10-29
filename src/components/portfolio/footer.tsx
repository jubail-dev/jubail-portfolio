const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/jubail-dev",
    icon: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .08 1.54 1.04 1.54 1.04.9 1.53 2.35 1.09 2.92.83.1-.66.35-1.1.64-1.36-2.22-.26-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.48 9.48 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.69-4.57 4.94.36.31.68.9.68 1.82v2.7c0 .26.18.57.69.47A10 10 0 0 0 12 2Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jubail-dev",
    icon: (
      <path d="M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9c0 .3.25.55.55.55h16.9c.3 0 .55-.25.55-.55V3.55a.55.55 0 0 0-.55-.55ZM8.34 18.34H5.66V9.72h2.68v8.62ZM7 8.54a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.35 9.8h-2.67v-4.19c0-1 0-2.29-1.4-2.29-1.4 0-1.61 1.09-1.61 2.22v4.26H10V9.72h2.56v1.08h.04c.36-.68 1.23-1.4 2.53-1.4 2.7 0 3.2 1.78 3.2 4.1v4.74h.02Z" />
    ),
  },
] as const;

// The copyright year is an unstable value during prerendering under Cache
// Components, so it is cached ("use cache") rather than computed inline.
async function getCopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const copyrightYear = await getCopyrightYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <p className="text-lg font-bold tracking-[0.2em] text-white">
              JUBAIL<span className="text-blue-400">.</span>
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Frontend Developer building polished, high-performing web experiences.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">Quick links</h2>
            <ul className="mt-5 space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-slate-300 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">Social</h2>
            <div className="mt-5 flex items-center gap-3" aria-label="Social profiles">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${social.label} (opens in a new tab)`}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                >
                  <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {copyrightYear} Jubail. All rights reserved.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            Back to top
            <svg aria-hidden="true" className="size-4 transition group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0-6 6m6-6 6 6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
