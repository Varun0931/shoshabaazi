import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero-inner">

        {/* Left: copy */}
        <div className="hero-left">
          <div className="hero-overline">A Community for Real Ones</div>
          <h1 className="hero-h1">
            Life's Too<br />
            <em>Short</em> For<br />
            <span className="line-accent">Boring</span>
            Weekends.
          </h1>
          <div className="hero-hindi">बोरियत को बोलो अलविदा</div>
          <div className="hero-rule"></div>
          <p className="hero-body">
            Shoshabaazi is your weekly excuse to stop scrolling and start living - chai meetups,
            midnight walks, rooftop addas, and strangers who don't stay strangers for long.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="btn-primary">Find My People</Link>
            <a href="#events" className="btn-ghost">See upcoming events</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">500<span>+</span></div>
              <div className="label">Spots This Season</div>
            </div>
            <div className="hero-stat">
              <div className="num">12<span>+</span></div>
              <div className="label">Events per Month</div>
            </div>
            <div className="hero-stat">
              <div className="num">1<span> City</span></div>
              <div className="label">Delhi NCR · For Now</div>
            </div>
          </div>
        </div>

        {/* Right: magazine frame mockup */}
        <div className="hero-right">
          <div style={{ position: 'relative' }}>
            <div className="hero-badge">
              Season<span>01</span>
            </div>
            <div className="mag-frame">
              <div className="frame-grain"></div>
              <div className="frame-border-outer"></div>
              <div className="frame-border-inner"></div>
              <div className="frame-corner tl"></div>
              <div className="frame-corner tr"></div>
              <div className="frame-corner bl"></div>
              <div className="frame-corner br"></div>
              <div className="frame-stamp">
                <span>Delhi<br />NCR<br />2026</span>
              </div>
              <div className="frame-top">
                <div className="frame-title">Shosha<br />baazi</div>
                <div className="frame-hindi">शोशाबाज़ी</div>
              </div>
              <div className="frame-tape">
                <span>Life Beyond Home &amp; Office</span>
              </div>
              <div className="frame-content">
                <div className="frame-headline">
                  Where Every <em>Stranger</em> Becomes Your Weekend Squad
                </div>
                <div className="frame-sub">
                  Curated chaos, genuine connections, zero agenda and maximum bakchodi.
                </div>
              </div>
              <div className="frame-dashed"></div>
              <div className="frame-tags">
                <div className="frame-tag">Events</div>
                <div className="frame-tag">Community</div>
                <div className="frame-tag">Bakchodi</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}