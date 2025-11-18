function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">© {new Date().getFullYear()} BluePay — All rights reserved.</div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#dashboard" className="hover:text-white transition-colors">Sandbox</a>
          <a href="/test" className="hover:text-white transition-colors">System check</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
