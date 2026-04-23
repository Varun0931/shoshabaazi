export default function TickerStrip() {
  const items = [
    'Delhi NCR', 'Community First', 'Bakchodi is Sacred',
    'No Judgement Zone', 'Real Connections', 'Come As You Are',
    'Human Over Hustle', 'Season 01 · 2026',
  ]
 
  return (
    <div className="ticker-strip" aria-hidden="true">
      <div className="ticker-inner">
        {/* Duplicated for seamless infinite loop */}
        {[...items, ...items].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}