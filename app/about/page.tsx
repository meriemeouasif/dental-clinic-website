import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Award, Users, Heart, Zap, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                  À Propos du <span className="text-primary">Centre Dentaire Laamiri</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                  Un centre dentaire moderne à Casablanca, dédié à votre santé bucco-dentaire avec excellence et
                  compassion
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/modern-dental-reception.jpeg"
                  alt="Centre Dentaire Laamiri"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dr. Laamiri Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5 gap-8">
                  <div className="md:col-span-2 relative h-64 md:h-auto">
                    <img
                      src="/professional-dentist-portrait.jfif"
                      alt="Dr. Laamiri Yassine"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-3 p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Dr. Laamiri Yassine</h2>
                    <p className="text-xl text-primary mb-6">Chirurgien-Dentiste</p>

                    <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
                      <p className="leading-relaxed">
                        Le Dr. Laamiri Yassine est un chirurgien-dentiste expérimenté, passionné par l'excellence des
                        soins dentaires et le bien-être de ses patients. Diplômé avec distinction, il s'est spécialisé
                        dans plusieurs domaines de la dentisterie moderne.
                      </p>
                      <p className="leading-relaxed">
                        Avec des années d'expérience et une formation continue dans les dernières techniques dentaires,
                        le Dr. Laamiri combine expertise technique et approche humaine pour offrir des soins de qualité
                        supérieure.
                      </p>
                      <p className="leading-relaxed">
                        Sa philosophie repose sur l'écoute, la transparence et l'utilisation des technologies les plus
                        avancées pour garantir des traitements efficaces et confortables.
                      </p>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                      <Award className="h-12 w-12 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Formation Continue</p>
                        <p className="text-sm text-muted-foreground">
                          Membre actif des associations professionnelles dentaires
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Valeurs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ce qui guide notre pratique au quotidien
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Compassion</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Écoute et empathie pour chaque patient
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Standards de qualité les plus élevés</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Technologies et techniques modernes</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Accessibilité</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Soins de qualité pour tous</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pourquoi Choisir Notre <span className="text-primary">Centre Dentaire</span> ?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Nous nous engageons à vous offrir une expérience dentaire exceptionnelle, alliant confort, expertise
                  et résultats durables.
                </p>

                <ul className="space-y-4">
                  {[
                    "Équipement moderne et stérilisation rigoureuse",
                    "Techniques de pointe pour des soins sans douleur",
                    "Approche personnalisée pour chaque patient",
                    "Transparence des tarifs et options de paiement",
                    "Suivi post-traitement attentif",
                    "Équipe professionnelle et bienveillante",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/modern-dental-equipment-room.jpg" alt="Équipement moderne" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Commencez Votre Parcours Vers un Sourire Éclatant</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Prenez rendez-vous dès aujourd'hui et découvrez une nouvelle expérience dentaire
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/#appointment">Prendre Rendez-vous</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Nous Contacter</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
