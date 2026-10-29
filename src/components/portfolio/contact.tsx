
import type { ReactNode } from "react";

const email = null as string | null;
const phone = null as string | null;
const whatsapp = null as string | null;

type ContactRow = {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
  external: boolean;
};

const rows: ContactRow[] = [
  {
    label: "GitHub",
    value: "github.com/jubail-dev",
    href: "https://github.com/jubail-dev",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .08 1.54 1.04 1.54 1.04.9 1.53 2.35 1.09 2.92.83.1-.66.35-1.1.64-1.36-2.22-.26-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.48 9.48 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.69-4.57 4.94.36.31.68.9.68 1.82v2.7c0 .26.18.57.69.47A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jubail-dev",
    href: "https://linkedin.com/in/jubail-dev",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6" aria-hidden="true">
        <path d="M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9c0 .3.25.55.55.55h16.9c.3 0 .55-.25.55-.55V3.55a.55.55 0 0 0-.55-.55ZM8.34 18.34H5.66V9.72h2.68v8.62ZM7 8.54a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.35 9.8h-2.67v-4.19c0-1 0-2.29-1.4-2.29-1.4 0-1.61 1.09-1.61 2.22v4.26H10V9.72h2.56v1.08h.04c.36-.68 1.23-1.4 2.53-1.4 2.7 0 3.2 1.78 3.2 4.1v4.74h.02Z" />
      </svg>
    ),
  },
  ...(email
    ? [
        {
          label: "Email",
          value: email,
          href: `mailto:${email}`,
          external: false,
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m18 10V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" />
            </svg>
          ),
        },
      ]
    : []),
  ...(phone
    ? [
        {
          label: "Phone",
          value: phone,
          href: `tel:${phone.replace(/[^+\d]/g, "")}`,
          external: false,
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
          ),
        },
      ]
    : []),
  ...(whatsapp
    ? [
        {
          label: "WhatsApp",
          value: whatsapp,
          href: `https://wa.me/${whatsapp.replace(/\D/g, "")}`,
          external: true,
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-6" aria-hidden="true">
              <path d="M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.43 9.89-9.88 9.89m0-21.79C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.42A11.82 11.82 0 0 0 12.05 0Z" />
            </svg>
          ),
        },
      ]
    : []),
];

const missingChannels = [
  !email && "Email",
  !phone && "Phone",
  !whatsapp && "WhatsApp",
].filter((channel): channel is string => Boolean(channel));

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate scroll-mt-20 overflow-hidden border-t-2 border-black bg-[#FBBF13] text-black"
    >
      {/* Decorative shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-24 -top-24 size-80 rounded-full border border-black/[0.08]" />
        <div className="absolute -right-12 -top-12 size-56 rounded-full border border-black/[0.08]" />
        <div className="absolute -bottom-32 -left-20 size-72 rounded-full border border-black/[0.07]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        {/* Heading */}
        <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.28em]">
              <span className="h-[3px] w-9 bg-black" />
              Get in touch
            </p>

            <h2
              id="contact-heading"
              className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl"
            >
              LET&apos;S MAKE
              <br />
              SOMETHING
              <br />
              <span className="text-white [text-shadow:2px_2px_0_#000] sm:[text-shadow:3px_3px_0_#000]">
                AMAZING.
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:justify-self-end">
            <p className="text-base leading-8 text-black/75 sm:text-lg">
              Have a project in mind, an exciting opportunity, or just want to
              talk about web development? Let&apos;s connect and turn your idea
              into something real.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full border-2 border-black bg-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M7 7h10v10" />
                </svg>
              </span>
              <span className="text-sm font-bold">Let&apos;s build something meaningful.</span>
            </div>
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-3xl border-2 border-black bg-white p-6 shadow-[6px_6px_0_#000] transition-transform duration-300 hover:-translate-y-1 sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-black/50">
                  Around the web
                </p>
                <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                  Find me online.
                </h3>
              </div>

              <span className="grid size-12 shrink-0 place-items-center rounded-2xl border-2 border-black bg-[#FBBF13]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M7 7h10v10" />
                </svg>
              </span>
            </div>

            <ul className="mt-8 space-y-3" aria-label="Contact links">
              {rows.map((row) => (
                <li key={row.label}>
                  <a
                    href={row.href}
                    {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex min-w-0 items-center gap-4 rounded-2xl border-2 border-black/10 bg-[#FFFDF5] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:p-5"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-black/10 bg-[#FBBF13] text-black transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-[#FBBF13]">
                      {row.icon}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-bold uppercase tracking-wider text-black/50 transition-colors group-hover:text-white/60">
                        {row.label}
                      </span>
                      <span className="mt-1 block truncate text-sm font-bold text-black transition-colors group-hover:text-white sm:text-base">
                        {row.value}
                      </span>
                    </span>

                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5 shrink-0 text-black transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#FBBF13]" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7m0 0H8m9 0v9" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs font-medium text-black/50">
              Connect with me and follow my development journey.
            </p>
          </div>

          <div className="relative flex flex-col overflow-hidden rounded-3xl border-2 border-black bg-black p-6 text-white shadow-[6px_6px_0_rgba(255,255,255,0.7)] sm:p-8 lg:p-10">
            <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full border border-white/10" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-5 -top-5 size-32 rounded-full border border-white/10" />

            <div className="relative flex flex-1 flex-col">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#FBBF13]/40 bg-[#FBBF13]/10 px-3.5 py-2 text-xs font-bold text-[#FBBF13]">
                <span className="size-2 rounded-full bg-[#FBBF13]" />
                OPEN TO OPPORTUNITIES
              </span>

              <h3 className="mt-8 max-w-md text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                HAVE A PROJECT?
                <br />
                <span className="text-[#FBBF13]">LET&apos;S TALK.</span>
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/65 sm:text-base">
                I&apos;m always interested in exploring new ideas, collaborating
                with creative people, and building useful digital experiences.
                Your next project could start with a simple message.
              </p>

              <div className="mt-8">
                {email ? (
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-3 rounded-xl border-2 border-[#FBBF13] bg-[#FBBF13] px-6 py-4 text-sm font-black text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FBBF13]"
                  >
                    SEND ME AN EMAIL
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    title="Add your email address to enable this button."
                    className="inline-flex cursor-not-allowed items-center gap-3 rounded-xl border-2 border-white/15 px-6 py-4 text-sm font-bold text-white/40"
                  >
                    EMAIL COMING SOON
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </button>
                )}
              </div>

              <div className="mt-auto pt-10">
                <div className="mb-5 h-px bg-white/15" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
                  More ways to connect
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {missingChannels.length > 0 ? (
                    missingChannels.map((channel) => (
                      <span
                        key={channel}
                        className="rounded-lg border border-white/15 px-3 py-2 text-xs text-white/50"
                      >
                        {channel} coming soon
                      </span>
                    ))
                  ) : (
                    <p className="text-sm text-white/60">
                      All contact channels are available above.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col gap-4 border-t border-black/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold text-black/60">
            © {new Date().getFullYear()} JUBAIL. Built with passion.
          </p>

          <a
            href="#home"
            className="w-fit text-sm font-extrabold transition-transform hover:-translate-y-0.5 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </section>
  );
}
