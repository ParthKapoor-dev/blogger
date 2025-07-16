import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"
import { SiArchlinux } from "react-icons/si"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="Parth Kapoor" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Punjab, india
        </div>
        <div className="flex items-center gap-2">
          <SiArchlinux className="w-4 h-4" />i use arch btw
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        i&apos;m a final year cs undergrad at thapar university. i love genai,
        devops, and building infra from scratch. when i'm not in my terminal,
        you'll find me watching got, gaming, or geeking out over mechanical
        keyboards.
      </p>
    </header>
  )
}
