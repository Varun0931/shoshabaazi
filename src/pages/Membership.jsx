export default function Membership() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-heading text-5xl text-ink mb-4">Membership</h1>
      <p className="font-body text-ink/50 mb-16 text-lg max-w-xl">
        One plan. No tiers. No gatekeeping. Just the community.
      </p>
      <div className="border-2 border-saffron rounded-3xl p-10 max-w-md">
        <p className="font-body text-saffron uppercase tracking-widest text-sm mb-2">Member plan</p>
        <p className="font-heading text-5xl text-ink mb-1">₹299<span className="text-2xl text-ink/40">/mo</span></p>
        <p className="font-body text-ink/40 text-sm mb-8">Billed annually · Cancel anytime</p>
        <ul className="flex flex-col gap-3 font-body text-ink/70 mb-10">
          {[
            "Access to all events in Delhi",
            "Personalized 1:1 introductions",
            "Weekly online reflection circles",
            "Private member WhatsApp group",
            "Priority spots at retreats",
          ].map(item => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-saffron mt-1">✓</span> {item}
            </li>
          ))}
        </ul>
        <a href="/apply"
          className="block text-center bg-saffron text-white py-4 rounded-full font-body text-lg hover:bg-orange-600 transition">
          Apply to Join
        </a>
      </div>
    </main>
  )
}