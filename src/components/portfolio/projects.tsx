import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bell,
  Bookmark,
  BookOpen,
  Clock,
  Coins,
  Compass,
  ExternalLink,
  Globe,
  Grid,
  KeyRound,
  List,
  Loader,
  Lock,
  Mail,
  Newspaper,
  Sparkles,
  Star,
  Tags,
  TrendingUp,
  User,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export type ProjectVisual = "travel" | "market" | "news";

export type ProjectTechnology = {
  readonly name: string;
  readonly category: string;
};

export type ProjectFeatureIcon =
  | "compass"
  | "bookmark"
  | "user"
  | "key"
  | "mail"
  | "globe"
  | "coins"
  | "trending"
  | "grid"
  | "tags"
  | "lock"
  | "bell"
  | "loader"
  | "list"
  | "newspaper"
  | "star"
  | "book"
  | "clock"
  | "sparkles";

export type ProjectFeature = {
  readonly icon: ProjectFeatureIcon;
  readonly title: string;
  readonly description: string;
};

export type ProjectChallenge = {
  readonly title: string;
  readonly description: string;
};

export type Project = {
  readonly slug: string;
  readonly name: string;
  readonly category: string;
  readonly tagline: string;
  readonly description: string;
  readonly longDescription: readonly string[];
  readonly repository: string;
  readonly liveUrl: string;
  readonly technologies: readonly ProjectTechnology[];
  readonly features: readonly ProjectFeature[];
  readonly challenges: readonly ProjectChallenge[];
  readonly visual: ProjectVisual;
};

export const featureIcons: Record<ProjectFeatureIcon, LucideIcon> = {
  compass: Compass,
  bookmark: Bookmark,
  user: User,
  key: KeyRound,
  mail: Mail,
  globe: Globe,
  coins: Coins,
  trending: TrendingUp,
  grid: Grid,
  tags: Tags,
  lock: Lock,
  bell: Bell,
  loader: Loader,
  list: List,
  newspaper: Newspaper,
  star: Star,
  book: BookOpen,
  clock: Clock,
  sparkles: Sparkles,
};

