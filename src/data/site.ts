export const site = {
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
};