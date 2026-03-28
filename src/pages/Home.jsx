import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const perks = [
  { title: "Curated Events",       desc: "Dinners, chai walks, talks — 10+ events/month across Delhi." },
  { title: "1:1 Introductions",    desc: "We match you with people we think you'll genuinely click with." },
  { title: "Online Circles",       desc: "Weekly reflection sessions — because some things are easier said online first." },
]

const testimonials = [
  { name: "Arjun Mehta",    role: "Freelance designer",  quote: "Shoshabaazi gave me back my Delhi after years of working from home alone." },
  { name: "Priya Nair",     role: "Career changer",      quote: "Every conversation made me feel less lost. These people just get it." },
  { name: "Kabir Siddiqui", role: "Startup founder",     quote: "Found my two best collaborators at a Shoshabaazi dinner in Hauz Khas." },
]

export default function Home() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className="min-h-[92vh] flex flex-col justify-center items-center text-center px-6 bg-cream">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-body text-saffron uppercase tracking-[0.3em] text-sm mb-6">
          Delhi · Est. 2025
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl text-ink leading-tight max-w-3xl">
          Meet Delhi people <br />
          <em className="text-saffron">figuring it out together</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 font-body text-lg text-ink/60 max-w-xl leading-relaxed">
          A private community for people in their 20s–40s across Delhi — navigating
          careers, friendships, and everything in between.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex gap-4 flex-wrap justify-center">
          <Link to="/apply"
            className="px-8 py-4 bg-saffron text-white font-body rounded-full text-lg hover:bg-orange-600 transition">
            Apply to Join
          </Link>
          <Link to="/events"
            className="px-8 py-4 border border-ink/20 text-ink font-body rounded-full text-lg hover:border-saffron hover:text-saffron transition">
            See Events
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-6 text-sm text-ink/40 font-body">
          From ₹299/month · No gatekeeping · All of Delhi welcome
        </motion.p>
      </section>

      {/* ── Perks ── */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="font-heading text-4xl text-center mb-4">What you get</h2>
        <p className="text-center text-ink/50 font-body mb-16 max-w-xl mx-auto">
          Shoshabaazi is not a networking app. It's the group chat that actually shows up.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {perks.map(p => (
            <div key={p.title}
              className="border border-gold/40 rounded-2xl p-8 hover:border-saffron transition-colors">
              <h3 className="font-heading text-2xl mb-3 text-ink">{p.title}</h3>
              <p className="font-body text-ink/60 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-ink py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl text-cream text-center mb-16">
            Real people. Real Delhi.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.name} className="border border-white/10 rounded-2xl p-8">
                <p className="font-heading italic text-cream/80 text-lg leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <p className="font-body font-medium text-cream">{t.name}</p>
                <p className="font-body text-cream/40 text-sm">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 text-center">
        <h2 className="font-heading text-5xl text-ink mb-6">
          The right circle changes <em className="text-saffron">everything.</em>
        </h2>
        <Link to="/apply"
          className="inline-block mt-4 px-10 py-5 bg-saffron text-white font-body text-xl rounded-full hover:bg-orange-600 transition">
          Apply Now
        </Link>
      </section>

    </main>
  )
}