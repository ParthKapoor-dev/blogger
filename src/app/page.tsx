import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"

const workItems: Item[] = [
  {
    title: "zenith ai",
    role: "founder",
    period: "dec 2024 - mar 2025",
    description:
      "built an ai hiring assistant using langchain, fastapi, and next.js to match top candidates",
    href: "https://zenith.parthkapoor.me",
  },
  {
    title: "codemate.ai",
    role: "software developer intern",
    period: "jun 2024 - jul 2024",
    description:
      "built an ai-powered terminal and vscode extension for code suggestions and productivity",
    href: "https://codemate.ai",
  },
  {
    title: "talecto",
    role: "backend developer intern",
    period: "apr 2024 - jun 2024",
    description:
      "developed 15+ rest apis with node.js, added redis caching and jwt auth for scale",
    href: "https://talecto.com",
  },
  {
    title: "plex club",
    role: "full stack developer",
    period: "jun 2024 - sep 2024",
    description:
      "built a placement portal for 10k+ users using mern stack, firebase, and websockets",
    href: "https://www.linkedin.com/company/plex-thapar",
  },
]

const projectItems = [
  {
    title: "devex",
    role: "creator",
    description:
      "cloud-based repl platform using go, kubernetes, and websockets with s3 sync and tls",
    href: "https://devx.parthkapoor.me",
  },
  {
    title: "better-axios",
    role: "creator",
    description:
      "type-safe axios wrapper with token refresh and jest test suite for 95%+ coverage",
    href: "https://github.com/parthkapoor-dev/better-axios",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList title="work" items={workItems} />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <BlogSection />
      <LinksSection />
    </>
  )
}
