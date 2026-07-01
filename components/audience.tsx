import { Briefcase, User, Users } from "lucide-react"

const AUDIENCES = [
  {
    icon: User,
    label: "Individuals",
    title: "For individuals",
    description:
      "Personal portraits, milestone moments and creative passion projects — captured with a cinematic, editorial touch.",
  },
  {
    icon: Users,
    label: "Groups",
    title: "For groups",
    description:
      "Weddings, events, families and teams. We document the energy of the moment and the people who make it.",
  },
  {
    icon: Briefcase,
    label: "Businesses",
    title: "For businesses",
    description:
      "Brand films, product campaigns and ongoing content that positions your business as premium and unforgettable.",
  },
]

export function Audience() {
  return (
    <section id="audience" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/starry-night.png"
          alt=""
          aria-hidden="true"
          className="size-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Who We Serve
          </p>
          <h2 className="text-balance font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            Made for individuals, groups and businesses alike.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {AUDIENCES.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                <item.icon className="size-5" />
              </span>
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
