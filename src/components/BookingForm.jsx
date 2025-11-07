import { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    pickup: "Downtown Hub",
    date: "",
    duration: 2,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="book" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Book your ride</h2>
          <p className="mt-2 text-muted-foreground">Quick reservation with instant confirmation.</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">Full name</label>
                <input
                  type="text"
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border px-3 py-2 focus:border-emerald-500 focus:outline-none"
                  placeholder="Alex Rider"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  required
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border px-3 py-2 focus:border-emerald-500 focus:outline-none"
                  placeholder="alex@example.com"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="block text-sm font-medium">Pickup location</label>
                <div className="mt-1 flex items-center gap-2 rounded-md border px-3 py-2">
                  <MapPin size={18} className="text-emerald-600" />
                  <select
                    name="pickup"
                    value={form.pickup}
                    onChange={handleChange}
                    className="w-full bg-transparent focus:outline-none"
                  >
                    <option>Downtown Hub</option>
                    <option>Seaside Station</option>
                    <option>Parkside Pavilion</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">Date</label>
                <div className="mt-1 flex items-center gap-2 rounded-md border px-3 py-2">
                  <Calendar size={18} className="text-emerald-600" />
                  <input
                    type="date"
                    name="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className="w-full bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">Duration (hours)</label>
                <div className="mt-1 flex items-center gap-2 rounded-md border px-3 py-2">
                  <Clock size={18} className="text-emerald-600" />
                  <input
                    type="number"
                    min="1"
                    max="24"
                    name="duration"
                    value={form.duration}
                    onChange={handleChange}
                    className="w-full bg-transparent focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-emerald-600 px-4 py-2.5 font-medium text-white hover:bg-emerald-700"
            >
              Confirm reservation
            </button>

            <p className="text-center text-sm text-muted-foreground">
              By continuing, you agree to our rental terms and safety policy.
            </p>
          </form>
        ) : (
          <div className="rounded-xl border bg-white p-6 text-center shadow-sm">
            <h3 className="text-2xl font-semibold">You're booked, {form.name}!</h3>
            <p className="mt-2 text-muted-foreground">
              Confirmation sent to {form.email}. Pickup at {form.pickup} on {form.date} for {form.duration} hours.
            </p>
            <a href="#bikes" className="mt-6 inline-block rounded-md border px-4 py-2 hover:bg-gray-50">
              Explore more bikes
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
