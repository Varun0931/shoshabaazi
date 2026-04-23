import { Link } from 'react-router-dom'

export default function JoinSection() {
  return (
    <section className="join-section" id="join" aria-label="Join Shoshabaazi">
      <div className="join-bg-word" aria-hidden="true">JOIN</div>
      <div className="join-inner">
        <div className="join-stamp-wrap">
          <div className="join-stamp">
            <span>Delhi<br />NCR<br />2026</span>
          </div>
        </div>
        <div className="join-title">500 Seats.<br />Real People.<br />Your City.</div>
        <p className="join-sub">
          We're building Delhi NCR's most fun community — people who refuse to let their social
          life become a calendar they never open. First events dropping soon. You should be there.
        </p>
        <Link to="/register" className="join-btn">I Want In</Link>
        <p className="join-note">No forms. No fees. Just your name and why you need a life.</p>
      </div>
    </section>
  )
}