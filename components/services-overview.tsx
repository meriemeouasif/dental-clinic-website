import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Stethoscope, Smile, Sparkles, Baby, Shield, Scan, Hammer, Activity, Crown } from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "Chirurgie Buccale",
    description: "Extractions et interventions chirurgicales avec expertise et soin",
    color: "text-blue-500",
  },
  {
    icon: Activity,
    title: "Orthodontie",
    description: "Correction de l'alignement dentaire pour un sourire parfait",
    color: "text-cyan-500",
  },
  {
    icon: Crown,
    title: "Implantologie",
    description: "Remplacement durable des dents manquantes",
    color: "text-teal-500",
  },
  {
    icon: Sparkles,
    title: "Dentisterie Esthétique",
    description: "Embellissement du sourire avec des techniques modernes",
    color: "text-purple-500",
  },
  {
    icon: Hammer,
    title: "Prothèse",
    description: "Restauration complète avec des prothèses de qualité",
    color: "text-orange-500",
  },
  {
    icon: Shield,
    title: "Parodontologie",
    description: "Traitement des maladies des gencives et des tissus",
    color: "text-green-500",
  },
  {
    icon: Baby,
    title: "Pédodontie",
    description: "Soins dentaires spécialisés pour les enfants",
    color: "text-pink-500",
  },
  {
    icon: Smile,
    title: "Blanchiment",
    description: "Éclaircissement dentaire pour un sourire lumineux",
    color: "text-yellow-500",
  },
  {
    icon: Scan,
    title: "Radiologie",
    description: "Diagnostic précis avec équipement radiologique moderne",
    color: "text-indigo-500",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Une gamme complète de soins dentaires pour toute la famille
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div
                  className={`h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/services">Découvrir tous nos services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
