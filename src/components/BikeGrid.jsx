import { Star } from "lucide-react";

const bikes = [
  {
    id: 1,
    name: "City Cruiser",
    type: "Hybrid",
    price: 12,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1519680772-8b1b0b84f0b4?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Trail Blazer",
    type: "Mountain",
    price: 16,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1524749292158-7540c2494485?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Speedster",
    type: "Road",
    price: 18,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Cargo Carrier",
    type: "Cargo",
    price: 20,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1546541612-75f3e2fdbbc4?q=80&w=1920&auto=format&fit=crop",
  },
];

export default function BikeGrid() {
  return (
    <section id="bikes" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Popular bikes</h2>
          <p className="mt-2 text-muted-foreground">
            Well-maintained, safety-checked after every ride.
          </p>
        </div>
        <a href="#book" className="rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
          Reserve now
        </a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {bikes.map((bike) => (
          <article key={bike.id} className="group overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md">
            <div className="relative">
              <img src={bike.image} alt={bike.name} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold tracking-tight">{bike.name}</h3>
                  <p className="text-sm text-muted-foreground">{bike.type}</p>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
                  <span className="text-sm font-medium">{bike.rating}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-semibold">${bike.price} <span className="text-sm font-normal text-muted-foreground">/ hour</span></p>
                <a href="#book" className="rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50">Rent</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
