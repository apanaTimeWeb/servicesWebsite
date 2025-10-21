import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Star, Users, Trophy } from 'lucide-react'

export function ImpactSection() {
  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: Trophy },
    { number: '200+', label: 'Happy Clients', icon: Users },
    { number: '25+', label: 'Countries Served', icon: MapPin },
    { number: '4.9/5', label: 'Client Rating', icon: Star },
  ]

  const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'Netherlands',
    'Singapore',
    'UAE',
    'India',
    'Japan',
    'Brazil',
  ]

  const certifications = [
    'ISO 9001:2015 Certified',
    'Microsoft Gold Partner',
    'AWS Advanced Consulting Partner',
    'Google Cloud Partner',
    'Certified Agile Organization',
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Impact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our commitment to excellence has earned us the trust of clients across the globe, from startups to Fortune
            500 companies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-8">
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2 font-heading">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 font-heading flex items-center">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                Global Reach
              </h3>
              <p className="text-muted-foreground mb-6">
                We've successfully delivered projects across multiple continents, understanding diverse market needs and
                regulations.
              </p>
              <div className="flex flex-wrap gap-2">
                {countries.map((country, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {country}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 font-heading flex items-center">
                <Trophy className="h-6 w-6 text-primary mr-3" />
                Certifications & Partnerships
              </h3>
              <p className="text-muted-foreground mb-6">
                Our industry certifications and strategic partnerships ensure we deliver solutions using best practices
                and cutting-edge technologies.
              </p>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
