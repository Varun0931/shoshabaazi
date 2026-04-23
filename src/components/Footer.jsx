const palette = [
  { bg: '#D62828', title: 'Sindoor Red' },
  { bg: '#E8A838', title: 'Marigold' },
  { bg: '#F5ECD7', title: 'Chai Cream' },
  { bg: '#1A6B5A', title: 'Autorickshaw Green' },
  { bg: '#E83F6F', title: 'Gulaal Pink' },
  { bg: '#C44B28', title: 'Burnt Masala' },
]

const eventsLinks  = ['Upcoming', 'Chai & Charcha', 'Midnight Walks', 'Rooftop Adda', "Strangers' Brunch"]
const communityLinks = ['Join Us', 'Our Values', 'Member Stories', 'The Manifesto']
const connectLinks   = ['Instagram', 'WhatsApp Group', 'Newsletter', 'Contact']

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <span className="wordmark">Shoshabaazi</span>
          <span className="hindi">शोशाबाज़ी</span>
          <p className="tagline">A breather from monotonous life. Real people, real fun, no pretense.</p>
          <div className="palette-row" title="Brand colour palette" aria-hidden="true">
            {palette.map(p => (
              <div className="pdot" key={p.title} style={{ background: p.bg }} title={p.title}></div>
            ))}
          </div>
        </div>

        {/* Events */}
        <div className="footer-col">
          <div className="col-head">Events</div>
          <ul>
            {eventsLinks.map(l => <li key={l}><a href="#">{l}</a></li>)}
          </ul>
        </div>

        {/* Community */}
        <div className="footer-col">
          <div className="col-head">Community</div>
          <ul>
            {communityLinks.map(l => <li key={l}><a href="#">{l}</a></li>)}
          </ul>
        </div>

        {/* Connect */}
        <div className="footer-col">
          <div className="col-head">Connect</div>
          <ul>
            {connectLinks.map(l => <li key={l}><a href="#">{l}</a></li>)}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">© 2026 Shoshabaazi · Delhi NCR · Come As You Are</div>
        <div className="footer-social">
          <a href="#">Instagram</a>
          <a href="#">WhatsApp</a>
          <a href="#">Newsletter</a>
        </div>
      </div>
    </footer>
  )
}