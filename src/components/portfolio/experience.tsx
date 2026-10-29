type Milestone = {
  title: string;
  description: string;
  icon: "foundation" | "frontend" | "backend";
  status?: string;
};

const milestones: readonly Milestone[] = [
  {
    title: "Frontend fundamentals",
    description: "Started by learning the building blocks of the web: HTML, CSS, and JavaScript.",
    icon: "foundation",
  },
  {
    title: "Modern frontend development",
    description: "Expanded into React.js, Next.js, TypeScript, and Tailwind CSS to build responsive, user-friendly interfaces.",
    icon: "frontend",
  },
  {
    title: "Full-stack learning in progress",
    description: "Currently learning backend development with Node.js, Express.js, and MongoDB to better understand complete web applications.",
    icon: "backend",
    status: "Current focus",
  },
];

function MilestoneIcon({ type }: { type: Milestone["icon"] }) {
  const path = {
    foundation: <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M6 16V9l6-4 6 4v7M9 16v-4h6v4" />,
    frontend: <path strokeLinecap="round" strokeLinejoin="round" d="m8 9-3 3 3 3m8-6 3 3-3 3m-2-9-4 12" />,
    backend: <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v3m10-3v3M5 9h14M6 7h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />,
  } as const;

  return (
    <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
      <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        {path[type]}
      </svg>
    </span>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-18 bg-slate-950" aria-labelledby="journey-heading">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">My learning journey</p>
          <h2 id="journey-heading" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Learning, building, and growing step by step.
          </h2>
          <p className="mt-5 leading-7 text-slate-400">
            I&apos;m at the beginning of my professional journey, focused on building a thoughtful foundation and expanding my skills through continuous learning.
          </p>
        </div>

        <ol className="relative mt-12 max-w-4xl space-y-6 pl-8 sm:pl-14">
          <div aria-hidden="true" className="absolute bottom-6 left-3 top-6 w-px bg-linear-to-b from-blue-400 via-blue-400/35 to-transparent sm:left-5" />
          {milestones.map((milestone, index) => (
            <li key={milestone.title} className="relative">
              <span aria-hidden="true" className="absolute -left-8 top-7 grid size-7 place-items-center rounded-full border-4 border-slate-950 bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.45)] sm:-left-14">
                <span className="size-2 rounded-full bg-slate-950" />
              </span>
              <article className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition hover:border-blue-400/25 hover:bg-slate-900/75 sm:p-7">
                <div className="flex gap-4">
                  <MilestoneIcon type={milestone.icon} />
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">Milestone {index + 1}</p>
                      {milestone.status && <span className="rounded-full bg-blue-400/10 px-2.5 py-1 text-xs font-medium text-blue-200">{milestone.status}</span>}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-white">{milestone.title}</h3>
                    <p className="mt-2 leading-7 text-slate-400">{milestone.description}</p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
