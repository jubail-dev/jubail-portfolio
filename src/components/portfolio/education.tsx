
export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative isolate scroll-mt-20 overflow-hidden border-t-2 border-black bg-[#FBBF13] text-black"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 -z-10 size-80 rounded-full border border-black/[0.08]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 -z-10 size-56 rounded-full border border-black/[0.08]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 -z-10 size-80 rounded-full border border-black/[0.06]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        {/* Section header */}
        <div className="mb-12 grid gap-6 border-b border-black/20 pb-10 md:grid-cols-[1fr_0.7fr] md:items-end md:pb-14 lg:mb-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-10 bg-black" />
              <p className="text-xs font-black uppercase tracking-[0.25em]">
                Education & Learning
              </p>
            </div>

            <h2
              id="education-heading"
              className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl"
            >
              THE JOURNEY
              <br />
              <span className="text-white [text-shadow:2px_2px_0_#000] sm:[text-shadow:3px_3px_0_#000]">
                BEHIND MY GROWTH.
              </span>
            </h2>
          </div>

          <div className="max-w-md md:justify-self-end">
            <p className="text-sm leading-7 text-black/70 sm:text-base">
              Every step of my education helps shape how I think, solve
              problems, and continue growing as a developer. My journey
              combines academic learning with practical skills.
            </p>

            <div className="mt-5 h-1 w-16 bg-black" />
          </div>
        </div>

        {/* Education card */}
        <article className="group relative overflow-hidden rounded-3xl border-2 border-black bg-white shadow-[6px_6px_0_#000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0_#000] sm:rounded-[2rem]">
          <div className="absolute inset-x-0 top-0 h-2 bg-black" />

          <div className="grid gap-8 p-6 pt-9 sm:p-9 sm:pt-10 md:grid-cols-[200px_1fr] md:gap-10 lg:grid-cols-[240px_1fr] lg:gap-14 lg:p-12">
            {/* Year and status */}
            <div className="flex flex-row items-start justify-between gap-5 md:flex-col md:justify-start">
              <div>
                <p className="text-6xl font-black tracking-tighter text-black/[0.08] transition-colors duration-300 group-hover:text-[#FBBF13] sm:text-7xl lg:text-8xl">
                  01
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <span className="h-[3px] w-8 bg-[#FBBF13]" />
                  <span className="text-sm font-black">
                    2021 — 2027
                  </span>
                </div>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#FBBF13] px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.12em] sm:text-xs md:mt-5">
                <span className="size-2 rounded-full bg-black" />
                In Progress
              </span>
            </div>

            {/* Education details */}
            <div className="border-t-2 border-black/10 pt-7 md:border-l-2 md:border-t-0 md:pl-9 md:pt-0 lg:pl-12">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-black/50">
                Currently Studying
              </p>

              <h3 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                BBA Honours
                <span className="text-[#FBBF13]">.</span>
              </h3>

              <p className="mt-4 text-base font-bold leading-7 sm:text-lg">
                Government Shamsul Haque College
              </p>

              <p className="mt-2 text-sm leading-6 text-black/55">
                Affiliated with National University, Bangladesh
              </p>

              {/* Academic information */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border-2 border-black/10 bg-[#FFF9E8] p-4 transition-colors duration-300 hover:border-black/30">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-black/10 bg-[#FBBF13]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="size-5"
                        aria-hidden="true"
                      >
                        <rect x="3" y="5" width="18" height="16" rx="2" />
                        <path strokeLinecap="round" d="M16 3v4M8 3v4M3 10h18" />
                      </svg>
                    </span>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-black/45">
                        Expected Graduation
                      </p>
                      <p className="mt-1 text-lg font-black">2027</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border-2 border-black/10 bg-[#FFF9E8] p-4 transition-colors duration-300 hover:border-black/30">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-black/10 bg-[#FBBF13]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="size-5"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
                      </svg>
                    </span>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-black/45">
                        Academic Journey
                      </p>
                      <p className="mt-1 text-base font-black">
                        2021 — Present
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col gap-4 border-t border-black/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-black/60">
            Learning doesn&apos;t stop at the classroom.
          </p>

          <p className="text-[10px] font-black uppercase tracking-[0.15em] sm:text-xs sm:tracking-[0.2em]">
            Education
            <span className="mx-2">/</span>
            Practice
            <span className="mx-2">/</span>
            <span className="underline decoration-2 underline-offset-4">
              Growth
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;