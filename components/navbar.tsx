// components/navbar.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, HelpCircle, ChevronDown } from "lucide-react"

// FAQ items data
const faqItems = [
  {
    question: "Do you perform blood or plasma transfusions?",
    frenchQuestion: "Effectuez-vous des transfusions sanguines ou plasmatiques ?",
    answer: "Yes, we perform all types of dental surgeries including those requiring blood or plasma transfusion under specialized medical supervision.",
    frenchAnswer: "Oui, nous effectuons tous types de chirurgies dentaires y compris celles nécessitant une transfusion sanguine ou plasmatique sous supervision médicale spécialisée."
  },
  {
    question: "Do you offer payment plans for orthodontic treatment?",
    frenchQuestion: "Proposez-vous des plans de paiement pour le traitement orthodontique ?",
    answer: "Yes, we offer flexible payment options and installment plans for orthodontic and cosmetic treatments.",
    frenchAnswer: "Oui, nous proposons des options de paiement flexibles et des plans de paiement échelonnés pour les traitements orthodontiques et esthétiques."
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

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState(false)
  const [language, setLanguage] = useState<"fr" | "en">("fr")

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Centre Dentaire Laamiri" width={200} height={60} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              À Propos
            </Link>
            
            {/* FAQ Dropdown */}
            <div className="relative">
              <button
                onClick={() => setFaqOpen(!faqOpen)}
                className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
              >
                <HelpCircle className="h-4 w-4" />
                <span>FAQ</span>
                <ChevronDown className={`h-3 w-3 transition-transform ${faqOpen ? "rotate-180" : ""}`} />
              </button>
              
              {faqOpen && (
                <div className="absolute top-full right-0 mt-2 w-96 bg-white shadow-xl border border-gray-200 rounded-lg z-50 p-4">
                  <div className="space-y-4">
                    {/* Language Toggle */}
                    <div className="flex justify-between items-center mb-2 pb-2 border-b">
                      <h3 className="font-bold text-lg text-primary">
                        {language === "fr" ? "❓ Questions Fréquentes" : "❓ FAQ"}
                      </h3>
                      <div className="flex gap-1">
                        <button
                          onClick={() => setLanguage("fr")}
                          className={`px-2 py-1 text-xs rounded ${language === "fr" ? "bg-primary text-white" : "bg-gray-100"}`}
                        >
                          FR
                        </button>
                        <button
                          onClick={() => setLanguage("en")}
                          className={`px-2 py-1 text-xs rounded ${language === "en" ? "bg-primary text-white" : "bg-gray-100"}`}
                        >
                          EN
                        </button>
                      </div>
                    </div>
                    
                    {/* FAQ Items */}
                    {faqItems.map((item, index) => (
                      <div 
                        key={index} 
                        className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors border border-gray-100"
                      >
                        <h4 className="font-semibold text-sm text-gray-800 mb-2">
                          {language === "fr" ? item.frenchQuestion : item.question}
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {language === "fr" ? item.frenchAnswer : item.answer}
                        </p>
                      </div>
                    ))}
                    
                    {/* Footer */}
                    <div className="pt-2 border-t border-gray-200">
                      <Link 
                        href="/faq" 
                        onClick={() => setFaqOpen(false)}
                        className="text-xs text-primary hover:underline font-medium block text-center"
                      >
                        {language === "fr" ? "Voir toutes les questions →" : "See all questions →"}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Ajouter le lien Témoignages ici */}
            <Link href="/testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              {language === "fr" ? "Témoignages" : "Testimonials"}
            </Link>
            
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0522718209"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>0522 71 82 09</span>
            </a>
            <Button size="sm" asChild>
              <Link href="#appointment">Prendre RDV</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Accueil
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                À Propos
              </Link>
              
              {/* Mobile FAQ Section */}
              <div className="pt-2 border-t border-border">
                <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  Questions Fréquentes
                </h4>
                <div className="space-y-3 pl-6">
                  {faqItems.slice(0, 3).map((item, index) => (
                    <div key={index} className="text-sm">
                      <p className="font-medium text-gray-700">
                        {language === "fr" ? item.frenchQuestion : item.question}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {language === "fr" ? item.frenchAnswer : item.answer}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs text-primary hover:underline font-medium mt-2 inline-block"
                >
                  Plus de questions →
                </Link>
              </div>
              
              {/* Lien Témoignages dans Mobile Menu */}
              <Link
                href="/testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {language === "fr" ? "Témoignages" : "Testimonials"}
              </Link>
              
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Contact
              </Link>
              
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <a href="tel:0522718209" className="text-sm font-medium text-muted-foreground">
                  0522 71 82 09
                </a>
                <a href="tel:0666632542" className="text-sm font-medium text-muted-foreground">
                  0666 63 25 42
                </a>
                <Button size="sm" className="mt-2" asChild>
                  <Link href="#appointment" onClick={() => setMobileMenuOpen(false)}>
                    Prendre RDV
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Close FAQ when clicking outside */}
      {faqOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setFaqOpen(false)}
        />
      )}
    </nav>
  )
}