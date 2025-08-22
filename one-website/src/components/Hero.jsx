export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-900 to-black" />
      <div className="container grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2">
        <div>
          <span className="inline-block rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-300">NEW COLLECTION</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Power Your Lifestyle with <span className="text-brand-red">ONE</span></h1>
          <p className="mt-4 max-w-xl text-zinc-300">Minimal, durable mobile accessories built for everyday performance. Cash on Delivery all across Pakistan.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#shop" className="btn btn-primary">Shop Now</a>
            <a href="https://wa.me/923332456741" target="_blank" className="btn btn-outline">Chat on WhatsApp</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-xs text-zinc-400">
            <div>🚚 Nationwide Delivery</div>
            <div>🛡️ 12‑Month Warranty</div>
            <div>🔁 7‑Day Returns</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-brand-red/20 blur-2xl" />
          <img src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop" className="relative z-10 w-full rounded-3xl shadow-glow" alt="Hero product" />
        </div>
      </div>
    </section>
  )
}