import { Shield, Globe, Zap, CreditCard } from 'lucide-react'

function Feature({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 px-6 py-6 hover:bg-white/10 transition-colors">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-blue-500/20 p-2.5 text-blue-300">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-white font-medium">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-slate-300 leading-relaxed">{description}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="relative bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Feature icon={Shield} title="Bank-grade security" description="Tokenization, 3DS, and advanced fraud controls protect every transaction." />
          <Feature icon={Globe} title="Global by default" description="Accept 135+ currencies and popular wallets with local payment methods." />
          <Feature icon={Zap} title="Lightning fast" description="Low-latency API with idempotency, webhooks, and client libraries." />
          <Feature icon={CreditCard} title="All-in-one" description="Payments, payouts, invoicing, and subscriptions in a single unified platform." />
        </div>
      </div>
    </section>
  )
}

export default Features
