import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("Thanks — we\u2019ll be in touch within 24 hours.");
      e.currentTarget.reset();
    } catch (e) {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 to-slate-950" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let\u2019s make your space unforgettable</h2>
            <p className="mt-3 text-white/70">Questions about wholesale, custom labels, or shipping? Send us a note.</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
              <p><span className="text-white">Email:</span> hello@lumierecandles.co</p>
              <p className="mt-1"><span className="text-white">Hours:</span> Mon–Fri 10am–5pm EST</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70">Name</label>
                <input name="name" required className="mt-1 w-full rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-300/40" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm text-white/70">Email</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-300/40" placeholder="jane@studio.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/70">Message</label>
                <textarea name="message" rows="4" required className="mt-1 w-full rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-300/40" placeholder="Tell us about your space..." />
              </div>
            </div>
            <button className="mt-6 inline-flex items-center rounded-xl bg-amber-300 text-slate-900 font-semibold px-6 py-3 shadow-[0_6px_30px_rgba(251,191,36,0.35)] hover:shadow-[0_6px_30px_rgba(251,191,36,0.55)] transition">Send</button>
            {status && <p className="mt-3 text-sm text-white/80">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
