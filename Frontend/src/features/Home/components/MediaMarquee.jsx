"use client"

const items = [
  {
    title: "AI Assistants",
    caption: "Custom LLM apps",
    src: "/ai-assistant-dashboard-ui.jpg",
  },
  {
    title: "ML Models",
    caption: "Predictions at scale",
    src: "/machine-learning-model-training-ui.jpg",
  },
  {
    title: "Web Apps",
    caption: "Next.js + React",
    src: "/modern-web-dashboard.png",
  },
  {
    title: "Data Analytics",
    caption: "Real-time insights",
    src: "/data-analytics-charts-and-graphs.jpg",
  },
  {
    title: "Mobile Apps",
    caption: "iOS & Android",
    src: "/mobile-app-ui-light-theme.jpg",
  },
]

export function MediaMarquee() {
  // Duplicate items to form a seamless loop
  const loop = [...items, ...items]

  return (
    <section aria-label="Showcase" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 md:p-6"
          role="region"
          aria-roledescription="carousel"
          aria-label="AI, ML, Web & Data showcase"
        >
          {/* Motion-safe marquee; pauses on hover; reduced motion disables animation */}
          <div className="flex gap-4 md:gap-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex shrink-0 gap-4 md:gap-6 motion-safe:animate-[marquee_28s_linear_infinite] group-hover:[animation-play-state:paused]">
              {loop.map((item, i) => (
                <figure
                  key={`track-a-${i}`}
                  className="w-[260px] md:w-[320px] flex-none rounded-lg border border-border bg-background"
                >
                  <div className="relative h-[160px] md:h-[200px] overflow-hidden rounded-t-lg">
                    <img
                      src={item.src || "/placeholder.svg"}
                      alt={`${item.title} - ${item.caption}`}
                      className="object-cover absolute inset-0 w-full h-full"
                    />
                  </div>
                  <figcaption className="p-3 md:p-4">
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.caption}</div>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="hidden md:flex shrink-0 gap-6 motion-safe:animate-[marquee_28s_linear_infinite] group-hover:[animation-play-state:paused]">
              {loop.map((item, i) => (
                <figure
                  key={`track-b-${i}`}
                  className="w-[320px] flex-none rounded-lg border border-border bg-background"
                >
                  <div className="relative h-[200px] overflow-hidden rounded-t-lg">
                    <img
                      src={item.src || "/placeholder.svg"}
                      alt={`${item.title} - ${item.caption}`}
                      className="object-cover absolute inset-0 w-full h-full"
                    />
                  </div>
                  <figcaption className="p-4">
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.caption}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div
            className="absolute inset-y-0 left-0 w-12 pointer-events-none bg-gradient-to-r from-card to-transparent"
            aria-hidden="true"
          />
          <div
            className="absolute inset-y-0 right-0 w-12 pointer-events-none bg-gradient-to-l from-card to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
