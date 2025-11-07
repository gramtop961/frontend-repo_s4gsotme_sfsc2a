import { Bike, Clock, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-600 to-emerald-700 text-white">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill="url(#g)" />
          <g fill="white" fillOpacity="0.15">
            <circle cx="10" cy="20" r="4" />
            <circle cx="40" cy="80" r="6" />
            <circle cx="80" cy="30" r="5" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <Clock size={16} />
              <span>Open daily 7am – 9pm</span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Pedal into your next adventure
            </h1>
            <p className="mt-4 text-lg text-emerald-50">
              Premium bikes, flexible rentals, and scenic routes. Whether you’re commuting, cruising the coast, or exploring new trails, we’ve got the perfect ride.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#book"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 font-medium text-emerald-700 shadow hover:bg-emerald-50"
              >
                Book a bike
              </a>
              <a
                href="#bikes"
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 font-medium text-white hover:bg-white/10"
              >
                Browse models
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-emerald-100">
              <div className="flex items-center gap-2"><Bike size={18} /> 150+ bikes</div>
              <div className="flex items-center gap-2"><MapPin size={18} /> 3 pickup hubs</div>
            </div>
          </div>
          <div className="relative mt-10 w-full max-w-md md:mt-0">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1920&auto=format&fit=crop"
                alt="Cyclist riding along the coast"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
