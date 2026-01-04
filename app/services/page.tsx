import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Stethoscope, Smile, Sparkles, Baby, Shield, Scan, Hammer, Activity, Crown, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "Chirurgie Buccale",
    image: "/images/services/m11.jpeg",
    description:
      "Nos interventions chirurgicales comprennent les extractions dentaires, la chirurgie des dents de sagesse, et les interventions pré-implantaires.",
    benefits: [
      "Extractions dentaires",
      "Dents de sagesse",
      "Régénération osseuse",
      "Chirurgie pré-implantaire",
    ],
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Activity,
    title: "Orthodontie",
    image: "/images/services/m22.jpeg",
    description:
      "Correction de l'alignement dentaire avec des solutions modernes et esthétiques.",
    benefits: [
      "Bagues métalliques",
      "Orthodontie invisible",
      "Adultes et enfants",
      "Traitement personnalisé",
    ],
    color: "bg-cyan-500/10 text-cyan-500",
  },
  {
    icon: Crown,
    title: "Implantologie",
    image: "/images/services/m3.jpeg",
    description:
      "Remplacement durable des dents manquantes grâce aux implants dentaires.",
    benefits: [
      "Implants unitaires",
      "Bridges sur implants",
      "Prothèses complètes",
      "Matériaux premium",
    ],
    color: "bg-teal-500/10 text-teal-500",
  },
  {
    icon: Sparkles,
    title: "Dentisterie Esthétique",
    image: "/images/services/m4.jpeg",
    description:
      "Embellissement du sourire avec des techniques modernes.",
    benefits: [
      "Facettes",
      "Smile Design",
      "Restaurations invisibles",
      "Résultat naturel",
    ],
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: Hammer,
    title: "Prothèse Dentaire",
    image: "/images/services/m5.jpeg",
    description:
      "Prothèses fixes et amovibles sur mesure.",
    benefits: [
      "Couronnes",
      "Bridges",
      "Prothèses fixes",
      "Prothèses amovibles",
    ],
    color: "bg-orange-500/10 text-orange-500",
  },
  
  {
    icon: Smile,
    title: "Blanchiment Dentaire",
    image: "/images/services/m8.jpeg",
    description:
      "Blanchiment professionnel pour un sourire éclatant.",
    benefits: [
      "Au fauteuil",
      "À domicile",
      "Résultat rapide",
      "Sans douleur",
    ],
    color: "bg-yellow-500/10 text-yellow-500",
  },
  {
    icon: Scan,
    title: "Radiologie Dentaire",
    image: "/images/services/m9.jpeg",
    description:
      "Radiologie numérique de haute précision.",
    benefits: [
      "Panoramique",
      "Rétro-alvéolaire",
      "Faible radiation",
      "HD",
    ],
    color: "bg-indigo-500/10 text-indigo-500",
  },
]


export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Nos <span className="text-primary">Services</span> Dentaires
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Une gamme complète de soins dentaires de haute qualité, réalisés avec expertise et dévouement pour votre
              santé bucco-dentaire
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <Card key={service.title} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                      {/* Image */}
                     <div className={`relative h-64 md:h-auto ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
  <img
    src={service.image}
    alt={service.title}
    className="w-full h-full object-cover"
  />
</div>

                      {/* Content */}
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div
                          className={`inline-flex h-14 w-14 rounded-xl ${service.color} items-center justify-center mb-6`}
                        >
                          <service.icon className="h-7 w-7" />
                        </div>

                        <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                        <ul className="space-y-3 mb-6">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Prêt à prendre rendez-vous ?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour une consultation et découvrez comment nous pouvons vous aider
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/#appointment">Prendre Rendez-vous</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:0522718209">Appelez-nous</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )

}
