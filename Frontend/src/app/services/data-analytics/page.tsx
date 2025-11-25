"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database } from "lucide-react"

const technologies = [
  { name: "DBT + SQL", description: "Reliable transformations and semantic models" },
  { name: "Apache Superset", description: "Self-serve BI dashboards at scale" },
  { name: "Recharts/D3", description: "Custom data visualizations for apps" },
  { name: "Airbyte/Fivetran", description: "Data ingestion pipelines" },
  { name: "DuckDB/Polars", description: "Fast local analytics and prototyping" },
  { name: "BigQuery/Redshift", description: "Warehouse-scale analytics" },
]

export default function DataAnalyticsPage() {
  const handleConsultation = () => {
    window.open("https://wa.me/917080404594?text=Hi, I would like to discuss data analytics services", "_blank")
  }

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Data Analytics
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            Insights that Drive Action
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From data modeling to interactive dashboards—turn raw data into decisions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary">180+ Analytics Projects</Badge>
            <Badge variant="secondary">Real-time Pipelines</Badge>
            <Badge variant="secondary">Executive Dashboards</Badge>
          </div>
          <Button onClick={handleConsultation} size="lg" className="bg-primary hover:bg-primary/90">
            Get Free Consultation
          </Button>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)]">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((t, i) => (
              <Card key={i} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-5 w-5 text-primary mr-2" />
                    {t.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-[family-name:var(--font-space-grotesk)]">
            Our Impact in Analytics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">180+</div>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">35+</div>
                <p className="text-sm text-muted-foreground">Clients Served</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">25+</div>
                <p className="text-sm text-muted-foreground">Countries</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
                <p className="text-sm text-muted-foreground">Pipeline Uptime</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-center mb-6 font-[family-name:var(--font-space-grotesk)]">
            Example Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <CardTitle>Executive KPI Suite</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Company-wide OKRs with drilldowns</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CardTitle>Realtime Ops Dashboard</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Warehouse + logistics tracking</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CardTitle>Marketing Attribution</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Multi-touch model, ROAS uplift</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
