"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"

const technologies = [
  { name: "Python + scikit-learn", description: "Classic ML stack for robust prediction pipelines" },
  { name: "PyTorch / TensorFlow", description: "Deep learning for images, text, and time-series" },
  { name: "XGBoost / LightGBM", description: "High-performing gradient boosting models" },
  { name: "Airflow", description: "Scheduled and reliable retraining pipelines" },
  { name: "Neon / Supabase", description: "Feature stores and model metadata" },
  { name: "Docker", description: "Reproducible deployments and CI/CD" },
]

export default function MLPredictionPage() {
  const handleConsultation = () => {
    window.open("https://wa.me/917080404594?text=Hi, I would like to discuss ML prediction services", "_blank")
  }

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            ML Prediction Models
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            Accurate, Scalable Predictions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From demand forecasts to fraud detection, we train and deploy production-grade models.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary">120+ Models in Production</Badge>
            <Badge variant="secondary">95%+ SLA Uptime</Badge>
            <Badge variant="secondary">Retraining Pipelines</Badge>
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
                    <TrendingUp className="h-5 w-5 text-primary mr-2" />
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
            Our Impact in ML
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">120+</div>
                <p className="text-sm text-muted-foreground">Models Deployed</p>
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
                <div className="text-3xl font-bold text-primary mb-1">20+</div>
                <p className="text-sm text-muted-foreground">Industries</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">30%</div>
                <p className="text-sm text-muted-foreground">Avg. Accuracy Gain</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-center mb-6 font-[family-name:var(--font-space-grotesk)]">
            Example Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <CardTitle>Demand Forecasting</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Retail weekly forecasts with XGBoost</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CardTitle>Fraud Detection</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Graph features + GBDT, 40% fraud reduction</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CardTitle>Predictive Maintenance</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Time-series DL, IoT telemetry</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
