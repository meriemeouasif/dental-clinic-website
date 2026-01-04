// app/faq/page.tsx
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { HelpCircle, Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

const faqItems = [
  {
    category: "General Questions",
    frenchCategory: "Questions Générales",
    items: [
      {
        question: "Do you perform blood or plasma transfusions?",
        frenchQuestion: "Effectuez-vous des transfusions sanguines ou plasmatiques ?",
        answer: "Yes, we perform all types of dental surgeries including those requiring blood or plasma transfusion under specialized medical supervision.",
        frenchAnswer: "Oui, nous effectuons tous types de chirurgies dentaires y compris celles nécessitant une transfusion sanguine ou plasmatique sous supervision médicale spécialisée."
      },
      {
        question: "Is dental surgery painful?",
        frenchQuestion: "La chirurgie dentaire est-elle douloureuse ?",
        answer: "We use the latest local anesthesia techniques and modern technology to ensure complete comfort and pain-free experience during and after the procedure.",
        frenchAnswer: "Nous utilisons les dernières techniques d'anesthésie locale et des technologies modernes pour garantir un confort complet et une expérience sans douleur pendant et après l'intervention."
      },
      {
        question: "Do you treat children?",
        frenchQuestion: "Traitez-vous les enfants ?",
        answer: "Yes, we have a specialized pediatric dentistry department (Pédodontie) with medical staff trained to work with children.",
        frenchAnswer: "Oui, nous avons un service de pédodontie spécialisé avec un personnel médical formé pour travailler avec les enfants."
      }
    ]
  },
  {
    category: "Appointments & Payments",
    frenchCategory: "Rendez-vous & Paiements",
    items: [
      {
        question: "Do you offer payment plans for orthodontic treatment?",
        frenchQuestion: "Proposez-vous des plans de paiement pour le traitement orthodontique ?",
        answer: "Yes, we offer flexible payment options and installment plans for orthodontic and cosmetic treatments.",
        frenchAnswer: "Oui, nous proposons des options de paiement flexibles et des plans de paiement échelonnés pour les traitements orthodontiques et esthétiques."
      },
      {
        question: "How long does dental implant treatment take?",
        frenchQuestion: "Combien de temps dure le traitement d'implant dentaire ?",
        answer: "Treatment duration ranges from 3-6 months depending on bone condition. We use the latest techniques to minimize treatment time.",
        frenchAnswer: "La durée du traitement varie de 3 à 6 mois selon l'état osseux. Nous utilisons les dernières techniques pour minimiser le temps de traitement."
      },
      {
        question: "Can I book via WhatsApp?",
        frenchQuestion: "Puis-je réserver via WhatsApp ?",
        answer: "Yes, you can contact us on WhatsApp at 0666632542 for booking or inquiries.",
        frenchAnswer: "Oui, vous pouvez nous contacter sur WhatsApp au 0666632542 pour prendre rendez-vous ou pour des demandes d'information."
      }
    ]
  },
  {
    category: "Treatments & Services",
    frenchCategory: "Traitements & Services",
    items: [
      {
        question: "What is the duration of orthodontic treatment?",
        frenchQuestion: "Quelle est la durée du traitement orthodontique ?",
        answer: "Treatment duration ranges from 12 to 24 months depending on the case. We provide regular follow-up every 4-6 weeks.",
        frenchAnswer: "La durée du traitement varie de 12 à 24 mois selon le cas. Nous assurons un suivi régulier toutes les 4-6 semaines."
      },
      {
        question: "Do you handle dental emergencies?",
        frenchQuestion: "Prenez-vous en charge les urgences dentaires ?",
        answer: "Yes, we accept emergency cases during working hours, and after hours via phone for urgent consultations.",
        frenchAnswer: "Oui, nous acceptons les urgences dentaires pendant les heures d'ouverture, et après les heures via téléphone pour les consultations urgentes."
      },
      {
        question: "What payment methods do you accept?",
        frenchQuestion: "Quels moyens de paiement acceptez-vous ?",
        answer: "We accept cash, credit cards, bank transfer, and offer installment plans for major procedures.",
        frenchAnswer: "Nous acceptons l'argent liquide, les cartes de crédit, le virement bancaire, et proposons des paiements échelonnés pour les traitements majeurs."
      }
    ]
  }
]

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    frenchTitle: "Appelez-nous",
    details: ["0522 71 82 09", "0666 63 25 42"],
    action: "tel:0522718209"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    frenchTitle: "WhatsApp",
    details: ["0666 63 25 42"],
    action: "https://wa.me/212666632542"
  },
  {
    icon: Mail,
    title: "Email",
    frenchTitle: "Email",
    details: ["contact@centredentairelaamiri.com"],
    action: "mailto:contact@centredentairelaamiri.com"
  }
]

export default function FAQPage() {
  const language: "fr" | "en" = "fr"

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mb-6">
              <HelpCircle className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              {language === "fr" ? "Questions Fréquentes" : "Frequently Asked Questions"}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {language === "fr" 
                ? "Trouvez rapidement des réponses à vos questions sur nos soins dentaires, rendez-vous et traitements." 
                : "Find quick answers to your questions about our dental care, appointments, and treatments."}
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* FAQ Accordion */}
            <div className="space-y-8">
              {faqItems.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {language === "fr" ? category.frenchCategory : category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem 
                        key={itemIndex} 
                        value={`item-${categoryIndex}-${itemIndex}`}
                        className="border border-border rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <span className="font-semibold text-base">
                            {language === "fr" ? item.frenchQuestion : item.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {language === "fr" ? item.frenchAnswer : item.answer}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <Card className="mt-16 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {language === "fr" ? "Question non trouvée ?" : "Question not found?"}
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {language === "fr" 
                      ? "Contactez-nous directement pour une réponse personnalisée à votre question." 
                      : "Contact us directly for a personalized answer to your question."}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.action}
                      className="flex flex-col items-center p-6 bg-background rounded-xl border border-border hover:border-primary transition-all hover:shadow-lg"
                    >
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <method.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">
                        {language === "fr" ? method.frenchTitle : method.title}
                      </h4>
                      {method.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-center">
                          {detail}
                        </p>
                      ))}
                    </a>
                  ))}
                </div>

                <div className="text-center">
                  <Button size="lg" asChild className="mx-auto">
                    <Link href="/contact">
                      {language === "fr" ? "Formulaire de Contact" : "Contact Form"}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}