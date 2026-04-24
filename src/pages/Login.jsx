import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useState } from 'react'

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [apiError, setApiError] = useState('')
  const navigate = useNavigate()

  const onSubmit = async ({ email, password }) => {
    setApiError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) { setApiError(error.message); return }
    navigate('/')
  }

  return (
    <div style={{ background: 'var(--offwhite)', minHeight: '100vh' }}>
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" className="nav-brand">
            <span className="wordmark">Shoshabaazi</span>
            <span className="hindi">शोशाबाज़ी</span>
          </Link>
          <div className="nav-right">
            <Link to="/register" className="nav-cta">New here? Join</Link>
          </div>
        </div>
      </nav>

      {/* Form */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 20px' }}>
        <div style={{ background: 'var(--cream)', padding: '52px 48px', maxWidth: '480px', width: '100%', border: '1px solid rgba(43,24,16,0.12)' }}>
          <h1 style={{ fontFamily: 'Playfair Display,serif', fontSize: '2.4rem', fontWeight: 900, marginBottom: 8 }}>
            Welcome <em style={{ color: 'var(--red)' }}>Back.</em>
          </h1>
          <p style={{ marginBottom: 32, color: '#6b5344' }}>Log in to your Shoshabaazi account.</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {apiError && (
              <div style={{ background: '#fde8e8', padding: 12, marginBottom: 16, color: 'var(--red)' }}>
                {apiError}
              </div>
            )}

            <div style={{ marginBottom: 16 }}>
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                {...register('email', { required: true })}
                placeholder="you@gmail.com"
              />
              {errors.email && <span style={{ color: 'var(--red)', fontSize: '0.8rem' }}>Email is required</span>}
            </div>

            <div style={{ marginBottom: 24 }}>
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                {...register('password', { required: true })}
                placeholder="Your password"
              />
              {errors.password && <span style={{ color: 'var(--red)', fontSize: '0.8rem' }}>Password is required</span>}
            </div>

            <button
              type="submit"
              className="nav-cta"
              style={{ width: '100%', padding: '15px', textAlign: 'center', cursor: 'pointer', border: 'none', fontSize: '0.75rem' }}
            >
              Log In
            </button>

            <p style={{ textAlign: 'center', marginTop: 20, color: '#8a6a58' }}>
              Not a member yet? <Link to="/register" style={{ color: 'var(--red)' }}>Join the adda</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}