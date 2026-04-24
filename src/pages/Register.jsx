import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useState } from 'react'

export default function Register() {
  const { register, handleSubmit } = useForm()
  const [apiError, setApiError] = useState('')
  const [success,  setSuccess]  = useState(false)
  const [loading,  setLoading]  = useState(false)

  const onSubmit = async ({ firstName, lastName, email, phone, password }) => {
    setApiError('')
    setLoading(true)

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: `${firstName} ${lastName}`, phone },
        emailRedirectTo: `${window.location.origin}/auth/confirm`,
      }
    })

    if (error) {
      setApiError(error.message)
      setLoading(false)
      return
    }

    // Supabase returns identities:[] when email is already registered
    if (!data.user || data.user.identities?.length === 0) {
      setApiError('This email is already registered. Try logging in instead.')
      setLoading(false)
      return
    }

    // Insert into members table
    const { error: insertError } = await supabase.from('members').insert({
      email,
      full_name: `${firstName} ${lastName}`,
      phone,
    })

    if (insertError) {
      // Unique constraint violation on phone (requires UNIQUE constraint on members.phone)
      if (insertError.code === '23505') {
        setApiError('This WhatsApp number is already registered. Try logging in instead.')
      } else {
        console.warn('Member insert error:', insertError.message)
      }
      setLoading(false)
      return
    }

    setLoading(false)
    setSuccess(true)
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
            <Link to="/login" className="nav-cta">Already a Member?</Link>
          </div>
        </div>
      </nav>

      {/* Form Card */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px'
      }}>
        <div style={{
          background: 'var(--cream)',
          padding: '52px 48px',
          maxWidth: '480px',
          width: '100%',
          border: '1px solid rgba(43,24,16,0.12)'
        }}>

          {/* Heading */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.4rem',
            fontWeight: 900,
            marginBottom: 8,
            color: 'var(--deep)'
          }}>
            Join the <em style={{ color: 'var(--red)' }}>Adda.</em>
          </h1>
          <p style={{ marginBottom: 32, color: '#6b5344', fontFamily: "'Crimson Pro', serif", fontSize: '1.05rem' }}>
            500 seats. Real people. Zero pretense.
          </p>

          {/* Success State */}
          {success ? (
            <div style={{
              background: '#e8f5e9',
              padding: '20px 16px',
              color: '#1a5c2a',
              border: '1px solid #c3e6cb',
              fontFamily: "'Oswald', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              ✓ Check your email to confirm your account!
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>

              {/* API Error Banner */}
              {apiError && (
                <div style={{
                  background: '#fde8e8',
                  padding: '12px 16px',
                  marginBottom: 16,
                  color: 'var(--red)',
                  border: '1px solid #f5c6cb',
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: '0.95rem'
                }}>
                  {apiError}
                </div>
              )}

              {/* First + Last Name */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label className="form-label">First Name *</label>
                  <input
                    className="form-input"
                    placeholder="Arjun"
                    {...register('firstName', { required: 'First name is required' })}
                  />
                </div>
                <div>
                  <label className="form-label">Last Name</label>
                  <input
                    className="form-input"
                    placeholder="Mehta"
                    {...register('lastName')}
                  />
                </div>
              </div>

              {/* Email */}
              <div style={{ marginBottom: 16 }}>
                <label className="form-label">Email *</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="you@gmail.com"
                  {...register('email', { required: 'Email is required' })}
                />
              </div>

              {/* Phone */}
              <div style={{ marginBottom: 16 }}>
                <label className="form-label">WhatsApp Number</label>
                <input
                  className="form-input"
                  type="tel"
                  placeholder="+91 98765 43210"
                  {...register('phone')}
                />
              </div>

              {/* Password */}
              <div style={{ marginBottom: 28 }}>
                <label className="form-label">Password *</label>
                <input
                  className="form-input"
                  type="password"
                  placeholder="Min 8 characters"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 8, message: 'Password must be at least 8 characters' }
                  })}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '15px',
                  textAlign: 'center',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  border: 'none',
                  fontSize: '0.75rem',
                  background: loading ? '#999' : 'var(--red)',
                  color: 'var(--cream)',
                  fontFamily: "'Oswald', sans-serif",
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  transition: 'background 0.2s'
                }}
              >
                {loading ? 'Joining...' : 'I Want In'}
              </button>

              {/* Login Link */}
              <p style={{ textAlign: 'center', marginTop: 20, color: '#8a6a58', fontFamily: "'Crimson Pro', serif" }}>
                Already a member?{' '}
                <Link to="/login" style={{ color: 'var(--red)', fontWeight: 600 }}>Log in</Link>
              </p>

            </form>
          )}
        </div>
      </div>
    </div>
  )
}