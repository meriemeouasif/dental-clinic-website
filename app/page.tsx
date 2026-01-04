import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { AppointmentSection } from "@/components/appointment-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { GoogleReviews } from "@/components/google-reviews"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesOverview />
        <AppointmentSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
