import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Contactez <span className="text-primary">Nous</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Nous sommes à votre disposition pour répondre à toutes vos questions et prendre rendez-vous
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Téléphone</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <a href="tel:0522718209" className="block hover:text-primary transition-colors">
                      0522 71 82 09
                    </a>
                    <a href="tel:0666632542" className="block hover:text-primary transition-colors">
                      0666 63 25 42
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Adresse</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Bureau N°9, 2ème étage
                    <br />
                    Lot Bilad AlKhair 01
                    <br />
                    Hay Sadri, Bd Mohamed Bouziane
                    <br />
                    Casablanca
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Horaires</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p className="font-medium text-foreground">Lun - Ven</p>
                    <p>09:00 - 12:30</p>
                    <p>14:00 - 18:00</p>
                    <p className="font-medium text-foreground mt-2">Samedi</p>
                    <p>09:00 - 13:00</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-2">Contactez-nous directement</p>
                  <a
                    href="https://wa.me/212666632542"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Envoyer un message
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="aspect-[16/9] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.847!2d-7.589843!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjIiTiA3wrAzNScyMy40Ilc!5e0!3m2!1sfr!2sma!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Centre Dentaire Laamiri Location"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Directions */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Notre cabinet est facilement accessible depuis tous les quartiers de Casablanca
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bureau+numero+9+2eme+etage+lot+Bilad+AlKhair+01+Hay+Sadri+boulevard+Mohamed+Bouziane+Casablanca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Obtenir l'itinéraire →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