export const projects: readonly Project[] = [
  {
    slug: "wanderlust",
    name: "Wanderlust",
    category: "Travel Planning",
    tagline: "Browse curated trips and keep a personal shortlist in one travel app.",
    description:
      "A travel-planning single-page app where users explore staff-curated trips, bookmark favorites to their profile, and manage everything through a validated JWT authentication flow.",
    longDescription: [
      "Wanderlust helps travel enthusiasts discover trips and adventures curated for people who are curious about other parts of the world. The trip catalogue presents each trip with its title, start and end dates, location, and description so visitors can evaluate it at a glance.",
      "Registered users can bookmark any trip with a single click and find it again on their personal profile. Accounts are protected by JWT-based login and registration flows with full client-side field validation, backed by a separate REST API service.",
    ],
    repository: "https://github.com/jubail-dev/wanderlust-client-side",
    liveUrl: "https://wanderlust.vercel.app/",
    technologies: [
      { name: "React", category: "Frontend" },
      { name: "React Router", category: "Frontend" },
      { name: "Semantic UI React", category: "UI" },
      { name: "Redux + Thunk", category: "State Management" },
      { name: "Formik & Yup", category: "Forms & Validation" },
      { name: "Axios", category: "HTTP" },
      { name: "JWT Authentication", category: "Authentication" },
      { name: "REST API", category: "Backend" },
      { name: "Vercel", category: "Deployment" },
    ],
    features: [
      {
        icon: "compass",
        title: "Curated trip catalogue",
        description:
          "Staff-picked trips with title, start and end dates, location, and description.",
      },
      {
        icon: "bookmark",
        title: "One-click trip saving",
        description:
          "An Add Trip action bookmarks a trip straight to the signed-in user's profile.",
      },
      {
        icon: "user",
        title: "Register & login modals",
        description:
          "Modal-based sign-up and sign-in flows with validated name, email, username, and password fields.",
      },
      {
        icon: "key",
        title: "JWT sessions",
        description:
          "Successful login issues a JSON Web Token that is stored in the browser for the profile area.",
      },
      {
        icon: "mail",
        title: "Contact form",
        description:
          "A validated contact form for questions, concerns, and feedback.",
      },
      {
        icon: "globe",
        title: "Client-side routing",
        description:
          "Dedicated Home, Available Trips, My Trips, and Contact pages routed in the browser.",
      },
    ],
    challenges: [
      {
        title: "Async state in Redux",
        description:
          "Trip data is fetched from a separate REST API, so every request needed explicit start, success, and failure actions to keep loading state accurate.",
      },
      {
        title: "Wiring the JWT auth flow",
        description:
          "Connecting registration, login, token storage, and profile retrieval across modal-based screens required careful request and state coordination.",
      },
      {
        title: "Consistent form validation",
        description:
          "Shared Formik and Yup schemas keep validation rules consistent between the registration, login, and contact forms.",
      },
    ],
    visual: "travel",
  },
  {
    slug: "bangla-bazar-dhor",
    name: "Bangla BazarDor",
    category: "Market Prices",
    tagline: "Everyday grocery prices in Bangladesh, at a glance.",
    description:
      "A Bengali-first market-price web app with live price movers, category browsing, price sorting, and MongoDB-backed accounts powered by Better Auth.",
    longDescription: [
      "Bangla BazarDor (বাজার দর) makes the prices of everyday essentials — rice, lentils, oil, vegetables, fish, meat, eggs, and more — easy to check in one place. Visitors see each product's name, unit, current price, and price movement, plus dedicated sections for rising and falling prices.",
      "The entire interface is Bengali-first and stays usable on mobile, tablet, and desktop. Visitors can browse categories, sort products by price, and open product pages; signed-in users additionally get market-wise price details. Accounts use Better Auth with email/password as well as Google and GitHub sign-in, with users, accounts, and sessions stored in MongoDB.",
    ],
    repository: "https://github.com/jubail-dev/bangla-bazar-dhor",
    liveUrl: "https://bangla-bazar-dhor.vercel.app",
    technologies: [
      { name: "Next.js 16 (App Router)", category: "Frontend" },
      { name: "React 19", category: "Frontend" },
      { name: "TypeScript", category: "Language" },
      { name: "Tailwind CSS 4", category: "Styling" },
      { name: "DaisyUI 5", category: "UI" },
      { name: "HeroUI", category: "UI" },
      { name: "Better Auth", category: "Authentication" },
      { name: "MongoDB", category: "Database" },
      { name: "Sonner", category: "Notifications" },
      { name: "react-marquee-text", category: "UI" },
      { name: "BazarDor API", category: "Data" },
      { name: "Vercel", category: "Deployment" },
    ],
    features: [
      {
        icon: "coins",
        title: "Market price overview",
        description:
          "Product name, unit, today's price, and price change in a single view.",
      },
      {
        icon: "trending",
        title: "Price movers",
        description:
          "Separate sections highlight products whose prices rose and fell.",
      },
      {
        icon: "grid",
        title: "Category browsing",
        description:
          "Browse all products or filter by category with dedicated category pages.",
      },
      {
        icon: "tags",
        title: "Price sorting",
        description:
          "Sort products by default order, low-to-high, or high-to-low price.",
      },
      {
        icon: "lock",
        title: "Protected product details",
        description:
          "Market-wise price details on product pages are available to signed-in users.",
      },
      {
        icon: "key",
        title: "Password & social sign-in",
        description:
          "Email/password registration alongside Google and GitHub OAuth via Better Auth.",
      },
      {
        icon: "user",
        title: "Profile management",
        description:
          "Users can view their profile and update their information.",
      },
      {
        icon: "list",
        title: "Scrolling price ticker",
        description:
          "A marquee strip keeps current market prices moving across the page.",
      },
      {
        icon: "bell",
        title: "Toast feedback",
        description:
          "Success and error toasts confirm authentication and form actions.",
      },
      {
        icon: "loader",
        title: "Thoughtful empty states",
        description:
          "Loading indicators and friendly messages cover slow data and empty results.",
      },
    ],
    challenges: [
      {
        title: "Better Auth with MongoDB",
        description:
          "Configuring the Better Auth MongoDB adapter plus Google and GitHub OAuth — including environment-specific callback URLs — was the core backend integration challenge.",
      },
      {
        title: "External price data",
        description:
          "Product and category data comes from the BazarDor API, so the UI handles loading, empty, and error states and formats prices for a Bengali audience.",
      },
      {
        title: "Auth-gated product pages",
        description:
          "Market-wise price details must stay behind login while category and list pages remain open to anonymous visitors.",
      },
    ],
    visual: "market",
  },
  {
    slug: "jubail24-news-bangla",
    name: "Jubail24 News Bangla",
    category: "News Platform",
    tagline: "A Bengali news portal with newspaper-style sections and rich articles.",
    description:
      "A Bengali news site that assembles live, curated news sections into a newspaper-style home page, category feeds, and rich article pages — with Better Auth accounts on MongoDB.",
    longDescription: [
      "Jubail24 News Bangla gives readers a familiar newspaper layout on the web: a lead story block, category-based news grids, a most-read sidebar, and a scrolling headline ticker, all in Bengali. Content is fetched live on the server from a public news API, so pages always reflect current articles.",
      "Article pages render rich editorial content — lead text, author bylines, subheadings, and inline images with captions — with publication dates formatted in Bengali. Readers can sign up and sign in with email/password, Google, or GitHub through Better Auth, with accounts stored in MongoDB, and manage their profile from a dedicated page.",
    ],
    repository: "https://github.com/jubail-dev/jubail24-news-bangla",
    liveUrl: "https://jubail24-news-bangla.vercel.app",
    technologies: [
      { name: "Next.js 16 (App Router)", category: "Frontend" },
      { name: "React 19", category: "Frontend" },
      { name: "TypeScript", category: "Language" },
      { name: "Tailwind CSS 4", category: "Styling" },
      { name: "DaisyUI", category: "UI" },
      { name: "HeroUI", category: "UI" },
      { name: "Better Auth", category: "Authentication" },
      { name: "MongoDB", category: "Database" },
      { name: "News API v2", category: "Data" },
      { name: "react-marquee-text", category: "UI" },
      { name: "Vercel", category: "Deployment" },
    ],
    features: [
      {
        icon: "newspaper",
        title: "Newspaper-style home page",
        description:
          "A lead story section followed by category-based news grids.",
      },
      {
        icon: "star",
        title: "Most-read sidebar",
        description:
          "A trending sidebar sits beside the main news feed on desktop.",
      },
      {
        icon: "grid",
        title: "Category pages",
        description:
          "Dedicated routes browse the full listing for any news category.",
      },
      {
        icon: "book",
        title: "Rich article pages",
        description:
          "Lead text, author bylines, subheadings, and inline images with captions.",
      },
      {
        icon: "clock",
        title: "Bengali date formatting",
        description:
          "Publication dates are rendered in Bengali using the bn-BD locale.",
      },
      {
        icon: "list",
        title: "Scrolling news ticker",
        description:
          "A marquee strip keeps breaking headlines moving across the top of the site.",
      },
      {
        icon: "key",
        title: "Password & social sign-in",
        description:
          "Email/password plus Google and GitHub sign-in through Better Auth.",
      },
      {
        icon: "user",
        title: "Reader profiles",
        description:
          "Signed-in readers get a personal profile page.",
      },
      {
        icon: "loader",
        title: "Resilient states",
        description:
          "A loading screen, article-unavailable states, and a custom not-found page keep the experience graceful.",
      },
      {
        icon: "sparkles",
        title: "Optimized images",
        description:
          "Article media loads through the Next.js image optimizer.",
      },
    ],
    challenges: [
      {
        title: "Rendering rich article bodies",
        description:
          "News articles arrive as structured blocks — text, subheadings, and images — that the detail page renders server-side with fallbacks for missing content.",
      },
      {
        title: "Live, curated content",
        description:
          "The home page merges multiple curated news sections, filters out non-article promos, and degrades gracefully when an article is unavailable.",
      },
      {
        title: "Better Auth in the App Router",
        description:
          "Wiring the Better Auth catch-all API handler with the MongoDB adapter and social providers keeps sessions working across the news routes.",
      },
    ],
    visual: "news",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

function PreviewChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-black/5 bg-white/80 px-3 py-2 backdrop-blur">
      <span className="flex gap-1.5">
        <span className="size-2 rounded-full bg-black/15" />
        <span className="size-2 rounded-full bg-black/15" />
        <span className="size-2 rounded-full bg-black/15" />
      </span>
      <span className="min-w-0 flex-1 truncate rounded-md bg-black/5 px-2.5 py-1 text-[10px] font-medium tracking-wide text-black/50">
        {url}
      </span>
    </div>
  );
}

