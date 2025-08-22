import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProductCard from './components/ProductCard.jsx'
import { products, bundles, categories, BRAND } from './data/products.js'
import { useMemo, useState } from 'react'

const currency = (n) => new Intl.NumberFormat('en-PK', { style:'currency', currency:'PKR', maximumFractionDigits:0 }).format(n)

function SectionTitle({ id, title, subtitle }){
  return (
    <div id={id} className="container mb-6 mt-10 flex items-end justify-between">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        {subtitle && <p className="text-sm text-zinc-400">{subtitle}</p>}
      </div>
    </div>
  )
}

function Catalog(){
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')
  const [sort, setSort] = useState('featured')

  const list = useMemo(() => {
    let arr = products.filter(p => (cat === 'All' || p.category === cat) && (q.trim()==='' || p.name.toLowerCase().includes(q.toLowerCase())))
    if (sort==='priceAsc') arr.sort((a,b)=>a.price-b.price)
    if (sort==='priceDesc') arr.sort((a,b)=>b.price-a.price)
    if (sort==='rating') arr.sort((a,b)=> (b.rating||0) - (a.rating||0))
    return arr
  }, [q,cat,sort])

  return (
    <section id="shop" className="py-10">
      <div className="container mb-5 grid gap-3 md:grid-cols-3">
        <div className="md:col-span-1">
          <label className="block text-xs text-zinc-400 mb-1">Search</label>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search products" className="w-full rounded-2xl border border-zinc-800 bg-black px-3 py-2 outline-none focus:border-white" />
        </div>
        <div className="grid grid-cols-2 gap-3 md:col-span-2 md:grid-cols-3">
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Category</label>
            <select value={cat} onChange={e=>setCat(e.target.value)} className="w-full rounded-2xl border border-zinc-800 bg-black px-3 py-2">
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Sort</label>
            <select value={sort} onChange={e=>setSort(e.target.value)} className="w-full rounded-2xl border border-zinc-800 bg-black px-3 py-2">
              <option value="featured">Featured</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(p => <ProductCard key={p.id} p={p} />)}
      </div>
    </section>
  )
}

function Bundles(){
  const wa = (bundle) => {
    const msg = `Hi! I want to order BUNDLE:\n- ${bundle.name} (${currency(bundle.price)})\nIncludes: ${bundle.items.join(', ')}\nFrom ONE website.`
    return `https://wa.me/923332456741?text=${encodeURIComponent(msg)}`
  }
  return (
    <section id="bundles" className="py-10">
      <SectionTitle title="Bundle Deals" subtitle="Save more with curated combos" />
      <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bundles.map(b => (
          <div key={b.id} className="card overflow-hidden">
            <div className="aspect-[4/3]">
              <img src={b.image} alt={b.name} className="h-full w-full object-cover" />
            </div>
            <div className="space-y-2 p-4">
              <div className="text-lg font-semibold">{b.name}</div>
              <div className="text-sm text-zinc-400">Includes: {b.items.join(' • ')}</div>
              <div className="text-xl font-bold">{currency(b.price)} <span className="ml-2 text-xs text-brand-red">{b.save}</span></div>
              <a href={wa(b)} target="_blank" className="btn btn-primary w-full text-center">Order Bundle</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function About(){
  return (
    <section id="about" className="py-12">
      <SectionTitle title={`About ${BRAND.name}`} subtitle={BRAND.tagline} />
      <div className="container">
        <div className="card p-6 sm:p-10">
          <p className="text-zinc-300 leading-relaxed">
            {BRAND.name} is a Pakistan-grown brand making minimal, durable mobile accessories designed for everyday life. We focus on reliable performance, clean design, and fair pricing — backed by COD, fast delivery, and an easy 7‑day return policy.
          </p>
        </div>
      </div>
    </section>
  )
}

function Contact(){
  return (
    <section id="contact" className="py-12">
      <SectionTitle title="Contact & Support" />
      <div className="container grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="card p-6">
          <div className="text-sm text-zinc-400">WhatsApp</div>
          <a className="mt-2 text-lg font-semibold hover:underline" href="https://wa.me/923332456741" target="_blank">+92 333 2456741</a>
        </div>
        <div className="card p-6">
          <div className="text-sm text-zinc-400">Instagram</div>
          <a className="mt-2 text-lg font-semibold hover:underline" href="https://instagram.com/one.pk" target="_blank">@one.pk</a>
        </div>
        <div className="card p-6">
          <div className="text-sm text-zinc-400">Email</div>
          <a className="mt-2 text-lg font-semibold hover:underline" href="mailto:hello@one.pk">hello@one.pk</a>
        </div>
      </div>
    </section>
  )
}

function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-zinc-800 py-10">
      <div className="container text-center text-sm text-zinc-400 space-y-2">
        <div>© {year} ONE – Your Gadgets Hub</div>
        <div className="text-zinc-500">Coming Soon: <span className="text-white">www.one.pk</span></div>
      </div>
    </footer>
  )
}

export default function App(){
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Catalog />
      <Bundles />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}