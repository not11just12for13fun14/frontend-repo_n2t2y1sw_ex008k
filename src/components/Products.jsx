import { motion } from "framer-motion";

const products = [
  {
    name: "Golden Hour",
    scent: "Bergamot • Vanilla • Amber",
    price: 28,
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Forest Whisper",
    scent: "Cedar • Moss • Clove",
    price: 28,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Midnight Fig",
    scent: "Black Fig • Sandalwood • Tonka",
    price: 30,
    image: "https://images.unsplash.com/photo-1760881597883-9dc2ab705b71?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaWRuaWdodCUyMEZpZ3xlbnwwfDB8fHwxNzYzNzYyOTY3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Signature Collection</h2>
            <p className="mt-2 text-white/70">Thoughtfully crafted blends inspired by places and memories.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-amber-300 hover:text-amber-200">View all</a>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{p.name}</h3>
                    <p className="text-white/70 text-sm">{p.scent}</p>
                  </div>
                  <span className="text-amber-300 font-semibold">${p.price}</span>
                </div>
                <button className="mt-4 w-full inline-flex justify-center rounded-xl bg-white/10 border border-white/15 px-4 py-2 text-white hover:bg-white/15 transition">Add to cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
