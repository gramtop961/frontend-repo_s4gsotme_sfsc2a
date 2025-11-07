import Hero from "./components/Hero";
import BikeGrid from "./components/BikeGrid";
import BookingForm from "./components/BookingForm";
import FAQ from "./components/FAQ";
import { Bicycle, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <Bicycle className="text-emerald-600" />
            <span>VeloRent</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#bikes" className="hover:text-emerald-600">Bikes</a>
            <a href="#book" className="hover:text-emerald-600">Booking</a>
            <a href="#faq" className="hover:text-emerald-600">FAQ</a>
          </nav>
          <a href="#book" className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700">Reserve</a>
        </div>
      </header>

      <main>
        <Hero />
        <BikeGrid />
        <BookingForm />
        <div id="faq"><FAQ /></div>
      </main>

      <footer className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-semibold"><Bicycle className="text-emerald-600" /><span>VeloRent</span></div>
              <p className="mt-2 text-sm text-muted-foreground">Explore the city on two wheels. Affordable rentals, flexible schedules, and friendly support.</p>
            </div>
            <div>
              <h4 className="font-semibold">Contact</h4>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Phone size={16} /> +1 (555) 123-4567</li>
                <li className="flex items-center gap-2"><MapPin size={16} /> 123 Seaside Ave, Bay City</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Hours</h4>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>Mon–Fri: 7am – 9pm</li>
                <li>Sat–Sun: 7am – 10pm</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Follow</h4>
              <div className="mt-2 flex items-center gap-3 text-muted-foreground">
                <a href="#" aria-label="Facebook" className="hover:text-emerald-600"><Facebook /></a>
                <a href="#" aria-label="Instagram" className="hover:text-emerald-600"><Instagram /></a>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} VeloRent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
