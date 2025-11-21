import { Menu, ShoppingBag, Leaf } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mt-6 backdrop-blur-md bg-white/5 border border-white/10 shadow-lg rounded-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-300 via-rose-200 to-amber-500 ring-1 ring-white/30 shadow-lg" />
              <span className="text-white font-semibold tracking-wide text-lg">Lumière Candles</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a href="#products" className="hover:text-white">Collection</a>
              <a href="#craft" className="hover:text-white">Our Craft</a>
              <a href="#about" className="hover:text-white">Story</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="hidden md:inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition">
                <ShoppingBag size={16} /> Shop
              </button>
              <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/15 bg-white/5 text-white/90">
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
