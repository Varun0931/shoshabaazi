const events = [
  {
    num: '01', colorClass: 'ec-red',
    tag: 'This Sunday',
    title: 'Chai & Charcha',
    desc: 'Books, banter, and cutting chai at a secret South Delhi spot. Pretentiousness not allowed.',
    date: 'Sunday, 27 Apr',
    seats: '12 seats left',
  },
  {
    num: '02', colorClass: 'ec-cream',
    tag: 'Monthly Ritual',
    title: 'Picnic Tamasha',
    desc: 'Lodhi Garden. Blankets. Board games. Zero agenda. Maximum bakchodi.',
    date: 'Saturday, 3 May',
    seats: '28 seats left',
  },
  {
    num: '03', colorClass: 'ec-dark',
    tag: 'Flagship Event',
    title: 'The Midnight Walk — CP Edition',
    desc: 'Strangers become friends between Janpath and Connaught. The city is different at 1 AM.',
    date: 'Friday, 2 May',
    seats: '6 seats left',
  },
  {
    num: '04', colorClass: 'ec-teal',
    tag: 'New Format',
    title: 'Rooftop Adda',
    desc: 'Music, maggi, and midnight conversations. The kind your hostel friends would approve of.',
    date: 'Saturday, 10 May',
    seats: '18 seats left',
  },
  {
    num: '05', colorClass: 'ec-gold',
    tag: 'Weekend Special',
    title: "Strangers' Brunch",
    desc: '10 strangers. 1 long table. By dessert, you have exchanged numbers and made weekend plans.',
    date: 'Sunday, 11 May',
    seats: '4 seats left',
  },
  {
    num: '06', colorClass: 'ec-paper',
    tag: 'Coming Soon',
    title: 'Open Mic Meets Bakchodi Night',
    desc: 'Stories, rants, confessions. The mic is open, the judgement is not. Come with something to say.',
    date: 'Late May · TBA',
    seats: 'Notify me',
  },
]

export default function EventsSection() {
  return (
    <section className="events-section" id="events" aria-label="Upcoming events">
      <div className="section-inner" style={{ paddingBottom: '24px' }}>
        <div className="section-head">
          <div className="section-num">02</div>
          <div className="section-label">
            <div className="overline">Upcoming</div>
            <h2>This Week's Tamasha</h2>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div className="events-grid">
          {events.map(e => (
            <div className={`event-card ${e.colorClass}`} key={e.num}>
              <div className="ecard-num">{e.num}</div>
              <div className="ecard-tag">{e.tag}</div>
              <h3>{e.title}</h3>
              <p>{e.desc}</p>
              <div className="ecard-meta">
                <span className="ecard-date">{e.date}</span>
                <span className="ecard-seats">{e.seats}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="events-footer">
        <span className="events-count">Showing 6 of 14 events this season</span>
        <a href="#" className="events-view-all">View all events</a>
      </div>
    </section>
  )
}