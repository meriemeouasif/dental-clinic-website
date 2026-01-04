// components/google-reviews.tsx
"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const googleReviews = [
  {
    id: 1,
    name: "Karim M.",
    rating: 5,
    date: "15 janvier 2024",
    comment: "Docteur Lamiri est un professionnel exceptionnel. J'ai fait un implant dentaire et tout s'est parfaitement déroulé. Personnel accueillant et clinique très propre. Je recommande vivement !",
    frenchComment: "Docteur Lamiri est un professionnel exceptionnel. J'ai fait un implant dentaire et tout s'est parfaitement déroulé. Personnel accueillant et clinique très propre. Je recommande vivement !",
    avatarColor: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    name: "Fatima Z.",
    rating: 5,
    date: "3 février 2024",
    comment: "Traitement orthodontique pour mon fils de 14 ans. Le docteur est très patient avec les enfants. Résultats impressionnants en seulement 18 mois. Merci pour votre professionnalisme !",
    frenchComment: "Traitement orthodontique pour mon fils de 14 ans. Le docteur est très patient avec les enfants. Résultats impressionnants en seulement 18 mois. Merci pour votre professionnalisme !",
    avatarColor: "bg-pink-100 text-pink-600"
  },
  {
    id: 3,
    name: "Ahmed R.",
    rating: 5,
    date: "22 décembre 2023",
    comment: "J'avais très peur des dentistes avant de venir ici. L'équipe m'a mis en confiance et les soins ont été sans douleur. Blanchiment dentaire avec des résultats spectaculaires !",
    frenchComment: "J'avais très peur des dentistes avant de venir ici. L'équipe m'a mis en confiance et les soins ont été sans douleur. Blanchiment dentaire avec des résultats spectaculaires !",
    avatarColor: "bg-green-100 text-green-600"
  },
  {
    id: 4,
    name: "Sophie L.",
    rating: 5,
    date: "10 janvier 2024",
    comment: "Urgence dentaire traitée le jour même. Personnel très réactif et compétent. Prix transparents. Je reviendrai pour mes soins réguliers.",
    frenchComment: "Urgence dentaire traitée le jour même. Personnel très réactif et compétent. Prix transparents. Je reviendrai pour mes soins réguliers.",
    avatarColor: "bg-purple-100 text-purple-600"
  },
  {
    id: 5,
    name: "Youssef K.",
    rating: 5,
    date: "5 mars 2024",
    comment: "Chirurgie des dents de sagesse. Procédure rapide et professionnelle. Suivi post-opératoire excellent. Aucune complication.",
    frenchComment: "Chirurgie des dents de sagesse. Procédure rapide et professionnelle. Suivi post-opératoire excellent. Aucune complication.",
    avatarColor: "bg-orange-100 text-orange-600"
  },
  {
    id: 6,
    name: "Laila M.",
    rating: 5,
    date: "18 février 2024",
    comment: "Prothèse dentaire de haute qualité. Confort optimal et aspect naturel. Le docteur a pris le temps de tout m'expliquer. Très satisfaite.",
    frenchComment: "Prothèse dentaire de haute qualité. Confort optimal et aspect naturel. Le docteur a pris le temps de tout m'expliquer. Très satisfaite.",
    avatarColor: "bg-teal-100 text-teal-600"
  }
]

export function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [language, setLanguage] = useState<"fr" | "en">("fr")

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === googleReviews.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? googleReviews.length - 1 : prevIndex - 1
    )
  }

  const totalReviews = 47 // عدد التقييمات الإجمالي
  const averageRating = 4.9 // المعدل

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 mb-4">
            <Quote className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {language === "fr" ? "Ce Que Disent Nos Clients" : "What Our Clients Say"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            {language === "fr" 
              ? "Découvrez les avis authentiques de nos clients sur Google" 
              : "Discover authentic reviews from our clients on Google"}
          </p>
          
          {/* Rating Summary */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-2xl font-bold">{averageRating}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {language === "fr" ? "Note moyenne sur Google" : "Average Google rating"}
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{totalReviews}+</div>
              <p className="text-sm text-muted-foreground">
                {language === "fr" ? "Avis vérifiés" : "Verified reviews"}
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">
                {language === "fr" ? "Clients satisfaits" : "Satisfied clients"}
              </p>
            </div>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setLanguage("fr")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                language === "fr" ? "bg-white text-primary shadow-sm" : "text-gray-600"
              }`}
            >
              🇫🇷 Français
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                language === "en" ? "bg-white text-primary shadow-sm" : "text-gray-600"
              }`}
            >
              🇬🇧 English
            </button>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {googleReviews.slice(currentIndex, currentIndex + 3).map((review) => (
              <Card key={review.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-full ${review.avatarColor} flex items-center justify-center font-bold`}>
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <Quote className="h-5 w-5 text-gray-300" />
                  </div>

                  {/* Comment */}
                  <div className="flex-grow mb-4">
                    <p className="text-sm text-gray-600 italic">
                      "{language === "fr" ? review.frenchComment : review.comment}"
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{review.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="h-8 w-8 bg-gray-100 rounded flex items-center justify-center">
                        <svg className="h-4 w-4" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      </div>
                      <span className="text-xs text-gray-500">Google</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(Math.ceil(googleReviews.length / 3))].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index * 3 ? "w-8 bg-primary" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button size="lg" className="gap-2" asChild>
            <a 
              href="https://g.page/r/CenterDentaireLaamiri/review" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {language === "fr" ? "Laisser un avis sur Google" : "Leave a Google Review"}
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a 
              href="https://www.google.com/maps/place/Centre+Dentaire+Laamiri/@33.573716,-7.612345,17z" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MapPin className="h-5 w-5" />
              {language === "fr" ? "Voir sur Google Maps" : "View on Google Maps"}
            </a>
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">⭐ 4.9/5</div>
            <p className="text-xs text-gray-500">Google Rating</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">✅ 100%</div>
            <p className="text-xs text-gray-500">{language === "fr" ? "Clients Satisfaits" : "Client Satisfaction"}</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">🏆 2024</div>
            <p className="text-xs text-gray-500">{language === "fr" ? "Excellence Award" : "Excellence Award"}</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">👨‍⚕️ 15+</div>
            <p className="text-xs text-gray-500">{language === "fr" ? "Ans d'Expérience" : "Years Experience"}</p>
          </div>
        </div>
      </div>
    </section>
  )
}