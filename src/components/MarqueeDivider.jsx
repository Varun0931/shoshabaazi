export default function MarqueeDivider() {
  const items = [
    { text: 'BAKCHODI IS SACRED', cls: 'accent' },
    { text: '✦',                  cls: '' },
    { text: 'COME AS YOU ARE',    cls: '' },
    { text: '✦',                  cls: 'gold' },
    { text: 'REAL CONNECTIONS',   cls: 'accent' },
    { text: '✦',                  cls: '' },
    { text: 'NO JUDGEMENT ZONE',  cls: '' },
    { text: '✦',                  cls: 'gold' },
    { text: 'HUMAN OVER HUSTLE',  cls: 'accent' },
    { text: '✦',                  cls: '' },
    { text: 'COMMUNITY FIRST',    cls: '' },
    { text: '✦',                  cls: 'gold' },
  ]

  return (
    <div className="marquee-divider" aria-hidden="true">
      <div className="marquee-inner">
        {/* Duplicated for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <span key={i} className={item.cls || undefined}>{item.text}</span>
        ))}
      </div>
    </div>
  )
}