function TravelPreview() {
  return (
    <div className="relative h-full w-full bg-gradient-to-b from-sky-300 via-sky-100 to-emerald-50">
      {/* Sun */}
      <span className="absolute right-8 top-8 size-10 rounded-full bg-amber-200/90 blur-[1px]" />
      {/* Mountains */}
      <span className="absolute -bottom-10 -left-8 size-36 rotate-45 rounded-3xl bg-emerald-700/70" />
      <span className="absolute -bottom-16 left-16 size-40 rotate-45 rounded-3xl bg-emerald-800/60" />
      {/* Trip cards */}
      <div className="absolute inset-x-4 bottom-4 space-y-2">
        {[0, 1].map((row) => (
          <div
            key={row}
            className="rounded-lg bg-white/85 p-2 shadow-sm ring-1 ring-black/5 backdrop-blur"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="h-2 w-24 rounded-full bg-slate-300/80" />
              <span className="h-4 w-12 rounded-full bg-sky-500/80" />
            </div>
            <div className="mt-1.5 flex gap-2">
              <span className="h-1.5 w-16 rounded-full bg-slate-200" />
              <span className="h-1.5 w-10 rounded-full bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MarketPreview() {
  return (
    <div className="relative h-full w-full bg-amber-50">
      {/* Ticker */}
      <div className="flex items-center gap-3 overflow-hidden bg-[#0b0b0b] px-3 py-1.5">
        <span className="h-2 w-10 shrink-0 rounded-full bg-amber-400/80" />
        <span className="shrink-0 rounded-sm bg-emerald-500/90 px-1.5 py-0.5 text-[8px] font-bold text-white">
          ▲ ৳128
        </span>
        <span className="shrink-0 rounded-sm bg-red-500/90 px-1.5 py-0.5 text-[8px] font-bold text-white">
          ▼ ৳64
        </span>
        <span className="h-1.5 w-14 shrink-0 rounded-full bg-white/20" />
      </div>
      {/* Product rows */}
      <div className="space-y-2 p-3">
        {[0, 1, 2].map((row) => (
          <div
            key={row}
            className="flex items-center justify-between rounded-lg border border-amber-200/70 bg-white px-2.5 py-1.5 shadow-sm"
          >
            <span className="flex items-center gap-2">
              <span className="size-4 rounded-md bg-amber-200/80" />
              <span className="h-1.5 w-20 rounded-full bg-slate-200" />
            </span>
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[9px] font-bold text-amber-800">
              ৳{[118, 74, 96][row]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsPreview() {
  return (
    <div className="relative h-full w-full bg-white">
      {/* Masthead */}
      <div className="border-b-2 border-red-600 bg-slate-900 px-3 py-2">
        <span className="block h-2.5 w-24 rounded-sm bg-white/90" />
      </div>
      {/* Headline + body */}
      <div className="space-y-1.5 p-3">
        <span className="block h-2.5 w-4/5 rounded-full bg-slate-800/90" />
        <span className="block h-1.5 w-3/5 rounded-full bg-slate-300" />
        <div className="grid grid-cols-3 gap-2 pt-1.5">
          {[0, 1, 2].map((cell) => (
            <span key={cell} className="space-y-1">
              <span className="block h-8 rounded-md bg-gradient-to-br from-slate-200 to-slate-300" />
              <span className="block h-1 w-full rounded-full bg-slate-200" />
              <span className="block h-1 w-2/3 rounded-full bg-slate-200" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectPreview({
  visual,
  liveUrl,
}: {
  visual: ProjectVisual;
  liveUrl: string;
}) {
  const url = (() => {
    try {
      return new URL(liveUrl).hostname;
    } catch {
      return liveUrl;
    }
  })();

  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950/60 shadow-inner shadow-black/40">
      <PreviewChrome url={url} />
      <div className="h-[calc(100%-2rem)]">
        {visual === "travel" && <TravelPreview />}
        {visual === "market" && <MarketPreview />}
        {visual === "news" && <NewsPreview />}
      </div>
    </div>
  );
}

function TechBadge({ name }: { name: string }) {
  return (
    <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-2.5 py-1 text-xs font-medium text-blue-200">
      {name}
    </span>
  );
}

function ExternalLinkButton({
  href,
  label,
  ariaLabel,
  icon,
}: {
  href: string;
  label: string;
  ariaLabel: string;
  icon: LucideIcon | typeof FaGithub;
}) {
  const Icon = icon;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-semibold text-slate-300 transition hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
    >
      <Icon aria-hidden="true" className="size-4 shrink-0" />
      {label}
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const visibleTechnologies = project.technologies.slice(0, 4);
  const remainingCount = Math.max(project.technologies.length - 4, 0);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-950/40">
      <div className="p-5 pb-0">
        <div className="transition duration-500 group-hover:scale-[1.02]">
          <ProjectPreview visual={project.visual} liveUrl={project.liveUrl} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
          {project.category}
        </p>

        <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
          {project.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {visibleTechnologies.map((technology) => (
            <TechBadge key={technology.name} name={technology.name} />
          ))}
          {remainingCount > 0 && (
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-400">
              +{remainingCount} more
            </span>
          )}
        </div>

        <div className="mt-6 flex flex-col gap-2.5 pt-1 sm:flex-row sm:items-center">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            View Details
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>

          <ExternalLinkButton
            href={project.repository}
            label="Source"
            ariaLabel={`${project.name} source code on GitHub (opens in a new tab)`}
            icon={FaGithub}
          />
          <ExternalLinkButton
            href={project.liveUrl}
            label="Live"
            ariaLabel={`${project.name} live website (opens in a new tab)`}
            icon={ExternalLink}
          />
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-18 border-t border-white/10 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Featured Projects
          </p>

          <h2
            id="projects-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Apps I&apos;ve designed, built, and shipped.
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Three deployed products — travel planning, live market prices, and a
            Bengali news platform — each pairing a polished interface with real
            authentication and data behind it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
