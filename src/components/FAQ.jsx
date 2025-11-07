import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What do I need to rent a bike?",
    a: "A valid ID and a debit/credit card. Helmets are provided free of charge.",
  },
  {
    q: "Can I keep the bike overnight?",
    a: "Yes, overnight rentals are available. Additional fees may apply for late returns.",
  },
  {
    q: "What if the bike gets a flat tire?",
    a: "We offer on-demand roadside assistance within city limits. Call our support and we'll meet you on route.",
  },
  {
    q: "Do you have e-bikes?",
    a: "Yes, a limited number of e-bikes are available. Reserve early to secure one.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently asked questions</h2>
      <div className="mt-6 divide-y rounded-xl border bg-white shadow-sm">
        {faqs.map((item, idx) => (
          <details
            key={idx}
            open={open === idx}
            onToggle={(e) => e.target.open && setOpen(idx)}
            className="group p-6"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-medium">{item.q}</span>
              <ChevronDown className="transition group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
