import { ETHER_COLORS } from "@/data/colors"
import { ChevronDown } from "lucide-react"
import { lazy, Suspense } from "react"

const GradientText = lazy(() => import("@/components/GradientText"))

function GreetingText() {
  return <p className="font-bold">Hi! I'm Haider!</p>
}

export function GreetingBanner() {
  return (
    <section
      id="greeting-banner"
      className="flex w-full max-w-180 flex-col items-center justify-center px-4 py-40 text-center"
    >
      <h1 className="m-0 text-[clamp(2rem,6vw,3.5rem)] font-bold tracking-tight drop-shadow-[0_2px_16px_rgba(167,139,250,0.3)]">
        <Suspense fallback={<GreetingText />}>
          <GradientText
            colors={ETHER_COLORS}
            animationSpeed={3.5}
            showBorder={false}
          >
            <GreetingText />
          </GradientText>
        </Suspense>
        <span
          className="inline-block origin-[70%_70%] animate-wave"
          role="img"
          aria-label="waving hand"
        >
          👋
        </span>
      </h1>

      <div className="mt-12 flex flex-col items-center gap-1 text-white/40">
        <div className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-lg">
          <ChevronDown size={20} aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
