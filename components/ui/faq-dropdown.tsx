// components/faq-dropdown.tsx
"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

export function FAQDropdown() {
  const [open, setOpen] = useState(false)
  const [language, setLanguage] = useState<"en" | "fr">("fr")

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="flex items-center gap-2 text-sm font-medium hover:bg-primary/10"
        >
          <HelpCircle className="h-4 w-4" />
          <span>{language === "fr" ? "FAQ" : "FAQ"}</span>
          <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-[450px] max-h-[500px] overflow-y-auto p-4 bg-white shadow-xl border border-gray-200 rounded-lg"
      >
        <div className="space-y-4">
          {/* Language Toggle */}
          <div className="flex justify-between items-center mb-2 pb-2 border-b">
            <h3 className="font-bold text-lg text-primary">
              {language === "fr" ? "❓ Questions Fréquentes" : "❓ Frequently Asked Questions"}
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
              className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors border border-gray-100"
            >
              <h4 className="font-semibold text-sm text-gray-800 mb-3 flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                {language === "fr" ? item.frenchQuestion : item.question}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {language === "fr" ? item.frenchAnswer : item.answer}
              </p>
            </div>
          ))}

          {/* Footer */}
          <div className="pt-3 mt-2 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              {language === "fr" ? "Question non trouvée ? " : "Question not found? "}
              <a href="/contact" className="text-primary hover:underline font-medium">
                {language === "fr" ? "Contactez-nous" : "Contact us"}
              </a>
            </p>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}