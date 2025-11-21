export default function Craft() {
  return (
    <section id="craft" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 to-slate-950" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our craft is slow, deliberate, and clean</h2>
            <p className="mt-4 text-white/70">We pour in micro-batches for consistency and cure for two weeks to develop depth and throw. Always cotton wicks. Always traceable ingredients.</p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {[{
              title: 'Premium soy wax',
              body: 'Sustainably sourced 100% soy for a clean burn and creamy finish.'
            },{
              title:'Perfumer-grade oils',
              body:'Complex accords built from IFRA-compliant, phthalate-free oils.'
            },{
              title:'Balanced wicks',
              body:'We test each blend across wick sizes for an even melt pool.'
            },{
              title:'Long burn',
              body:'Up to 45+ hours with proper care and trimming.'
            }].map((f)=> (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
                <h3 className="font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
