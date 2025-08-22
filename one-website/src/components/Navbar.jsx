import logoUrl from '../assets/logo.jpg?url';
import logoSvg from '../assets/logo.svg?url';

export default function Navbar(){
  const logo = logoUrl || logoSvg;
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/70 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="ONE logo" className="h-9 w-auto rounded-lg" />
          <div>
            <div className="text-xl font-extrabold tracking-tight">ONE</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Your Gadgets Hub</div>
          </div>
        </a>
        <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
          <a href="#shop" className="hover:text-white">Products</a>
          <a href="#bundles" className="hover:text-white">Bundles</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="https://wa.me/923332456741" target="_blank" className="btn btn-outline">WhatsApp</a>
      </div>
    </header>
  )
}