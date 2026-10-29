import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  featureIcons,
  getProjectBySlug,
  projects,
  ProjectPreview,
  type Project,
} from "@/components/portfolio/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

// Note: `dynamicParams` cannot be used here — Cache Components is enabled in
// next.config.ts. Unknown slugs are handled by notFound() below instead.

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found | Jubail" };
  }

  return {
    title: `${project.name} | Project Details`,
    description: project.tagline,
  };
}

function SectionHeading({
  label,
  title,
  id,
}: {
  label: string;
  title: string;
  id?: string;
}) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span aria-hidden="true" className="h-[3px] w-10 shrink-0 bg-blue-400" />

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
          {label}
        </p>

        <h2
          id={id}
          className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

function TechStackGroups({ project }: { project: Project }) {
  const groups = project.technologies.reduce<Map<string, string[]>>(
    (accumulator, technology) => {
      const existing = accumulator.get(technology.category) ?? [];
      existing.push(technology.name);
      accumulator.set(technology.category, existing);
      return accumulator;
    },
    new Map(),
  );

  return (
    <div className="space-y-6">
      {Array.from(groups.entries()).map(([category, names]) => (
        <div
          key={category}
          className="grid gap-3 sm:grid-cols-[10rem_1fr] sm:items-baseline"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
            {category}
          </p>

          <div className="flex flex-wrap gap-2">
            {names.map((name) => (
              <span
                key={name}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-200"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter(
    (candidate) => candidate.slug !== project.slug,
  );

  return (
    <main className="bg-slate-950">
      {/* Project Hero */}
      <section
        aria-labelledby="project-title"
        className="relative overflow-hidden border-b border-white/10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-blue-500/[0.07] blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to Projects
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                {project.category}
              </p>

              <h1
                id="project-title"
                className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl"
              >
                {project.name}
              </h1>

              <p className="mt-5 leading-7 text-slate-300">{project.tagline}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.slice(0, 6).map((technology) => (
                  <span
                    key={technology.name}
                    className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-200"
                  >
                    {technology.name}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  Live Demo
                  <ExternalLink aria-hidden="true" className="size-4" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>

                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  <FaGithub aria-hidden="true" className="size-4" />
                  Source Code
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>

            <ProjectPreview
              visual={project.visual}
              liveUrl={project.liveUrl}
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section
        aria-labelledby="overview-heading"
        className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <SectionHeading
          id="overview-heading"
          label="Project Overview"
          title="Why it exists and who it serves."
        />

        <div className="space-y-5">
          {project.longDescription.map((paragraph) => (
            <p key={paragraph} className="leading-8 text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section
        aria-labelledby="features-heading"
        className="border-y border-white/10 bg-slate-900/40"
      >
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionHeading
            id="features-heading"
            label="Key Features"
            title="What is actually implemented."
          />

          <ul className="grid gap-4 sm:grid-cols-2">
            {project.features.map((feature) => {
              const Icon = featureIcons[feature.icon];

              return (
                <li
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-blue-400/40 sm:p-6"
                >
                  <div className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="grid size-11 shrink-0 place-items-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-blue-300"
                    >
                      <Icon className="size-5" />
                    </span>

                    <div>
                      <h3 className="font-bold text-white">{feature.title}</h3>

                      <p className="mt-1.5 text-sm leading-6 text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Technology Stack */}
      <section
        aria-labelledby="stack-heading"
        className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <SectionHeading
          id="stack-heading"
          label="Technology Stack"
          title="Tools verified from the source."
        />

        <TechStackGroups project={project} />
      </section>

      {/* Challenges & Learning */}
      <section
        aria-labelledby="challenges-heading"
        className="border-y border-white/10 bg-slate-900/40"
      >
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionHeading
            id="challenges-heading"
            label="Challenges & Learning"
            title="Problems worth solving."
          />

          <ol className="space-y-5">
            {project.challenges.map((challenge, index) => (
              <li
                key={challenge.title}
                className="flex gap-5 rounded-2xl border border-white/10 bg-slate-900/60 p-6"
              >
                <span
                  aria-hidden="true"
                  className="text-3xl font-black text-white/10"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="font-bold text-white">{challenge.title}</h3>

                  <p className="mt-1.5 text-sm leading-6 text-slate-400">
                    {challenge.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Project Links */}
      <section
        aria-labelledby="links-heading"
        className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <SectionHeading
          id="links-heading"
          label="Project Links"
          title="See it live or clone the code."
        />

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Live Demo
            <ExternalLink aria-hidden="true" className="size-4" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>

          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            <FaGithub aria-hidden="true" className="size-4" />
            Source Code
            <span className="sr-only">(opens in a new tab)</span>
          </a>

          <Link
            href="/#projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-slate-400 transition hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to All Projects
          </Link>
        </div>
      </section>

      {/* Related Projects */}
      <section
        aria-labelledby="related-heading"
        className="border-t border-white/10 bg-slate-900/40"
      >
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionHeading
            id="related-heading"
            label="Related Projects"
            title="Keep exploring."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {relatedProjects.map((related) => (
              <Link
                key={related.slug}
                href={`/projects/${related.slug}`}
                className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-blue-400/50 hover:bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                  {related.category}
                </p>

                <h3 className="mt-2 flex items-center gap-2 text-lg font-bold text-white">
                  {related.name}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 text-slate-500 transition group-hover:text-blue-300"
                  />
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {related.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
