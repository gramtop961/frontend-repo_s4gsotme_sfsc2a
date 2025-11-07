import { useMemo, useState } from "react";
import { Star, Filter } from "lucide-react";

const ALL_BIKES = [
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

const TYPES = ["All", "Hybrid", "Mountain", "Road", "Cargo"];

export default function BikeGrid() {
  const [type, setType] = useState("All");
  const [mode, setMode] = useState("hour"); // hour | day

  const bikes = useMemo(() => {
    return type === "All" ? ALL_BIKES : ALL_BIKES.filter((b) => b.type === type);
  }, [type]);

  function displayPrice(hourly) {
    if (mode === "hour") return `$${hourly} / hour`;
    const daily = Math.round(hourly * 6); // simple day discount
    return `$${daily} / day`;
  }

  return (
    <section id="bikes" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Popular bikes</h2>
          <p className="mt-2 text-muted-foreground">Well-maintained, safety-checked after every ride.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 rounded-md border bg-white p-1 text-sm">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`rounded px-2.5 py-1.5 ${type === t ? "bg-emerald-600 text-white" : "hover:bg-gray-50"}`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1 rounded-md border bg-white p-1 text-sm">
            <button
              onClick={() => setMode("hour")}
              className={`rounded px-2.5 py-1.5 ${mode === "hour" ? "bg-gray-900 text-white" : "hover:bg-gray-50"}`}
            >
              Hourly
            </button>
            <button
              onClick={() => setMode("day")}
              className={`rounded px-2.5 py-1.5 ${mode === "day" ? "bg-gray-900 text-white" : "hover:bg-gray-50"}`}
            >
              Daily
            </button>
          </div>
          <a href="#book" className="ml-auto rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
            Reserve now
          </a>
        </div>
      </div>
      <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground"><Filter size={16}/> Filter by type and switch pricing to compare deals.</div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {bikes.map((bike) => (
          <article key={bike.id} className="group overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md">
            <div className="relative">
              <img src={bike.image} alt={bike.name} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="absolute left-2 top-2 rounded bg-white/90 px-2 py-0.5 text-xs font-medium text-emerald-700">Available today</span>
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
                <p className="text-lg font-semibold">{displayPrice(bike.price)}</p>
                <a href="#book" className="rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50">Rent</a>
              </div>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                <li className="rounded-md bg-gray-50 px-2 py-1">Free helmet</li>
                <li className="rounded-md bg-gray-50 px-2 py-1">U-lock included</li>
                <li className="rounded-md bg-gray-50 px-2 py-1">Maintenance checked</li>
                <li className="rounded-md bg-gray-50 px-2 py-1">Roadside support</li>
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
