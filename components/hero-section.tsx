import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
           
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Des Soins Dentaires <span className="text-primary">Exceptionnels</span> à Casablanca
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Centre dentaire moderne équipé des dernières technologies pour vous offrir des soins de qualité dans un
              environnement confortable et accueillant.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild>
                <Link href="#appointment">
                  <Calendar className="mr-2 h-5 w-5" />
                  Prendre Rendez-vous
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
                <a href="tel:0522718209">
                  <Phone className="mr-2 h-5 w-5" />
                  Appelez-nous
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="pt-6 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
                <div>
                  <p className="font-semibold text-foreground mb-1">Téléphone</p>
                  <a href="tel:0522718209" className="text-muted-foreground hover:text-primary transition-colors">
                    0522 71 82 09
                  </a>
                  <span className="mx-2 text-muted-foreground">|</span>
                  <a href="tel:0666632542" className="text-muted-foreground hover:text-primary transition-colors">
                    0666 63 25 42
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:h-[600px]">
            <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 shadow-2xl">
              <img
                src="/hero.jpeg"
                alt="Cabinet dentaire moderne"
                className="w-full h-full object-cover"
              />

              {/* Floating Cards */}
              <div className="absolute bottom-8 left-8 right-8 bg-card/95 backdrop-blur p-6 rounded-xl shadow-lg border border-border">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🦷</span>
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">Dr. Laamiri Yassine</p>
                    <p className="text-sm text-muted-foreground">Chirurgien-Dentiste Expérimenté</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
