export default function Rating({ value = 0 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className="flex items-center gap-1 text-sm" aria-label={`Rating ${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`h-4 w-4 ${i < full || (half && i === full) ? 'fill-current text-yellow-400' : 'text-zinc-600'}`} viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.402 8.168L12 18.896l-7.336 3.868 1.402-8.168L.132 9.21l8.2-1.192z"/>
        </svg>
      ))}
      <span className="ml-1 text-zinc-400">{value.toFixed(1)}</span>
    </div>
  )
}