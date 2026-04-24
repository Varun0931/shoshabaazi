import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function AuthConfirm() {
  const navigate = useNavigate()
  const [status, setStatus] = useState('verifying') // 'verifying' | 'success' | 'error'
  const [message, setMessage] = useState('')

  useEffect(() => {
    const confirm = async () => {
      const params = new URLSearchParams(window.location.search)
      const token_hash = params.get('token_hash')
      const type = params.get('type')

      if (!token_hash || !type) {
        setStatus('error')
        setMessage('Invalid or missing verification link.')
        return
      }

      const { error } = await supabase.auth.verifyOtp({ token_hash, type })
      if (error) {
        setStatus('error')
        setMessage(error.message)
        return
      }

      setStatus('success')
      setTimeout(() => navigate('/'), 2500)
    }

    confirm()
  }, [navigate])

  return (
    <div style={{ background: 'var(--offwhite)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
      <div style={{ background: 'var(--cream)', padding: '52px 48px', maxWidth: '480px', width: '100%', border: '1px solid rgba(43,24,16,0.12)', textAlign: 'center' }}>
        {status === 'verifying' && (
          <>
            <div style={{ fontSize: '2rem', marginBottom: 16 }}>⏳</div>
            <h2 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.8rem', fontWeight: 900, marginBottom: 8 }}>
              Verifying your email…
            </h2>
            <p style={{ color: '#6b5344' }}>Just a moment.</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>✓</div>
            <h2 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.8rem', fontWeight: 900, marginBottom: 8 }}>
              You're <em style={{ color: 'var(--red)' }}>in.</em>
            </h2>
            <p style={{ color: '#6b5344' }}>Email confirmed! Taking you home…</p>
          </>
        )}

        {status === 'error' && (
          <>
            <div style={{ fontSize: '2rem', marginBottom: 16 }}>✕</div>
            <h2 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.8rem', fontWeight: 900, marginBottom: 8 }}>
              Verification <em style={{ color: 'var(--red)' }}>failed.</em>
            </h2>
            <p style={{ color: '#6b5344', marginBottom: 24 }}>{message}</p>
            <a href="/register" className="nav-cta" style={{ padding: '12px 28px', textDecoration: 'none' }}>
              Try registering again
            </a>
          </>
        )}
      </div>
    </div>
  )
}
