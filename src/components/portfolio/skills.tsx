
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { FaCss3Alt, FaCode, FaDatabase, FaTools } from "react-icons/fa";
import type { IconType } from "react-icons";

type Technology = {
  name: string;
  icon: IconType;
  color: string;
};

type SkillGroup = {
  number: string;
  label: string;
  title: string;
  description: string;
  icon: IconType;
  technologies: Technology[];
};

const skillGroups: SkillGroup[] = [
  {
    number: "01",
    label: "FRONTEND",
    title: "Frontend Development",
    description:
      "Building responsive, accessible and engaging web experiences with modern tools and frameworks.",
    icon: FaCode,
    technologies: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    number: "02",
    label: "BACKEND & DATABASE",
    title: "Backend Development",
    description:
      "Learning to build APIs, handle authentication and work with databases.",
    icon: FaDatabase,
    technologies: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Better Auth", icon: FaDatabase, color: "#F5B813" },
    ],
  },
  {
    number: "03",
    label: "TOOLS & WORKFLOW",
    title: "Tools & Workflow",
    description:
      "Managing code, connecting applications and organizing development projects.",
    icon: FaTools,
    technologies: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "REST APIs", icon: FaCode, color: "#F5B813" },
    ],
  },
];

function TechnologyTag({ technology }: { technology: Technology }) {
  const Icon = technology.icon;

  return (
    <li>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-2 text-sm text-white/75 transition-all duration-200 hover:border-[#f5b813] hover:bg-[#f5b813]/10 hover:text-white">
        <Icon
          aria-hidden="true"
          className="shrink-0"
          style={{ color: technology.color }}
          size={15}
        />
        {technology.name}
      </span>
    </li>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#0b0b0b] text-white"
    >
      {/* Subtle yellow background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-[28%] -z-10 size-[420px] rounded-full bg-[#f5b813]/10 blur-[140px] sm:size-[560px]"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        {/* Header */}
        <div className="relative grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-start">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[3px] w-10 bg-[#f5b813]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">
                My Skills
              </p>
            </div>

            <h2
              id="skills-heading"
              className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Technologies I Use
              <br />
              to <span className="text-[#f5b813]">Build Great Things.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              I work with modern web technologies to create responsive,
              user-friendly applications. Here are the tools and frameworks
              I&apos;m currently using and learning.
            </p>
          </div>

          <div className="hidden justify-self-end pt-5 md:block">
            <p className="rotate-[-7deg] text-sm font-semibold italic text-[#f5b813]">
              Always learning ↙
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
          {/* Skill Categories */}
          <div>
            {skillGroups.map((group) => {
              const GroupIcon = group.icon;

              return (
                <article
                  key={group.number}
                  className="grid grid-cols-[42px_1fr] gap-4 border-b border-white/10 py-8 first:pt-0 sm:grid-cols-[60px_1fr] sm:gap-6 sm:py-9"
                >
                  <p className="pt-1 text-2xl font-bold tracking-tight text-white/35 sm:text-3xl">
                    {group.number}
                  </p>

                  <div className="min-w-0">
                    <div className="flex items-start gap-3">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-[#f5b813] text-[#f5b813]">
                        <GroupIcon size={19} aria-hidden="true" />
                      </span>

                      <div className="min-w-0">
                        <p className="text-[10px] font-bold tracking-[0.2em] text-[#f5b813]">
                          {group.label}
                        </p>

                        <h3 className="mt-1 text-lg font-bold sm:text-xl">
                          {group.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-white/55">
                      {group.description}
                    </p>

                    <ul
                      aria-label={`${group.title} technologies`}
                      className="mt-5 flex flex-wrap gap-2"
                    >
                      {group.technologies.map((technology) => (
                        <TechnologyTag
                          key={technology.name}
                          technology={technology}
                        />
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Floating Technology Logos */}
          <div className="relative mx-auto flex min-h-[340px] w-full max-w-[500px] items-center justify-center sm:min-h-[440px] lg:sticky lg:top-24 lg:mt-0 lg:min-h-[520px] lg:self-start">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5b813]/20 blur-[75px] sm:size-64"
            />

            <div
              aria-hidden="true"
              className="absolute left-[10%] top-[25%] h-px w-[80%] rotate-[-32deg] bg-gradient-to-r from-transparent via-[#f5b813]/60 to-transparent"
            />

            <div
              aria-hidden="true"
              className="absolute left-[8%] top-[65%] h-px w-[84%] rotate-[-32deg] bg-gradient-to-r from-transparent via-[#f5b813]/40 to-transparent"
            />

            <div className="relative h-[330px] w-full max-w-[440px] sm:h-[430px]">
              <div className="absolute left-[8%] top-[8%] flex size-[76px] -rotate-12 items-center justify-center rounded-2xl border border-white/10 bg-[#171717] shadow-2xl transition-transform duration-300 hover:rotate-0 sm:size-[94px]">
                <SiNextdotjs className="size-9 text-white sm:size-11" />
              </div>

              <div className="absolute right-[10%] top-[12%] flex size-[72px] rotate-6 items-center justify-center rounded-2xl border border-white/10 bg-[#171717] shadow-2xl transition-transform duration-300 hover:rotate-0 sm:size-[90px]">
                <SiTailwindcss className="size-9 text-[#38BDF8] sm:size-11" />
              </div>

              <div className="absolute left-[34%] top-[21%] flex size-[90px] rotate-[-7deg] items-center justify-center rounded-2xl border border-[#f5b813]/40 bg-[#f5b813] shadow-[0_0_45px_rgba(245,184,19,0.18)] transition-transform duration-300 hover:rotate-0 sm:size-[112px]">
                <SiJavascript className="size-12 text-black sm:size-16" />
              </div>

              <div className="absolute left-[1%] top-[43%] flex size-[76px] rotate-6 items-center justify-center rounded-2xl border border-white/10 bg-[#171717] shadow-2xl transition-transform duration-300 hover:rotate-0 sm:size-[94px]">
                <SiNodedotjs className="size-10 text-[#68A063] sm:size-12" />
              </div>

              <div className="absolute left-[31%] top-[42%] flex size-[124px] rotate-3 items-center justify-center rounded-[26px] border border-white/10 bg-[#171717] shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:rotate-0 sm:size-[154px]">
                <SiReact className="size-[76px] text-[#61DAFB] sm:size-[94px]" />
              </div>

              <div className="absolute right-[2%] top-[45%] flex size-[72px] -rotate-6 items-center justify-center rounded-2xl border border-white/10 bg-[#171717] shadow-2xl transition-transform duration-300 hover:rotate-0 sm:size-[90px]">
                <SiMongodb className="size-9 text-[#47A248] sm:size-11" />
              </div>

              <div className="absolute left-[15%] bottom-[7%] flex size-[72px] -rotate-6 items-center justify-center rounded-2xl border border-white/10 bg-[#171717] shadow-2xl transition-transform duration-300 hover:rotate-0 sm:size-[88px]">
                <SiGithub className="size-9 text-white sm:size-11" />
              </div>

              <div className="absolute right-[18%] bottom-[5%] flex size-[76px] rotate-12 items-center justify-center rounded-2xl border border-white/10 bg-[#171717] shadow-2xl transition-transform duration-300 hover:rotate-0 sm:size-[94px]">
                <SiTypescript className="size-10 text-[#3178C6] sm:size-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-7 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Build <span className="mx-2 text-[#f5b813]">/</span> Learn
            <span className="mx-2 text-[#f5b813]">/</span> Grow
          </p>

          <p className="text-sm text-white/45">
            A better web, one skill at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
