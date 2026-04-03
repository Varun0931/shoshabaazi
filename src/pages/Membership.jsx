export default function Membership() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">

      <p className="font-label text-mag-gold text-xs mb-4">Pricing</p>
      <h1 className="font-heading text-5xl text-cream mb-2">Membership</h1>
      <div className="divider-dash" />
      <p className="font-editorial italic text-cream/50 mb-16 text-lg max-w-xl mt-6">
        One plan. No tiers. No gatekeeping. Just the community.
      </p>

      <div className="border-2 border-mag-red p-10 max-w-md">
        <p className="font-label text-mag-red text-xs mb-4">Member plan</p>
        <div className="flex items-end gap-4 mb-1">
        <p className="font-heading text-5xl text-cream/30 line-through decoration-mag-red decoration-2">
        ₹299
        </p>
        <p className="font-heading text-5xl text-mag-gold">
        ₹99<span className="text-2xl text-mag-gold/50">/mo</span>
        </p>
      </div>
        <p className="font-ui text-cream/40 text-sm mb-1">Billed annually · Cancel anytime</p>
          <p className="badge badge-red mb-8">🎉 Early Bird Offer</p>

        <div className="divider-dash" />

        <ul className="flex flex-col gap-4 font-editorial italic text-cream/70 my-8">
          {[
            "Access to all events in Delhi",
            "Personalized 1:1 introductions",
            "Weekly online reflection circles",
            "Private member WhatsApp group",
            "Priority spots at retreats",
          ].map(item => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-mag-gold font-ui not-italic mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <a href="/apply"
          className="block text-center bg-mag-red text-cream py-4 font-label text-xs hover:bg-mag-burnt transition">
          Apply to Join
        </a>
      </div>
    </main>
  )
}
