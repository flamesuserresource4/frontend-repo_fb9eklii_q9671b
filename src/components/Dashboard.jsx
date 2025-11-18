import { useEffect, useState } from 'react'

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-xs text-slate-400">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-white">{value}</div>
    </div>
  )
}

function Dashboard() {
  const [payments, setPayments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fetchPayments = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${baseUrl}/api/payments`)
      if (!res.ok) throw new Error('Failed to load payments')
      const data = await res.json()
      setPayments(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPayments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const createTestPayment = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${baseUrl}/api/payments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 1299, currency: 'USD', description: 'Test charge' })
      })
      if (!res.ok) throw new Error('Create payment failed')
      await fetchPayments()
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="dashboard" className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Sandbox dashboard</h2>
          <button onClick={createTestPayment} className="rounded-lg bg-blue-600 hover:bg-blue-500 px-4 py-2 text-sm font-medium">
            + Create test payment
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Stat label="Total payments" value={payments.length} />
          <Stat label="Captured" value={payments.filter(p => p.status === 'captured').length} />
          <Stat label="Authorized" value={payments.filter(p => p.status === 'authorized').length} />
          <Stat label="Failed" value={payments.filter(p => p.status === 'failed').length} />
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-6 gap-3 bg-white/5 px-4 py-3 text-xs text-slate-300">
            <div>ID</div>
            <div>Amount</div>
            <div>Currency</div>
            <div>Status</div>
            <div>Description</div>
            <div>Action</div>
          </div>
          <div className="divide-y divide-white/10">
            {loading && <div className="p-4 text-sm text-slate-300">Loading...</div>}
            {error && <div className="p-4 text-sm text-rose-400">{error}</div>}
            {!loading && payments.map(p => (
              <div key={p.id} className="grid grid-cols-6 gap-3 px-4 py-3 text-sm text-slate-200">
                <div className="truncate" title={p.id}>{p.id}</div>
                <div>${'{'}(p.amount/100).toFixed(2){'}'}</div>
                <div>{p.currency}</div>
                <div>
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${p.status === 'captured' ? 'bg-emerald-500/20 text-emerald-300' : p.status === 'authorized' ? 'bg-amber-500/20 text-amber-300' : 'bg-rose-500/20 text-rose-300'}`}>
                    {p.status}
                  </span>
                </div>
                <div className="truncate" title={p.description}>{p.description || '-'}</div>
                <div>
                  {p.status === 'authorized' ? (
                    <button
                      onClick={async () => {
                        try {
                          const res = await fetch(`${baseUrl}/api/payments/${p.id}/capture`, { method: 'POST' })
                          if (!res.ok) throw new Error('Capture failed')
                          await fetchPayments()
                        } catch (e) {
                          setError(e.message)
                        }
                      }}
                      className="rounded-md bg-emerald-600 hover:bg-emerald-500 px-3 py-1 text-xs"
                    >
                      Capture
                    </button>
                  ) : (
                    <span className="text-slate-400 text-xs">—</span>
                  )}
                </div>
              </div>
            ))}
            {!loading && payments.length === 0 && (
              <div className="p-6 text-sm text-slate-400">No payments yet. Create a test payment to get started.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
