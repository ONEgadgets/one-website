# ONE – Your Gadgets Hub (React + Tailwind + WhatsApp Orders)

Fast, simple catalog site for Pakistan with WhatsApp-based ordering and bundle deals.  
**Theme:** Black/White with Red accent ⚡  
**Number:** +92 333 2456741

---

## 🚀 Quick Launch (Vercel)

1) **Create GitHub Repo**
- Go to GitHub → New repository → `one-website`
- Click *Upload files* → Drag the contents of this folder (or upload the ZIP then *Extract* in your PC and upload files)
- Click *Commit*

2) **Deploy on Vercel**
- Go to https://vercel.com → Sign in with GitHub → *New Project*
- Import `one-website` → *Deploy*
- Wait ~2 minutes → Your site is live (e.g., `one.vercel.app`)

3) **(Optional) Add Domain**
- Buy `one.pk` or `one.com.pk`
- In Vercel → Project → *Settings* → *Domains* → Add domain
- Copy DNS records to your domain panel → wait 1–2 hours

---

## 🔧 Local Development (optional)
```bash
npm install
npm run dev
```
Open http://localhost:5173

---

## 🛒 Update Products / Bundles
Edit `src/data/products.js`:
- Change names, prices, and image URLs
- Your WhatsApp number is set in `WHATSAPP_E164` (currently 923332456741)

**WhatsApp message format** is auto-generated when the user clicks **Order on WhatsApp**.

---

## 🖼️ Branding
- Replace `src/assets/logo.jpg` with your logo (or update import paths)
- Colors are set in `tailwind.config.js` (`brand.red`)

---

## 📦 Tech
- Vite + React 18
- Tailwind CSS 3
- No backend required

---

## 📣 Tips to Sell in Pakistan
- Keep **COD** as default
- Use Instagram Reels with real demos
- Add delivery proofs & customer reviews
- Try bundle discounts (already included)