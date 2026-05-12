const events = [
  { 
    title: "A Day With Unknown Friends",      
    date: "Sat, 16 May 2026",  
    spots: "15 spots left", 
    tag: "Launch Event",  
    card: "event-card-cream",
    isComingSoon: false 
  },
  { 
    title: "Founders' Dinner — Hauz Khas", 
    date: "Coming Soon",  
    spots: "TBA",  
    tag: "Dinner",    
    card: "event-card-dark",
    isComingSoon: true  
  },
  { 
    title: "Career Pivot Circle",          
    date: "Coming Soon",  
    spots: "TBA",          
    tag: "Online",    
    card: "event-card-teal",
    isComingSoon: true  
  },
  { 
    title: "Book & Chai — Lodhi Art",      
    date: "Coming Soon",  
    spots: "TBA",  
    tag: "Culture",   
    card: "event-card-gold",
    isComingSoon: true  
  },
]

export default function Events() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">

      <p className="font-label text-mag-gold text-xs mb-4">Upcoming</p>
      <h1 className="font-heading text-5xl text-cream mb-2">Events</h1>
      <div className="divider-dash" />
      <p className="font-editorial italic text-cream/50 mb-14 text-lg mt-6">
        Small, intentional gatherings. Across Delhi, every week.
      </p>

      <div className="flex flex-col gap-2">
        {events.map((e) => (
          <div key={e.title}
            className={`${e.card} flex flex-col md:flex-row md:items-center justify-between p-6 gap-4`}>
            <div>
              <span className="font-label text-xs opacity-60">{e.tag}</span>
              <h3 className="font-heading text-2xl mt-1">{e.title}</h3>
              <p className="font-ui text-sm mt-1 opacity-50">{e.date}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="badge badge-dark opacity-70 font-ui">{e.spots}</span>
              {e.isComingSoon ? (
                <button 
                  disabled
                  className="px-5 py-2 bg-mag-red/40 text-cream/60 font-label text-xs cursor-not-allowed whitespace-nowrap">
                  Notify me
                </button>
              ) : (
                <a href="/apply"
                  className="px-5 py-2 bg-mag-red text-cream font-label text-xs hover:bg-mag-burnt transition whitespace-nowrap">
                  RSVP
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}