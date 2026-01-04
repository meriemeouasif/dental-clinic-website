"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react"

export function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Format WhatsApp message
    const message = `Bonjour, je souhaite prendre rendez-vous:\n\nNom: ${formData.name}\nTéléphone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nDate souhaitée: ${formData.date}\nHeure: ${formData.time}\nMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/212666632542?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="appointment" className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Prenez <span className="text-primary">Rendez-vous</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Remplissez le formulaire ci-dessous et nous vous contacterons rapidement
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Demande de Rendez-vous</CardTitle>
            <CardDescription>
              Nous vous répondrons dans les plus brefs délais pour confirmer votre rendez-vous
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    <User className="inline h-4 w-4 mr-1" />
                    Nom Complet *
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Votre nom complet"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    <Phone className="inline h-4 w-4 mr-1" />
                    Téléphone *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="06XX XX XX XX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  <Mail className="inline h-4 w-4 mr-1" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="votre@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">
                  <MessageSquare className="inline h-4 w-4 mr-1" />
                  Service Souhaité *
                </Label>
                <Select
                  required
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chirurgie">Chirurgie Buccale</SelectItem>
                    <SelectItem value="orthodontie">Orthodontie</SelectItem>
                    <SelectItem value="implantologie">Implantologie</SelectItem>
                    <SelectItem value="esthetique">Dentisterie Esthétique</SelectItem>
                    <SelectItem value="prothese">Prothèse</SelectItem>
                    <SelectItem value="parodontologie">Parodontologie</SelectItem>
                    <SelectItem value="pedodontie">Pédodontie</SelectItem>
                    <SelectItem value="blanchiment">Blanchiment</SelectItem>
                    <SelectItem value="radiologie">Radiologie</SelectItem>
                    <SelectItem value="consultation">Consultation Générale</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Date Souhaitée
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Heure Souhaitée
                  </Label>
                  <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Sélectionnez une heure" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">09:00</SelectItem>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="11:00">11:00</SelectItem>
                      <SelectItem value="14:00">14:00</SelectItem>
                      <SelectItem value="15:00">15:00</SelectItem>
                      <SelectItem value="16:00">16:00</SelectItem>
                      <SelectItem value="17:00">17:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (Optionnel)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Informations complémentaires..."
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Envoyer la demande via WhatsApp
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Ou appelez-nous directement au{" "}
                <a href="tel:0522718209" className="font-semibold text-primary hover:underline">
                  0522 71 82 09
                </a>{" "}
                ou{" "}
                <a href="tel:0666632542" className="font-semibold text-primary hover:underline">
                  0666 63 25 42
                </a>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
