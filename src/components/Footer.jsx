export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70 py-12 px-6 mt-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h3 className="font-heading text-2xl text-cream mb-2">Shoshabaazi</h3>
          <p className="text-sm max-w-xs leading-relaxed">
            Delhi's community for people figuring it out — together.
          </p>
        </div>
        <div className="flex gap-12 text-sm">
          <div className="flex flex-col gap-2">
            <span className="text-cream font-body font-medium mb-1">Pages</span>
            {["Events","Membership","About","Apply"].map(p => (
              <a key={p} href={`/${p.toLowerCase()}`}
                className="hover:text-saffron transition-colors">{p}</a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-cream font-body font-medium mb-1">Connect</span>
            <a href="mailto:hello@shoshabaazi.in" className="hover:text-saffron transition-colors">
              Email us
            </a>
            <a href="https://instagram.com" className="hover:text-saffron transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-cream/30 mt-10">
        © 2025 Shoshabaazi. Made in Delhi.
      </p>
    </footer>
  )
}