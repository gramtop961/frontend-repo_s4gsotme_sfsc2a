import { useMemo, useState } from "react";
import { Calendar, Clock, MapPin, ShieldCheck, Ticket, DollarSign, Bike } from "lucide-react";

const BIKE_RATES = {
  "City Cruiser": 12,
  "Trail Blazer": 16,
  Speedster: 18,
  "Cargo Carrier": 20,
};

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    pickup: "Downtown Hub",
    date: "",
    duration: 2,
    bikeType: "City Cruiser",
    addons: {
      insurance: true,
      childSeat: false,
      phoneMount: false,
    },
    coupon: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleAddonChange(e) {
    const { name, checked } = e.target;
    setForm((f) => ({ ...f, addons: { ...f.addons, [name]: checked } }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  const pricing = useMemo(() => {
    const hours = Math.max(1, Number(form.duration) || 1);
    const baseRate = BIKE_RATES[form.bikeType] || 12;
    const base = baseRate * hours;

    const addInsurance = form.addons.insurance ? 5 : 0; // flat
    const addChildSeat = form.addons.childSeat ? 3 * hours : 0; // per hour
    const addPhoneMount = form.addons.phoneMount ? 2 : 0; // flat
    const addonsTotal = addInsurance + addChildSeat + addPhoneMount;

    let subTotal = base + addonsTotal;

    // simple coupons
    const code = form.coupon.trim().toUpperCase();
    let discount = 0;
    if (code === "RIDE10") discount = subTotal * 0.1;
    if (code === "WEEKEND5") discount = subTotal * 0.05;

    const afterDiscount = Math.max(0, subTotal - discount);
    const tax = afterDiscount * 0.08; // 8% tax
    const total = afterDiscount + tax;

    return {
      hours,
      baseRate,
      lineItems: {
        base,
        addInsurance,
        addChildSeat,
        addPhoneMount,
        discount,
        tax,
      },
      subTotal,
      afterDiscount,
      total,
      deposit: 50,
    };
  }, [form]);

  return (
    <section id="book" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Book your ride</h2>
            <p className="mt-2 text-muted-foreground">Real-time pricing, add-ons, and instant confirmation.</p>
          </div>
          <div className="flex items-center gap-3 text-sm text-emerald-700">
            <ShieldCheck size={18} />
            <span>Free helmet & lock included</span>
          </div>
        </div>

        {!submitted ? (
          <div className="grid gap-6 md:grid-cols-5">
            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-6 rounded-xl border bg-white p-6 shadow-sm">
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
                      max="72"
                      name="duration"
                      value={form.duration}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium">Bike type</label>
                  <div className="mt-1 flex items-center gap-2 rounded-md border px-3 py-2">
                    <Bike size={18} className="text-emerald-600" />
                    <select
                      name="bikeType"
                      value={form.bikeType}
                      onChange={handleChange}
                      className="w-full bg-transparent focus:outline-none"
                    >
                      {Object.keys(BIKE_RATES).map((b) => (
                        <option key={b} value={b}>{b} — ${BIKE_RATES[b]}/hr</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium">Promo code</label>
                  <div className="mt-1 flex items-center gap-2 rounded-md border px-3 py-2">
                    <Ticket size={18} className="text-emerald-600" />
                    <input
                      type="text"
                      name="coupon"
                      value={form.coupon}
                      onChange={handleChange}
                      placeholder="RIDE10 or WEEKEND5"
                      className="w-full bg-transparent focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <fieldset className="rounded-lg border bg-gray-50/50 p-4">
                <legend className="px-1 text-sm font-medium text-gray-700">Add-ons</legend>
                <div className="mt-2 grid gap-3 sm:grid-cols-3">
                  <label className="flex items-center justify-between gap-3 rounded-md bg-white p-3 shadow-sm ring-1 ring-gray-200">
                    <div className="text-sm">
                      <span className="block font-medium">Damage insurance</span>
                      <span className="text-xs text-muted-foreground">Flat ${5} per rental</span>
                    </div>
                    <input
                      type="checkbox"
                      name="insurance"
                      checked={form.addons.insurance}
                      onChange={handleAddonChange}
                      className="h-4 w-4"
                    />
                  </label>

                  <label className="flex items-center justify-between gap-3 rounded-md bg-white p-3 shadow-sm ring-1 ring-gray-200">
                    <div className="text-sm">
                      <span className="block font-medium">Child seat</span>
                      <span className="text-xs text-muted-foreground">$3/hr</span>
                    </div>
                    <input
                      type="checkbox"
                      name="childSeat"
                      checked={form.addons.childSeat}
                      onChange={handleAddonChange}
                      className="h-4 w-4"
                    />
                  </label>

                  <label className="flex items-center justify-between gap-3 rounded-md bg-white p-3 shadow-sm ring-1 ring-gray-200">
                    <div className="text-sm">
                      <span className="block font-medium">Phone mount</span>
                      <span className="text-xs text-muted-foreground">Flat $2 per rental</span>
                    </div>
                    <input
                      type="checkbox"
                      name="phoneMount"
                      checked={form.addons.phoneMount}
                      onChange={handleAddonChange}
                      className="h-4 w-4"
                    />
                  </label>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">Helmet and U-lock are always included for free.</p>
              </fieldset>

              <button
                type="submit"
                className="w-full rounded-md bg-emerald-600 px-4 py-2.5 font-medium text-white hover:bg-emerald-700"
              >
                Confirm reservation
              </button>

              <p className="text-center text-xs text-muted-foreground">
                By continuing, you agree to our rental terms and safety policy.
              </p>
            </form>

            <aside className="md:col-span-2 h-max rounded-xl border bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-semibold"><DollarSign className="text-emerald-600" size={18}/> Price summary</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span>{form.bikeType} — ${pricing.baseRate}/hr × {pricing.hours}h</span>
                  <span>${pricing.lineItems.base.toFixed(2)}</span>
                </div>
                {form.addons.insurance && (
                  <div className="flex items-center justify-between text-gray-700">
                    <span>Damage insurance (flat)</span>
                    <span>${pricing.lineItems.addInsurance.toFixed(2)}</span>
                  </div>
                )}
                {form.addons.childSeat && (
                  <div className="flex items-center justify-between text-gray-700">
                    <span>Child seat ($3/hr)</span>
                    <span>${pricing.lineItems.addChildSeat.toFixed(2)}</span>
                  </div>
                )}
                {form.addons.phoneMount && (
                  <div className="flex items-center justify-between text-gray-700">
                    <span>Phone mount (flat)</span>
                    <span>${pricing.lineItems.addPhoneMount.toFixed(2)}</span>
                  </div>
                )}
                {pricing.lineItems.discount > 0 && (
                  <div className="flex items-center justify-between text-emerald-700">
                    <span>Discount</span>
                    <span>- ${pricing.lineItems.discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-gray-700">Subtotal</span>
                  <span>${pricing.afterDiscount.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-gray-700">
                  <span>Tax (8%)</span>
                  <span>${pricing.lineItems.tax.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between border-t pt-3 text-base font-semibold">
                  <span>Total due at pickup</span>
                  <span>${pricing.total.toFixed(2)}</span>
                </div>
                <div className="mt-2 rounded-md bg-amber-50 p-3 text-xs text-amber-800">
                  A refundable ${pricing.deposit.toFixed(0)} security deposit may be held on your card at pickup.
                </div>
              </div>
              <div className="mt-6 rounded-md bg-emerald-50 p-4 text-xs text-emerald-900">
                Tip: Use code <span className="font-semibold">RIDE10</span> for 10% off weekday rides, or <span className="font-semibold">WEEKEND5</span> for 5% off Sat–Sun.
              </div>
            </aside>
          </div>
        ) : (
          <div className="rounded-xl border bg-white p-6 text-center shadow-sm">
            <h3 className="text-2xl font-semibold">You're booked, {form.name}!</h3>
            <p className="mt-2 text-muted-foreground">
              Confirmation sent to {form.email}. Pickup at {form.pickup} on {form.date} for {pricing.hours} hours.
            </p>
            <div className="mx-auto mt-6 max-w-md rounded-lg bg-gray-50 p-4 text-left text-sm">
              <div className="flex items-center justify-between"><span>{form.bikeType}</span><span>${pricing.lineItems.base.toFixed(2)}</span></div>
              {form.addons.insurance && (
                <div className="flex items-center justify-between text-gray-700"><span>Insurance</span><span>${pricing.lineItems.addInsurance.toFixed(2)}</span></div>
              )}
              {form.addons.childSeat && (
                <div className="flex items-center justify-between text-gray-700"><span>Child seat</span><span>${pricing.lineItems.addChildSeat.toFixed(2)}</span></div>
              )}
              {form.addons.phoneMount && (
                <div className="flex items-center justify-between text-gray-700"><span>Phone mount</span><span>${pricing.lineItems.addPhoneMount.toFixed(2)}</span></div>
              )}
              {pricing.lineItems.discount > 0 && (
                <div className="flex items-center justify-between text-emerald-700"><span>Discount</span><span>- ${pricing.lineItems.discount.toFixed(2)}</span></div>
              )}
              <div className="mt-2 flex items-center justify-between border-t pt-2 font-semibold"><span>Total</span><span>${pricing.total.toFixed(2)}</span></div>
            </div>
            <a href="#bikes" className="mt-6 inline-block rounded-md border px-4 py-2 hover:bg-gray-50">
              Explore more bikes
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
