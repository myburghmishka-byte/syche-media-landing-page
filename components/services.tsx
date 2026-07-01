import { Camera, Clapperboard, Megaphone, Sparkles } from "lucide-react"

const SERVICES = [
  {
    icon: Sparkles,
    title: "Content Creation",
    description:
      "Scroll-stopping photo and video content built for social feeds, campaigns and websites — planned, shot and edited end to end.",
    items: ["Social reels & shorts", "Photo sets", "Editing & color grading"],
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description:
      "Visual storytelling with strategy behind it. We craft content that connects your brand to the right audience.",
    items: ["Content strategy", "Campaign concepts", "Brand storytelling"],
  },
  {
    icon: Clapperboard,
    title: "Advertising",
    description:
      "High-impact commercial films and stills that sell — from concept and direction to the final cut.",
    items: ["Commercial films", "Product shoots", "Ad creative"],
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "Cinematic photography for people, places and products — from ocean landscapes to intimate portraits.",
    items: ["Portraits & lifestyle", "Events", "Landscape & aerial"],
  },
]

export function Services() {
  return (
    <section id="services" className="border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-10 bg-primary" />
            What We Do
          </p>
          <h2 className="text-balance font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            A full studio for every frame of your story.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col gap-5 bg-card p-8 transition-colors hover:bg-secondary lg:p-10"
            >
              <span className="flex size-12 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-5" />
              </span>
              <h3 className="font-serif text-2xl">{service.title}</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
