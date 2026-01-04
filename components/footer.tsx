import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Image src="/logo.png" alt="Centre Dentaire Laamiri" width={180} height={54} className="h-10 w-auto" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Centre dentaire moderne offrant des soins de qualité pour toute la famille à Casablanca.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:0522718209" className="text-muted-foreground hover:text-primary transition-colors block">
                    0522 71 82 09
                  </a>
                  <a href="tel:0666632542" className="text-muted-foreground hover:text-primary transition-colors block">
                    0666 63 25 42
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Bureau N°9, 2ème étage
                  <br />
                  Lot Bilad AlKhair 01
                  <br />
                  Hay Sadri, Bd Mohamed Bouziane
                  <br />
                  Casablanca
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4">Horaires</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p className="font-medium text-foreground mb-1">Lundi - Vendredi</p>
                  <p>09:00 - 12:30</p>
                  <p>14:00 - 18:00</p>
                  <p className="font-medium text-foreground mt-2">Samedi</p>
                  <p>09:00 - 13:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Centre Dentaire Laamiri. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
