const events = [
  { title: "Chai Walk — Lodi Garden",    date: "Sat, 12 Jul · 7am",  spots: "12 spots left",  tag: "Outdoors" },
  { title: "Founders' Dinner — Hauz Khas", date: "Fri, 18 Jul · 8pm", spots: "6 spots left",  tag: "Dinner" },
  { title: "Career Pivot Circle",         date: "Sun, 20 Jul · 6pm",  spots: "Open",           tag: "Online" },
  { title: "Book & Chai — Lodhi Art",    date: "Sat, 26 Jul · 5pm",  spots: "18 spots left",  tag: "Culture" },
]

export default function Events() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-heading text-5xl text-ink mb-4">Upcoming events</h1>
      <p className="font-body text-ink/50 mb-14 text-lg">
        Small, intentional gatherings. Across Delhi, every week.
      </p>
      <div className="flex flex-col gap-6">
        {events.map(e => (
          <div key={e.title}
            className="flex flex-col md:flex-row md:items-center justify-between
                       border border-gold/40 rounded-2xl p-6 hover:border-saffron transition-colors gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-saffron font-body">{e.tag}</span>
              <h3 className="font-heading text-2xl text-ink mt-1">{e.title}</h3>
              <p className="font-body text-ink/50 text-sm mt-1">{e.date}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-body text-ink/40">{e.spots}</span>
              <a href="/apply"
                className="px-5 py-2 bg-saffron text-white text-sm rounded-full font-body hover:bg-orange-600 transition whitespace-nowrap">
                RSVP
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}