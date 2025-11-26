"use client"

import React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Hi, I'm ${formData.name} from ${formData.company || "my company"}. I'm interested in ${formData.service || "your services"}. ${formData.message || "Please contact me to discuss further."} You can reach me at ${formData.email}.`
    const whatsappUrl = `https://wa.me/917080404594?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/917080404594?text=Hi, I would like to discuss your services", "_blank")
  }

  return (
    <section id="contact" className="pt-24 py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Get in touch for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-[family-name:var(--font-space-grotesk)]">
                  Get Free Consultation
                </CardTitle>
                <CardDescription>Tell us about your project and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Service Interested In</Label>
                      <Input
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        placeholder="e.g., Mobile App Development"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send via WhatsApp
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MessageCircle className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">WhatsApp</h4>
                    <p className="text-muted-foreground">+91 7080404594</p>
                    <p className="text-muted-foreground">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email Us</h4>
                    <p className="text-muted-foreground">hello@techservices.com</p>
                    <p className="text-muted-foreground">projects@techservices.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Call Us</h4>
                    <p className="text-muted-foreground">+91 7080404594</p>
                    <p className="text-muted-foreground">Mon-Fri 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Visit Us</h4>
                    <p className="text-muted-foreground">Tech Hub, Innovation Center</p>
                    <p className="text-muted-foreground">Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-primary text-primary-foreground border-primary">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">Ready to Start?</h4>
                <p className="mb-4 opacity-90">
                  Book a free 30-minute consultation to discuss your project requirements.
                </p>
                <Button onClick={handleWhatsAppContact} variant="secondary" className="w-full">
                  Contact on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
                Or Fill Our Google Form
              </h3>
              <p className="text-muted-foreground mb-6">
                Prefer a quick form? Submit your project details here and we'll get back within 24 hours.
              </p>
              <div className="w-full rounded-md overflow-hidden border border-border">
                {/* Replace FORM_ID below with your actual Google Form ID */}
                <iframe
                  title="Project Inquiry Google Form"
                  src="https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true"
                  className="w-full h-[900px] bg-background"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                Note: Replace FORM_ID in the iframe URL with your actual Google Form ID to start collecting responses.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
