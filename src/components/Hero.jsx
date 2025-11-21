import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.15),transparent_70%)] blur-2xl" />
        <div className="absolute -bottom-20 -right-24 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.12),transparent_70%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 pt-36 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl font-bold tracking-tight text-white"
            >
              Hand-poured candles that turn moments into feelings
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-white/80 max-w-xl"
            >
              Small-batch soy candles crafted with premium oils, lead-free wicks, and an obsession for detail. Clean. Long-burning. Irresistible.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-10 flex items-center gap-4"
            >
              <a href="#products" className="inline-flex items-center rounded-xl bg-amber-300 text-slate-900 font-semibold px-6 py-3 shadow-[0_6px_30px_rgba(251,191,36,0.35)] hover:shadow-[0_6px_30px_rgba(251,191,36,0.55)] transition">Shop Collection</a>
              <a href="#craft" className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white hover:bg-white/10 transition">Our Craft</a>
            </motion.div>
            <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
              <div className="flex -space-x-2">
                <img className="h-8 w-8 rounded-full ring-2 ring-slate-900" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=80&auto=format&fit=crop" />
                <img className="h-8 w-8 rounded-full ring-2 ring-slate-900" src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=80&auto=format&fit=crop" />
                <img className="h-8 w-8 rounded-full ring-2 ring-slate-900" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=80&auto=format&fit=crop" />
              </div>
              <span>Trusted by 2,000+ delighted noses</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[28px] overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" className="h-full w-full object-cover" alt="Candle hero" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/10 border border-white/15 rounded-2xl backdrop-blur p-4 shadow-xl">
                <p className="text-white/90 font-medium">100% Soy Wax</p>
                <p className="text-white/70 text-sm">Phthalate-free, cruelty-free</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-white/10 border border-white/15 rounded-2xl backdrop-blur p-4 shadow-xl">
                <p className="text-white/90 font-medium">45+ hr burn</p>
                <p className="text-white/70 text-sm">Clean, even melt pool</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
