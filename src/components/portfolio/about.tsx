const skills = [
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
];

const highlights = [
  { number: "01", title: "Clean Code", description: "Readable and maintainable code" },
  { number: "02", title: "Responsive UI", description: "Designed for every screen" },
  { number: "03", title: "Continuous Growth", description: "Learning through real projects" },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-20 overflow-hidden border-t border-black/5 bg-[#fcfbf7] text-black selection:bg-[#f5b813]/30"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-12 h-96 w-96 rounded-full bg-gradient-to-br from-[#f5b813]/20 to-amber-200/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-12 h-96 w-96 rounded-full bg-gradient-to-tr from-[#f5b813]/15 to-yellow-100/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
       <div className="mb-14 sm:mb-20">
  <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
    {/* Main Heading */}
    <div className="max-w-3xl">
      <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#b88900]">
        A LITTLE INTRODUCTION
      </p>

      <h2
        id="about-heading"
        className="text-5xl font-black leading-[1.05] tracking-[-0.055em] text-[#171717] sm:text-6xl lg:text-7xl"
      >
        The Person
        <br />
        Behind The
        <br className="hidden sm:block" />
        <span className="text-[#c89400]">Pixels.</span>
      </h2>
    </div>

    {/* Short Description */}
    <div className="max-w-sm lg:mb-2">
      <p className="text-base leading-8 text-black/60 sm:text-lg">
        I turn ideas into meaningful digital experiences through
        thoughtful design, clean code, and a passion for learning.
      </p>

      <div className="mt-5 h-1 w-16 rounded-full bg-[#f5b813]" />
    </div>
  </div>
</div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="group relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[2.5rem] bg-[#121212] p-8 text-white shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:p-11 lg:min-h-full">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-72 w-72 rounded-full border border-white/10 transition-transform duration-700 ease-out group-hover:scale-125"
            />
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-52 w-52 rounded-full border border-[#f5b813]/25 transition-transform duration-700 ease-out group-hover:rotate-45 group-hover:scale-110"
            />

            <div className="relative z-10">
              <span className="inline-flex rounded-full border border-[#f5b813]/40 bg-[#f5b813]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#f5b813] backdrop-blur-md">
                About Me
              </span>

              <h3 className="mt-10 text-3xl font-black leading-tight sm:text-4xl">
                Hello, I&apos;m
                <br />
                <span className="bg-gradient-to-r from-[#f5b813] to-amber-300 bg-clip-text text-transparent">
                  Jubail.
                </span>
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70 sm:text-base">
                A Frontend Developer passionate about creating modern,
                responsive, and user-friendly web experiences.
              </p>
            </div>

            <div className="relative z-10 mt-12 border-t border-white/10 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                My current focus
              </p>

              <p className="mt-3 text-lg font-bold text-white">
                Frontend Development
                <span className="mx-2 inline-block text-[#f5b813] transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
                <br className="sm:hidden" />
                <span className="text-white/50">Full-Stack Engineering</span>
              </p>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-12 h-52 w-52 rounded-full bg-[#f5b813]/15 blur-3xl transition-all duration-500 group-hover:bg-[#f5b813]/25"
            />
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-[2.5rem] border border-black/5 bg-white/90 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] backdrop-blur-sm sm:p-10">
              <div className="mb-6 flex items-center gap-3.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f5b813]/20 text-lg font-black text-black shadow-inner">
                  ✳
                </span>
                <h3 className="text-xl font-bold sm:text-2xl">
                  A Little About My Journey
                </h3>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-black/70 sm:text-base sm:leading-8">
                <p>
                  I&apos;m Jubail, a Frontend Developer who enjoys turning
                  ideas into clean, interactive, and accessible web
                  interfaces. I believe a great website should look
                  beautiful and work smoothly on every device.
                </p>

                <p>
                  My primary toolkit includes React.js, Next.js,
                  JavaScript, TypeScript, and Tailwind CSS. I enjoy
                  building practical projects that help me improve my
                  problem-solving skills and write better code.
                </p>

                <p>
                  I&apos;m now expanding my knowledge of backend
                  development and databases to become a Full-Stack
                  Web Developer who can build complete web applications.
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-black/5 bg-white/90 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] backdrop-blur-sm sm:p-10">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                    What I work with
                  </p>
                  <h3 className="mt-1 text-xl font-bold sm:text-2xl">
                    My Core Toolkit<span className="text-[#f5b813]">.</span>
                  </h3>
                </div>

                <span className="text-xs font-semibold text-black/40">
                  Technologies & Tools
                </span>
              </div>

              <ul
                className="mt-6 flex flex-wrap gap-3"
                aria-label="Technical skills"
              >
                {skills.map((skill, index) => (
                  <li
                    key={skill}
                    className="group/skill inline-flex cursor-default items-center gap-3 rounded-2xl border border-black/10 bg-[#f8f7f2] px-5 py-3 text-sm font-bold text-black/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#f5b813] hover:bg-[#f5b813] hover:text-black hover:shadow-[0_10px_25px_rgba(245,184,19,0.25)]"
                  >
                    <span className="text-xs font-black text-[#b88900] transition-colors group-hover/skill:text-black">
                      0{index + 1}
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.number}
              className="group relative flex items-start gap-4 overflow-hidden rounded-3xl border border-black/5 bg-white/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#f5b813]/50 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] sm:p-7"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f5b813]/20 text-sm font-black text-black transition-all duration-300 group-hover:scale-110 group-hover:bg-[#f5b813]">
                {item.number}
              </span>

              <div>
                <h4 className="text-base font-bold text-black">{item.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-black/60">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center gap-3 sm:mt-20">
          <span className="h-2 w-16 rounded-full bg-gradient-to-r from-[#f5b813] to-amber-400" />
          <span className="h-2 w-6 rounded-full bg-black/15" />
          <span className="h-2 w-2 rounded-full bg-black/10" />
        </div>
      </div>
    </section>
  );
}

export default About;