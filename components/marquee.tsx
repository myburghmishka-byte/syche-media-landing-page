const ITEMS = [
  "Content Creation",
  "Videography",
  "Photography",
  "Marketing",
  "Advertising",
  "Brand Films",
  "Aerial / Drone",
  "Social Content",
]

export function Marquee() {
  return (
    <div className="border-y border-border bg-secondary/40 py-4">
      <div className="group relative flex overflow-hidden">
        <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span key={i} className="flex items-center whitespace-nowrap">
              <span className="px-8 font-serif text-xl italic text-muted-foreground">{item}</span>
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center"
        >
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span key={i} className="flex items-center whitespace-nowrap">
              <span className="px-8 font-serif text-xl italic text-muted-foreground">{item}</span>
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
