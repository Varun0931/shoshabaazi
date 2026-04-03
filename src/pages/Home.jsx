import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const perks = [
  { title: "Curated Events",    desc: "Dinners, chai walks, talks — 10+ events/month across Delhi." },
  { title: "1:1 Introductions", desc: "We match you with people we think you'll genuinely click with." },
  { title: "Online Circles",    desc: "Weekly reflection sessions — because some things are easier said online first." },
]

const testimonials = [
  { name: "Arjun Mehta",    role: "Freelance designer", quote: "Shoshabaazi gave me back my Delhi after years of working from home alone." },
  { name: "Priya Nair",     role: "Career changer",     quote: "Every conversation made me feel less lost. These people just get it." },
  { name: "Kabir Siddiqui", role: "Startup founder",    quote: "Found my two best collaborators at a Shoshabaazi dinner in Hauz Khas." },
]

export default function Home() {
  return (
    <main>

      {/* ── Hero ── vintage cream magazine cover */}
      <section className="grain mag-frame min-h-[92vh] flex flex-col justify-center items-center text-center px-6 bg-cream">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-label text-mag-burnt text-xs mb-6">
          Delhi · Est. 2025
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl text-ink leading-tight max-w-3xl">
          Meet Delhi people <br />
          <em className="text-mag-red">figuring it out together</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 font-editorial italic text-lg text-ink/60 max-w-xl leading-relaxed">
          A private community for people in their 20s–40s across Delhi — navigating
          careers, friendships, and everything in between.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex gap-4 flex-wrap justify-center">
          <Link to="/apply"
            className="px-8 py-4 bg-mag-red text-cream font-ui rounded-full text-lg hover:bg-mag-burnt transition">
            Apply to Join
          </Link>
          <Link to="/events"
            className="px-8 py-4 border border-ink/30 text-ink font-ui rounded-full text-lg hover:border-mag-red hover:text-mag-red transition">
            See Events
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-6 font-label text-xs text-ink/40">
          From ₹299/month · No gatekeeping · All of Delhi welcome
        </motion.p>
      </section>

      {/* ── Perks ── dark magazine section */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="font-heading text-4xl text-cream text-center mb-2">What you get</h2>
        <div className="divider-dash max-w-xs mx-auto" />
        <p className="text-center text-cream/50 font-editorial italic mb-16 max-w-xl mx-auto">
          Shoshabaazi is not a networking app. It's the group chat that actually shows up.
        </p>
        <div className="grid md:grid-cols-3 gap-2">
          {perks.map((p, i) => (
            <div key={p.title}
              className={`p-8 hover:border-mag-red transition-colors
                ${i === 0 ? 'event-card-red' :
                  i === 1 ? 'event-card-teal' :
                            'event-card-gold'}`}>
              <p className="font-label text-xs opacity-60 mb-3">0{i + 1}</p>
              <h3 className="font-heading text-2xl mb-3">{p.title}</h3>
              <p className="font-editorial italic opacity-70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── charcoal section */}
      <section className="bg-mag-charcoal grain py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-label text-mag-gold text-xs text-center mb-3">Real People · Real Delhi</p>
          <h2 className="font-heading text-4xl text-cream text-center mb-16">
            The right circle changes <em className="text-mag-red">everything.</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-2">
            {testimonials.map(t => (
              <div key={t.name} className="border border-cream/10 p-8">
                <p className="font-editorial italic text-cream/80 text-lg leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="divider-dash" />
                <p className="font-ui font-medium text-cream mt-4">{t.name}</p>
                <p className="font-label text-cream/40 text-xs mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 text-center">
        <p className="font-label text-mag-gold text-xs mb-4">Join the community</p>
        <h2 className="font-heading text-5xl text-cream mb-6">
          Your people are <em className="text-mag-red">already here.</em>
        </h2>
        <Link to="/apply"
          className="inline-block mt-4 px-10 py-5 bg-mag-red text-cream font-ui text-xl hover:bg-mag-burnt transition">
          Apply Now
        </Link>
      </section>

    </main>
  )
}
