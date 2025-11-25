"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Gamepad2, MonitorPlay } from "lucide-react"
import Link from "next/link"

export default function GameDevelopmentPage() {
  const impact = [
    { label: "Games Shipped", value: "15+" },
    { label: "Active Players", value: "500K+" },
    { label: "Platforms", value: "Mobile/Web/Desktop" },
    { label: "Partner Studios", value: "8+" },
  ]

  const technologies = [
    "Unity (URP/HDRP)",
    "Unreal Engine",
    "C# / C++",
    "WebGL",
    "Three.js",
    "React + WASM",
    "Firebase / PlayFab / GameSparks",
    "Photon / Mirror (Multiplayer)",
    "Asset Bundles / Addressables",
  ]

  const projects = [
    {
      title: "Runner Rush 3D",
      type: "Mobile • 3D • Unity",
      desc: "Endless runner with procedural levels, IAP, ads mediation, and live events.",
    },
    {
      title: "WordChain Duel",
      type: "Mobile/Web • 2D • Multiplayer",
      desc: "Real-time PvP word game with matchmaking and chat.",
    },
    {
      title: "City Builder Tycoon",
      type: "Desktop • 3D • Unreal",
      desc: "Tycoon sim with economy system, save/load, and mod support.",
    },
  ]

  const partners = ["PlayFab", "Photon", "Chartboost", "AdMob", "ironSource", "GameAnalytics"]

  const reviews = [
    {
      author: "A. Sharma",
      role: "Product Lead, FunLabs",
      text: "Top-notch execution with weekly builds and clear communication. Our D30 retention exceeded targets.",
    },
    {
      author: "L. Gomez",
      role: "Founder, IndieSpark",
      text: "They took our prototype to a polished launch across Android and WebGL in record time.",
    },
  ]

  return (
    <main className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <header className="text-center">
          <Badge variant="outline" className="text-primary border-primary mb-4">
            Service
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-foreground">
            Game Development (2D/3D) for Mobile, Web, and Desktop
          </h1>
          <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">
            From prototype to live ops—build stunning 2D/3D games with robust tech foundations, scalable backends, and
            engaging player experiences.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button asChild>
              <a
                href="https://wa.me/917080404594?text=I%27m%20interested%20in%20Game%20Development"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Consultation on WhatsApp
              </a>
            </Button>
            <Link href="/#services" className="text-primary underline underline-offset-4">
              Back to Services
            </Link>
          </div>
        </header>

        {/* Our Impact */}
        <section>
          <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] mb-6">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {impact.map((m, i) => (
              <Card key={i} className="border-border bg-card">
                <CardContent className="p-5 text-center">
                  <div className="text-2xl font-bold">{m.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{m.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technologies We Use */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Gamepad2 className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)]">Technologies We Use</h2>
          </div>
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {technologies.map((t, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-2" /> {t}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Example Projects */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <MonitorPlay className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)]">Example Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <Card key={i} className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="font-[family-name:var(--font-space-grotesk)]">{p.title}</CardTitle>
                  <CardDescription>{p.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section>
          <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] mb-4">
            Partners & Integrations
          </h2>
          <div className="flex flex-wrap gap-2">
            {partners.map((p, i) => (
              <Badge key={i} variant="secondary">
                {p}
              </Badge>
            ))}
          </div>
        </section>

        {/* Client Reviews (kept inside service page as requested) */}
        <section>
          <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] mb-4">Client Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <Card key={i} className="border-border bg-card">
                <CardContent className="p-6">
                  <p className="italic text-foreground">“{r.text}”</p>
                  <div className="mt-3 text-sm text-muted-foreground">
                    — {r.author}, {r.role}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Button asChild className="px-6">
            <a
              href="https://wa.me/917080404594?text=I%27d%20like%20to%20discuss%20a%20Game%20Development%20project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Game Project
            </a>
          </Button>
        </section>
      </div>
    </main>
  )
}
