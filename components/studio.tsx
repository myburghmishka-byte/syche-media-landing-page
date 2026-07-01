const STATS = [
  { value: "8+", label: "Years behind the lens" },
  { value: "200+", label: "Projects delivered" },
  { value: "2", label: "Cities — Cape Town & Joburg" },
]

export function Studio() {
  return (
    <section id="studio" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-2xl border border-border">
          <img
            src="/images/videographer.png"
            alt="A Syche Media videographer filming on location at golden hour"
            className="aspect-[4/5] size-full object-cover"
          />
        </div>

        <div>
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-10 bg-primary" />
            The Studio
          </p>
          <h2 className="text-balance font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            We chase light across South Africa &mdash; so your story never fades.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Syche Media is a boutique photography and videography studio moving between the Atlantic coastline of Cape
            Town and the glittering skyline of Johannesburg. We blend documentary honesty with a cinematic eye, treating
            every ocean sunset, star field and city light as a scene worth remembering.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From a single portrait to a full brand campaign, we handle concept, direction, shooting and post — so you
            get content that looks and feels premium at every step.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-4xl text-primary">{stat.value}</dt>
                <dd className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
