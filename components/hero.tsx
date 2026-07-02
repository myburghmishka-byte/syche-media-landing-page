import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative min-h-svh w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/cape-town-ocean-hero.png"
          alt="Cinematic aerial view of the Cape Town coastline at golden hour"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-end px-6 pb-16 pt-32 lg:px-10 lg:pb-24">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
          <span className="h-px w-10 bg-primary" />
          Cape Town · Johannesburg
        </p>

        <h1 className="max-w-4xl text-balance font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
          Cinematic stories, <span className="text-metallic italic">shot in light</span> &amp; shadow.
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
          Syche Media is a photography and videography studio capturing scenic ocean views, starlit nights and the
          glowing city lights of South Africa — for individuals, groups and brands who want to be remembered.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Start a Project
          </a>
        </div>

        <div className="mt-16 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <ArrowDown className="size-4 animate-bounce text-primary" />
          Scroll to explore
        </div>
      </div>
    </section>
  )
}
