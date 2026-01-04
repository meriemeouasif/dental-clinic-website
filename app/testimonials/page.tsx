import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { GoogleReviews } from "@/components/google-reviews"

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <GoogleReviews />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}