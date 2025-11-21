export default function Footer() {
  return (
    <footer className="relative py-12">
      <div className="absolute inset-0 -z-10 bg-slate-950" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Lumière Candles. All rights reserved.</p>
          <div className="flex items-center gap-6 text-white/70 text-sm">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
