export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 to-slate-900" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What customers say</h2>
          <p className="mt-2 text-white/70">Real words from real homes</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[{
            quote: 'The throw is incredible without being overpowering. Our living room smells like a boutique hotel.',
            name: 'Avery T.'
          },{
            quote: 'Finally a candle that doesn\'t give me headaches. Burns beautifully and looks stunning.',
            name: 'Maria R.'
          },{
            quote: 'The Golden Hour scent is our new ritual for slow Sundays. Subtle, warm, and addictive.',
            name: 'James K.'
          }].map((t) => (
            <figure key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
              <blockquote className="text-sm">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-white/60 text-sm">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
