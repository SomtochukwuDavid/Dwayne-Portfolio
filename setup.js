const fs = require('fs');
const path = require('path');

const files = {
  "package.json": `{
  "name": "dwayne-chisolm-portfolio",
  "type": "module",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "@astrojs/check": "^0.9.4",
    "@fontsource/inter": "^5.0.18",
    "@fontsource/jetbrains-mono": "^5.0.20",
    "@fontsource/space-grotesk": "^5.0.16",
    "astro": "^4.15.0"
  },
  "devDependencies": {
    "@astrojs/tailwind": "^5.1.0",
    "tailwindcss": "^3.4.10",
    "typescript": "^5.5.4"
  }
}`,
  "astro.config.mjs": `import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://dwaynechisolm.com",
  integrations: [tailwind({ applyBaseStyles: false })],
  output: "static",
  build: { inlineStylesheets: "auto" },
});`,
  "tailwind.config.js": `/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0E14",
        ink: "#F2F4F8",
        accent: "#3B82F6",
        "accent-hover": "#2563EB",
        rule: "#1F2937",
        "ink-soft": "#94A3B8",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        base: ["16px", { lineHeight: "1.6" }],
      },
      maxWidth: {
        content: "1120px",
        prose: "720px",
      },
      borderRadius: { sm: "4px", DEFAULT: "6px" },
    },
  },
  plugins: [],
};`,
  "tsconfig.json": `{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}`,
  "netlify.toml": `[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"`,
  "public/favicon.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#3B82F6"/>
  <text x="32" y="44" text-anchor="middle" font-family="system-ui, sans-serif" font-size="28" font-weight="bold" fill="#0B0E14">DC</text>
</svg>`,
  "public/headshot.txt": "PLACEHOLDER: Replace this file with your headshot named 'headshot.jpg'.",
  "public/resume.txt": "PLACEHOLDER: Replace this file with your resume named 'resume.pdf'.",
  "src/data/site.ts": `export const site = {
  name: "Dwayne Philip Chisolm",
  title: "Mathematics & Computer Science Expert",
  location: "Newark, New Jersey, USA",
  workMode: "Remote · All U.S. Time Zones",
  email: "dwayne.chisolm.math@gmail.com",
  linkedin: null,
  github: null,
  headline: "Mathematical rigor applied to production-grade code.",
  oneLiner: "I build Python and SQL systems that clean, model, and verify large numerical datasets — from statistical pipelines to automated answer-checking tools for language models.",
  metrics: [
    { value: "15+", label: "Years combined experience" },
    { value: "98%", label: "Quality audit pass rate" },
    { value: "12k+", label: "RLHF preference rankings" },
    { value: "38%", label: "Reduction in review time" },
  ],
  skills: [
    { category: "Mathematics", items: ["Linear Algebra", "Real & Complex Analysis", "Probability & Statistics", "Numerical Methods", "Optimization", "Graph Theory"] },
    { category: "Programming", items: ["Python (NumPy, SciPy, SymPy)", "SQL", "Java", "C++", "R (basic)", "Git"] },
    { category: "AI & Data", items: ["LLM Evaluation", "RLHF", "Prompt Engineering", "Hallucination Detection", "ETL Pipelines", "Data Validation"] }
  ],
  projects: [
    {
      slug: "llm-benchmark",
      title: "LLM Mathematics Benchmark & Proof Validator",
      category: "AI Evaluation · Python",
      problem: "LLMs frequently hallucinate mathematical proofs, incorrect Big-O claims, and unsafe code, requiring a rigorous automated evaluation harness.",
      result: "Built a Python evaluation harness testing GPT-4, Claude 3, and Gemini on 700 math questions; improved accuracy by 21% over zero-shot baselines.",
      stack: ["Python", "SymPy", "NumPy", "OpenAI API", "JSONL"],
    },
    {
      slug: "complexity-analyzer",
      title: "Algorithm Complexity Analyzer",
      category: "Software Engineering · Algorithms",
      problem: "Reviewers frequently misclassified the Big-O time complexity of production code, leading to performance regressions.",
      result: "Wrote a Python tool that instruments functions, fits growth curves, and classifies complexity — catching 40+ incorrect claims.",
      stack: ["Python", "pandas", "SciPy", "Matplotlib", "RegEx"],
    },
    {
      slug: "pricing-pipeline",
      title: "Pricing Data Cleaning & Anomaly Pipeline",
      category: "Data Engineering · ETL",
      problem: "Analysts spent excessive time manually cleaning raw CSV/JSON pricing logs and hunting for outliers before modelling.",
      result: "Built a pipeline to detect outliers (z-score/IQR) and impute gaps, reducing analyst review time by 44% on a 1.5M-row dataset.",
      stack: ["Python", "pandas", "NumPy", "SQLite", "Excel"],
    }
  ],
  experience: [
    { role: "AI Data Annotator & LLM Evaluator", org: "Surge AI", dates: "2023 – Present" },
    { role: "Software Engineer & Quantitative Data Analyst", org: "Garden State Analytics", dates: "2016 – 2023" },
    { role: "Mathematics & Computer Science Instructor", org: "Raritan Valley Community College", dates: "2008 – 2016" },
    { role: "Research Assistant — Applied Mathematics", org: "Rutgers Applied Mathematics Group", dates: "2006 – 2008" },
  ],
  education: [
    { degree: "M.S. in Applied Mathematics", institution: "Rutgers University", dates: "2006 – 2008", detail: "GPA 3.7/4.0. Thesis: Numerical Optimization of Coupled Nonlinear Systems." },
    { degree: "B.S. in Computer Science", institution: "Montclair State University", dates: "2001 – 2005", detail: "Minor in Mathematics. GPA 3.5/4.0." },
  ],
};`,
  "src/styles/global.css": `@import "@fontsource/space-grotesk/500.css";
@import "@fontsource/space-grotesk/700.css";
@import "@fontsource/inter/400.css";
@import "@fontsource/inter/500.css";
@import "@fontsource/jetbrains-mono/400.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { background-color: #0B0E14; color: #F2F4F8; scroll-behavior: smooth; }
  body { font-family: "Inter", sans-serif; font-size: 16px; line-height: 1.6; }
  h1, h2, h3, h4 { font-family: "Space Grotesk", sans-serif; letter-spacing: -0.02em; }
  h1 { font-size: clamp(2.5rem, 6vw, 4.5rem); line-height: 1.1; font-weight: 700; }
  h2 { font-size: clamp(1.75rem, 4vw, 2.5rem); line-height: 1.2; font-weight: 700; }
  h3 { font-size: 1.25rem; line-height: 1.3; font-weight: 700; }
  a { color: inherit; text-decoration: none; }
  :focus-visible { outline: 2px solid #3B82F6; outline-offset: 2px; }
}

@layer components {
  .container-content { max-width: 1120px; margin: 0 auto; padding-left: 24px; padding-right: 24px; }
  .container-prose { max-width: 720px; margin: 0 auto; padding-left: 24px; padding-right: 24px; }
  .section { padding-top: 96px; padding-bottom: 96px; }
  @media (max-width: 768px) { .section { padding-top: 56px; padding-bottom: 56px; } }
  .eyebrow { font-family: "JetBrains Mono", monospace; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: #3B82F6; }
  .btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.75rem 1.5rem; border-radius: 6px; font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 1rem; transition: all 150ms ease; }
  .btn-primary { background: #3B82F6; color: #FFFFFF; }
  .btn-primary:hover { background: #2563EB; transform: translateY(-1px); }
  .btn-secondary { background: transparent; color: #F2F4F8; border: 1px solid #1F2937; }
  .btn-secondary:hover { border-color: #3B82F6; color: #3B82F6; }
  .card { border: 1px solid #1F2937; border-radius: 6px; background: #0B0E14; transition: border-color 150ms ease; }
  .card:hover { border-color: #3B82F6; }
  .tag { display: inline-block; padding: 0.25rem 0.5rem; border: 1px solid #1F2937; border-radius: 4px; font-family: "JetBrains Mono", monospace; font-size: 0.75rem; color: #94A3B8; }
  .metric-value { font-family: "Space Grotesk", sans-serif; font-size: 2.5rem; font-weight: 700; color: #3B82F6; }
}`,
  "src/layouts/BaseLayout.astro": `---
import "@/styles/global.css";
import Header from "@/components/Header.astro";
import Footer from "@/components/Footer.astro";
import { site } from "@/data/site";
export interface Props { title: string; description: string; }
const { title, description } = Astro.props;
const siteUrl = Astro.site?.toString().replace(/\\/$/, "") ?? "https://dwaynechisolm.com";
const canonicalUrl = new URL(Astro.url.pathname, siteUrl).toString();
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="theme-color" content="#0B0E14" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonicalUrl} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:image" content={\`\${siteUrl}/og-image.png\`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  </head>
  <body class="bg-bg text-ink antialiased font-body">
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded">Skip to content</a>
    <Header />
    <main id="main" class="min-h-[60vh]"><slot /></main>
    <Footer />
  </body>
</html>`,
  "src/components/Header.astro": `---
const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
const current = Astro.url.pathname;
const isActive = (href: string) => href === "/" ? current === "/" : current.startsWith(href);
---
<header class="border-b border-rule">
  <div class="container-content flex items-center justify-between h-16">
    <a href="/" class="flex items-center gap-2 group">
      <span class="font-sans text-lg font-bold tracking-tight text-white">DC</span>
      <span class="hidden sm:block font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft group-hover:text-accent transition-colors">Dwayne Chisolm</span>
    </a>
    <nav class="hidden md:flex items-center gap-8" aria-label="Primary">
      {nav.map(({ href, label }) => (
        <a href={href} class:list={["text-sm font-medium transition-colors", isActive(href) ? "text-accent" : "text-ink-soft hover:text-white"]}>
          {label}
        </a>
      ))}
    </nav>
  </div>
</header>`,
  "src/components/Footer.astro": `---
import { site } from "@/data/site";
const year = new Date().getFullYear();
---
<footer class="border-t border-rule mt-24">
  <div class="container-content py-12 grid gap-10 md:grid-cols-3">
    <div>
      <p class="font-sans text-xl font-bold tracking-tight">{site.name}</p>
      <p class="text-sm text-ink-soft mt-1">{site.title}</p>
    </div>
    <div class="md:col-span-2 grid grid-cols-2 gap-8">
      <div>
        <p class="eyebrow mb-3">Contact</p>
        <a class="block text-sm hover:text-accent transition-colors" href={\`mailto:\${site.email}\`}>{site.email}</a>
        <p class="text-sm text-ink-soft mt-1">{site.workMode}</p>
      </div>
      <div>
        <p class="eyebrow mb-3">Location</p>
        <p class="text-sm text-ink-soft">{site.location}</p>
      </div>
    </div>
  </div>
  <div class="border-t border-rule">
    <div class="container-content py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <p class="font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">© {year} {site.name} · Built with Astro</p>
    </div>
  </div>
</footer>`,
  "src/components/CaseCard.astro": `---
export interface Props {
  slug: string;
  title: string;
  category: string;
  problem: string;
  result: string;
  stack: string[];
}
const { slug, title, category, problem, result, stack } = Astro.props;
---
<a href={\`/work/\${slug}\`} class="card block p-6 group">
  <p class="eyebrow">{category}</p>
  <h3 class="mt-3 font-sans font-bold text-2xl tracking-tight group-hover:text-accent transition-colors">{title}</h3>
  <div class="mt-4 space-y-2">
    <p class="text-sm text-ink-soft"><span class="font-mono text-xs uppercase text-accent mr-2">Problem</span>{problem}</p>
    <p class="text-sm text-white"><span class="font-mono text-xs uppercase text-accent mr-2">Result</span>{result}</p>
  </div>
  <div class="mt-5 flex flex-wrap gap-2">{stack.map((t) => <span class="tag">{t}</span>)}</div>
</a>`,
  "src/pages/index.astro": `---
import BaseLayout from "@/layouts/BaseLayout.astro";
import CaseCard from "@/components/CaseCard.astro";
import { site } from "@/data/site";
---
<BaseLayout title={\`\${site.name} — \${site.title}\`} description="Mathematical and computer scientist building Python and SQL systems for data engineering and AI evaluation.">
  <section class="section">
    <div class="container-content grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-center">
      <div>
        <p class="eyebrow">{site.location} · {site.workMode}</p>
        <h1 class="mt-5">{site.name}</h1>
        <p class="font-sans text-2xl text-ink-soft mt-3 font-medium">{site.title}</p>
        <p class="mt-6 max-w-2xl text-lg text-ink-soft leading-relaxed">{site.oneLiner}</p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="/work" class="btn btn-primary">View Work →</a>
          <a href={\`mailto:\${site.email}\`} class="btn btn-secondary">Contact Me</a>
        </div>
      </div>
      <div class="relative">
        <div class="aspect-square max-w-sm w-full mx-auto lg:mx-0 lg:ml-auto rounded-md border border-rule overflow-hidden bg-[#0F141E]">
          <img src="/headshot.jpg" alt="Portrait of Dwayne Philip Chisolm" width="600" height="600" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <div class="hidden absolute inset-0 items-center justify-center bg-[#0B0E14] text-accent" aria-hidden="true"><span class="font-sans font-bold text-[7rem] leading-none tracking-tighter">DC</span></div>
        </div>
      </div>
    </div>
  </section>
  <section class="border-y border-rule bg-[#0F141E]">
    <div class="container-content py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        {site.metrics.map((m) => (
          <div>
            <p class="metric-value">{m.value}</p>
            <p class="mt-2 text-sm text-ink-soft font-mono">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container-content">
      <div class="flex items-end justify-between flex-wrap gap-4 mb-10">
        <div>
          <p class="eyebrow">Selected Work</p>
          <h2 class="mt-2">Recent Projects</h2>
        </div>
        <a href="/work" class="font-mono text-sm text-accent hover:underline">View all →</a>
      </div>
      <div class="grid gap-6">
        {site.projects.map((p) => <CaseCard slug={p.slug} title={p.title} category={p.category} problem={p.problem} result={p.result} stack={p.stack} />)}
      </div>
    </div>
  </section>
  <section class="section border-t border-rule">
    <div class="container-content">
      <p class="eyebrow">Technical Toolkit</p>
      <h2 class="mt-2 mb-10">Areas of Expertise</h2>
      <div class="grid gap-8 md:grid-cols-3">
        {site.skills.map((g) => (
          <div>
            <h3 class="font-sans font-bold text-lg text-accent mb-3">{g.category}</h3>
            <ul class="space-y-2 text-sm text-ink-soft">
              {g.items.map((item) => <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-accent rounded-full"></span>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
</BaseLayout>`,
  "src/pages/work/index.astro": `---
import BaseLayout from "@/layouts/BaseLayout.astro";
import CaseCard from "@/components/CaseCard.astro";
import { site } from "@/data/site";
---
<BaseLayout title={\`Selected Work — \${site.name}\`} description="Case studies in LLM evaluation, algorithmic complexity analysis, and data engineering pipelines.">
  <section class="section">
    <div class="container-content">
      <p class="eyebrow">Work</p>
      <h1 class="mt-3">Selected Work</h1>
      <p class="mt-5 max-w-2xl text-ink-soft leading-relaxed">
        A selection of technical projects demonstrating rigorous quantitative analysis, scalable data engineering, and AI evaluation.
      </p>
      <div class="mt-12 grid gap-6">
        {site.projects.map((p) => <CaseCard slug={p.slug} title={p.title} category={p.category} problem={p.problem} result={p.result} stack={p.stack} />)}
      </div>
    </div>
  </section>
</BaseLayout>`,
  "src/pages/work/llm-benchmark.astro": `---
import BaseLayout from "@/layouts/BaseLayout.astro";
import { site } from "@/data/site";
const p = site.projects[0];
---
<BaseLayout title={\`\${p.title} — Case Study\`} description={p.result}>
  <article class="section">
    <div class="container-content">
      <p class="eyebrow">{p.category}</p>
      <h1 class="mt-3 max-w-3xl">{p.title}</h1>
      <p class="mt-6 max-w-2xl text-xl text-ink-soft">{p.problem}</p>
    </div>
  </article>
  <article class="container-prose pb-16 space-y-8">
    <div>
      <h2 class="font-sans text-2xl font-bold mb-4">The Approach</h2>
      <ul class="space-y-3 text-ink-soft">
        <li class="flex gap-3"><span class="text-accent">→</span> Built a Python evaluation harness testing GPT-4, Claude 3, and Gemini on 700 mathematics and algorithms questions.</li>
        <li class="flex gap-3"><span class="text-accent">→</span> Implemented automated proof-structure checks and SymPy-based numeric verification.</li>
        <li class="flex gap-3"><span class="text-accent">→</span> Measured accuracy, hallucination rate, and notation consistency across all models.</li>
      </ul>
    </div>
    <div>
      <h2 class="font-sans text-2xl font-bold mb-4">The Result</h2>
      <p class="text-lg"><strong class="text-accent">21% improvement</strong> in accuracy over zero-shot baselines, with a measurable reduction in fabricated proofs.</p>
    </div>
    <div class="flex flex-wrap gap-2">{p.stack.map((t) => <span class="tag">{t}</span>)}</div>
  </article>
</BaseLayout>`,
  "src/pages/work/complexity-analyzer.astro": `---
import BaseLayout from "@/layouts/BaseLayout.astro";
import { site } from "@/data/site";
const p = site.projects[1];
---
<BaseLayout title={\`\${p.title} — Case Study\`} description={p.result}>
  <article class="section">
    <div class="container-content">
      <p class="eyebrow">{p.category}</p>
      <h1 class="mt-3 max-w-3xl">{p.title}</h1>
      <p class="mt-6 max-w-2xl text-xl text-ink-soft">{p.problem}</p>
    </div>
  </article>
  <article class="container-prose pb-16 space-y-8">
    <div>
      <h2 class="font-sans text-2xl font-bold mb-4">The Approach</h2>
      <ul class="space-y-3 text-ink-soft">
        <li class="flex gap-3"><span class="text-accent">→</span> Wrote a Python tool that instruments functions and measures runtime across input sizes.</li>
        <li class="flex gap-3"><span class="text-accent">→</span> Fits growth curves and classifies observed complexity against Big-O candidates.</li>
        <li class="flex gap-3"><span class="text-accent">→</span> Caught 40+ incorrect complexity claims in reviewed documentation.</li>
      </ul>
    </div>
    <div>
      <h2 class="font-sans text-2xl font-bold mb-4">The Result</h2>
      <p class="text-lg">Reused by four colleagues for code review, preventing multiple performance regressions.</p>
    </div>
    <div class="flex flex-wrap gap-2">{p.stack.map((t) => <span class="tag">{t}</span>)}</div>
  </article>
</BaseLayout>`,
  "src/pages/work/pricing-pipeline.astro": `---
import BaseLayout from "@/layouts/BaseLayout.astro";
import { site } from "@/data/site";
const p = site.projects[2];
---
<BaseLayout title={\`\${p.title} — Case Study\`} description={p.result}>
  <article class="section">
    <div class="container-content">
      <p class="eyebrow">{p.category}</p>
      <h1 class="mt-3 max-w-3xl">{p.title}</h1>
      <p class="mt-6 max-w-2xl text-xl text-ink-soft">{p.problem}</p>
    </div>
  </article>
  <article class="container-prose pb-16 space-y-8">
    <div>
      <h2 class="font-sans text-2xl font-bold mb-4">The Approach</h2>
      <ul class="space-y-3 text-ink-soft">
        <li class="flex gap-3"><span class="text-accent">→</span> Built a pipeline to ingest raw CSV and JSON pricing logs.</li>
        <li class="flex gap-3"><span class="text-accent">→</span> Detected outliers using z-score and IQR methods, and imputed gaps.</li>
        <li class="flex gap-3"><span class="text-accent">→</span> Documented every transformation rule for auditability.</li>
      </ul>
    </div>
    <div>
      <h2 class="font-sans text-2xl font-bold mb-4">The Result</h2>
      <p class="text-lg"><strong class="text-accent">44% reduction</strong> in analyst review time on a 1.5M-row test dataset.</p>
    </div>
    <div class="flex flex-wrap gap-2">{p.stack.map((t) => <span class="tag">{t}</span>)}</div>
  </article>
</BaseLayout>`,
  "src/pages/about.astro": `---
import BaseLayout from "@/layouts/BaseLayout.astro";
import { site } from "@/data/site";
---
<BaseLayout title={\`About — \${site.name}\`} description="Mathematical and computer scientist with 15+ years of experience across quantitative software development and AI/LLM evaluation.">
  <section class="section">
    <div class="container-prose">
      <p class="eyebrow">About</p>
      <h1 class="mt-3">About Me</h1>
      <p class="mt-8 text-xl text-ink-soft leading-relaxed">
        I sit at the intersection of rigorous mathematical reasoning and production-grade code. Over the last 15+ years, I've built Python and SQL systems that clean, model, and verify large numerical datasets — from statistical pipelines to automated answer-checking tools for language models.
      </p>
      <h2 class="font-sans text-2xl font-bold mt-12 mb-6">Experience</h2>
      <div class="space-y-8">
        {site.experience.map((e) => (
          <div class="border-l-2 border-accent pl-4">
            <p class="font-mono text-xs text-accent">{e.dates}</p>
            <h3 class="font-sans text-lg font-bold mt-1">{e.role}</h3>
            <p class="text-ink-soft">{e.org}</p>
          </div>
        ))}
      </div>
      <h2 class="font-sans text-2xl font-bold mt-12 mb-6">Education</h2>
      <div class="space-y-6">
        {site.education.map((e) => (
          <div>
            <h3 class="font-sans text-lg font-bold">{e.degree}</h3>
            <p class="text-ink-soft text-sm">{e.institution} · {e.dates}</p>
            <p class="text-sm mt-1">{e.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
</BaseLayout>`,
  "src/pages/contact.astro": `---
import BaseLayout from "@/layouts/BaseLayout.astro";
import { site } from "@/data/site";
---
<BaseLayout title={\`Contact — \${site.name}\`} description="Get in touch for AI/LLM evaluation, data engineering, or quantitative analysis work.">
  <section class="section">
    <div class="container-content max-w-xl">
      <p class="eyebrow">Contact</p>
      <h1 class="mt-3">Get in Touch</h1>
      <p class="mt-5 text-ink-soft">
        Best way to reach me is email. I read everything and reply promptly.
      </p>
      <div class="mt-10 p-6 card">
        <p class="eyebrow mb-2">Email</p>
        <a href={\`mailto:\${site.email}\`} class="font-sans text-2xl font-bold text-accent hover:underline break-all">
          {site.email}
        </a>
      </div>
      <div class="mt-8">
        <p class="eyebrow mb-2">Location</p>
        <p class="text-ink-soft">{site.location}</p>
        <p class="text-sm text-ink-soft mt-1">{site.workMode}</p>
      </div>
    </div>
  </section>
</BaseLayout>`
};

console.log("Building folder structure...");

for (const [filePath, content] of Object.entries(files)) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content.trim());
  console.log(`✓ Created ${filePath}`);
}

console.log("\n🎉 Success! All files have been generated.");
console.log("Next steps:");
console.log("1. Save your portrait as 'headshot.jpg' and place it in the 'public' folder.");
console.log("2. Run: npm install");
console.log("3. Run: npm run dev");