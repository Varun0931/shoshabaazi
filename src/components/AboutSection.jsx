const values = [
  { num: '01', name: 'Community First' },
  { num: '02', name: 'No Judgement Zone' },
  { num: '03', name: 'Bakchodi is Sacred' },
  { num: '04', name: 'Human Over Hustle' },
  { num: '05', name: 'Real Connections' },
  { num: '06', name: 'Come As You Are' },
]

export default function AboutSection() {
  return (
    <section className="about-section" id="about" aria-label="About Shoshabaazi">
      <div className="about-bg-text" aria-hidden="true">TAMASHA</div>
      <div className="section-inner">
        <div className="section-head">
          <div className="section-num">01</div>
          <div className="section-label">
            <div className="overline">About Us</div>
            <h2>What is Shoshabaazi?</h2>
          </div>
        </div>
        <div className="about-grid">
          <div>
            <div className="about-headline">
              Real<br />
              <span className="hl-red">People.</span><br />
              Real<br />
              <span className="hl-gold">Fun.</span><br />
              No<br />Pretense.
            </div>
            <div className="about-deco-line"></div>
          </div>
          <div>
            <div className="about-body">
              <p>Shoshabaazi is not a networking event. It's not a corporate team outing. It's not curated content or a hustle seminar with fancy canapés.</p>
              <p>It's a bunch of people in Delhi NCR who think weekends should feel like <em>something</em> — a chai that goes cold because the conversation got too good, a walk that ends somewhere nobody planned to go, a table of strangers who leave with inside jokes.</p>
              <p>Think of us as your city's most fun WhatsApp group, except we actually meet in person. No awkward intros, no forced icebreakers. Just real people, real vibes.</p>
            </div>
            <div className="about-values">
              {values.map(v => (
                <div className="value-item" key={v.num}>
                  <div className="value-num">{v.num} ——</div>
                  <div className="value-name">{v.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}