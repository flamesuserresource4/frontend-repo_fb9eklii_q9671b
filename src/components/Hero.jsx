import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(800px_circle_at_10%_10%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(600px_circle_at_90%_20%,rgba(14,165,233,0.25),transparent_60%)] pointer-events-none" />

      <div className="relative grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-6 pt-24 lg:pt-32 pb-16">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live demo — BluePay
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            The modern payments platform for ambitious teams
          </h1>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed">
            Accept payments, issue payouts, and manage subscriptions with a beautiful, developer-first API. Built for speed, security, and global scale.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#dashboard" className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors px-5 py-3 font-medium">
              Launch sandbox
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors px-5 py-3 font-medium">
              Explore features
            </a>
          </div>
          <div className="mt-6 text-xs text-slate-400">
            PCI-DSS ready • 99.99% uptime • Global coverage
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
