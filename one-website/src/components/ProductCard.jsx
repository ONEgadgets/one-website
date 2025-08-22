import Rating from './Rating.jsx'

const currency = (n) => new Intl.NumberFormat('en-PK', { style:'currency', currency:'PKR', maximumFractionDigits:0 }).format(n)
const waLink = (name, price, qty=1) => {
  const msg = `Hi! I want to order:\n- ${name} (${currency(price)})\nQuantity: ${qty}\nFrom ONE website.`
  return `https://wa.me/923332456741?text=${encodeURIComponent(msg)}`
}

export default function ProductCard({ p }){
  return (
    <div className="card overflow-hidden">
      <div className="relative aspect-[4/5]">
        <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
        {p.tag && <span className="absolute left-3 top-3 rounded-full bg-white/10 px-3 py-1 text-xs">{p.tag}</span>}
      </div>
      <div className="space-y-2 p-4">
        <div className="text-lg font-semibold">{p.name}</div>
        <div className="text-sm text-zinc-400">{p.features?.join(' • ')}</div>
        <div className="flex items-center justify-between pt-1">
          <div className="text-xl font-bold">{currency(p.price)}</div>
          <Rating value={p.rating || 4.2} />
        </div>
        <div className="flex gap-2 pt-2">
          <a href={waLink(p.name, p.price, 1)} target="_blank" className="btn btn-primary w-full text-center">Order on WhatsApp</a>
        </div>
      </div>
    </div>
  )
}