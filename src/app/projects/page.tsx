import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "devex",
    description: "cloud-based repl platform to run code in isolated containers",
    role: "creator",
    period: "jun 2025",
    achievements: [
      "deployed go-based repl system on kubernetes with s3 sync and cert-manager",
      "built low-latency websocket tunnel for real-time interaction",
      "achieved 30% increase in user engagement during peak hours",
    ],
    technologies: [
      "go",
      "kubernetes",
      "docker",
      "s3",
      "websockets",
      "cert-manager",
    ],
    href: "https://github.com/parthkapoor-dev/devex",
  },
  {
    title: "better-axios",
    description: "type-safe axios wrapper with improved developer experience",
    role: "creator",
    period: "may 2025",
    achievements: [
      "added token refresh and global error handling to standard axios",
      "published with jest test suite achieving 95%+ test coverage",
      "adopted across 5+ internal projects to reduce boilerplate",
    ],
    technologies: ["typescript", "axios", "jest"],
    href: "https://github.com/parthkapoor-dev/better-axios",
  },
  {
    title: "zenith ai",
    description:
      "ai-powered recruitment assistant to automate resume screening",
    role: "founder",
    period: "dec 2024 - mar 2025",
    achievements: [
      "built ai agent with langchain and fastapi to match candidates with 78%+ accuracy",
      "integrated ollama mistral llm and cosine scoring for ranking resumes",
      "boosted recruiter efficiency by 70% with rag-enhanced retrieval system",
    ],
    technologies: [
      "langchain",
      "fastapi",
      "next.js",
      "mistral",
      "ollama",
      "upstash",
    ],
    href: "https://zenith.parthkapoor.me",
  },
]
export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
        here are some of the projects i&apos;ve worked on. i love building tools
        that make developers&apos; lives easier and exploring new technologies
        along the way.
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Some of the projects I've worked on.",
  openGraph: {
    images: [
      {
        url: "https://www.nexxel.dev/og/home?title=projects",
      },
    ],
  },
}
