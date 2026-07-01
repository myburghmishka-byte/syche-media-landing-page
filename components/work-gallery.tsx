import { Play } from "lucide-react"

type WorkItem = {
  title: string
  location: string
  tag: string
  image: string
  className: string
}

const WORK: WorkItem[] = [
  {
    title: "Atlantic Seaboard",
    location: "Cape Town",
    tag: "Ocean Views",
    image: "/images/coastal-drone.png",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Under the Milky Way",
    location: "Karoo, South Africa",
    tag: "Starry Nights",
    image: "/images/starry-night.png",
    className: "md:col-span-2",
  },
  {
    title: "Sandton After Dark",
    location: "Johannesburg",
    tag: "City Lights",
    image: "/images/joburg-city-lights.png",
    className: "md:col-span-2",
  },
  {
    title: "Golden Hour Portraits",
    location: "Camps Bay",
    tag: "People",
    image: "/images/portrait-session.png",
    className: "md:col-span-2",
  },
  {
    title: "Rooftop Brand Film",
    location: "Johannesburg",
    tag: "Advertising",
    image: "/images/brand-shoot.png",
    className: "md:col-span-2",
  },
]

export function WorkGallery() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Selected Work
          </p>
          <h2 className="max-w-2xl text-balance font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            Footage &amp; frames from across the coast and the city.
          </h2>
        </div>
        <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
          A glimpse into recent shoots — from crashing Atlantic swells and desert star fields to the neon glow of
          upmarket Johannesburg.
        </p>
      </div>

      <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4 lg:auto-rows-[260px]">
        {WORK.map((item) => (
          <article
            key={item.title}
            className={`group relative overflow-hidden rounded-xl border border-border ${item.className}`}
          >
            <img
              src={item.image || "/placeholder.svg"}
              alt={`${item.title} — ${item.tag} in ${item.location}`}
              className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />

            <div className="absolute left-4 top-4">
              <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs uppercase tracking-wider text-foreground backdrop-blur-sm">
                {item.tag}
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
              <div>
                <h3 className="font-serif text-2xl leading-tight">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.location}</p>
              </div>
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Play className="size-4 fill-current" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
