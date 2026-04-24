import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const quotes = [
  {
    text: '"I came for the chai. I stayed for the humans. Now I have a standing Sunday plan."',
    meta: 'Ananya, 26 — joined Chai & Charcha',
  },
  {
    text: '"Nobody talked about work once. It was honestly revolutionary."',
    meta: 'Rohan, 31 — Picnic Tamasha member',
  },
  {
    text: '"The midnight walk was better than every networking event I\'ve ever attended. Combined."',
    meta: 'Priya, 28 — Midnight Walk, Jan edition',
  },
]

const stats = [
  { n: '500', sup: '+', label: 'Season Target' },
  { n: '0',   sup: '₹', label: 'Entry to Join' },
  { n: '1',   sup: '%', label: 'Pretense Allowed' },
]

export default function CommunityStrip() {
  const { user } = useAuth()
  const firstName = user?.user_metadata?.full_name?.split(' ')[0] ?? user?.email

  return (
    <section className="community-strip" aria-label="Community voices">
      <div className="community-strip-inner">
        <div className="community-quotes">
          {quotes.map((q, i) => (
            <div className="quote-item" key={i}>
              <div className="quote-text">{q.text}</div>
              <div className="quote-meta">{q.meta}</div>
            </div>
          ))}
        </div>
        <div className="community-right">
          <div className="community-big" aria-hidden="true">WE<br />ARE<br />REAL</div>
          <div className="community-stat-row">
            {stats.map((s, i) => (
              <div className="c-stat" key={i}>
                <div className="n">{s.n}<em>{s.sup}</em></div>
                <div className="l">{s.label}</div>
              </div>
            ))}
          </div>
          {user ? (
            <a href="#events" className="join-link">Shoshabaaz {firstName}</a>
          ) : (
            <Link to="/register" className="join-link">Become a member</Link>
          )}
        </div>
      </div>
    </section>
  )
}