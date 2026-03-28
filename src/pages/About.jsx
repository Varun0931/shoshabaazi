export default function About() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="font-heading text-5xl text-ink mb-8">About Shoshabaazi</h1>
      <div className="font-body text-ink/70 text-lg leading-relaxed flex flex-col gap-6">
        <p>
          Shoshabaazi started because Delhi is enormous and somehow still lonely.
          The city has 20 million people and yet finding your people — the ones
          who get it, who show up, who make you feel less like a floating atom — is oddly hard.
        </p>
        <p>
          We believe the right dinner table changes careers. The right walk changes a decision.
          The right circle changes everything.
        </p>
        <p>
          Shoshabaazi is a private community. You apply, we review,
          and if it's a fit — welcome home.
        </p>
        <p>
          We host 10+ events a month across Delhi — from early morning chai walks in
          Lodi Garden to late-night founder dinners in Hauz Khas. Every gathering is
          small, intentional, and worth showing up for.
        </p>
        <a href="/apply"
          className="inline-block mt-4 px-8 py-4 bg-saffron text-white rounded-full text-base self-start hover:bg-orange-600 transition">
          Apply to join
        </a>
      </div>
    </main>
  )
}