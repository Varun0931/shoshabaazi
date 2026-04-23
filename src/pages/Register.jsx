import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useState } from 'react'

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [apiError, setApiError] = useState('')
  const [success,  setSuccess]  = useState(false)
  const navigate = useNavigate()

  const onSubmit = async ({ firstName, lastName, email, phone, password }) => {
    setApiError('')
    const { data, error } = await supabase.auth.signUp({
      email, password,
      options: { data: { full_name: `${firstName} ${lastName}`, phone } }
    })
    if (error) { setApiError(error.message); return }

    await supabase.from('members').insert({
      email, full_name: `${firstName} ${lastName}`, phone
    })
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

      {/* Form */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', padding:'60px 20px' }}>
        <div style={{ background:'var(--cream)', padding:'52px 48px', maxWidth:'480px', width:'100%', border:'1px solid rgba(43,24,16,0.12)' }}>
          <h1 style={{ fontFamily:'Playfair Display,serif', fontSize:'2.4rem', fontWeight:900, marginBottom:8 }}>
            Join the <em style={{ color:'var(--red)' }}>Adda.</em>
          </h1>
          <p style={{ marginBottom:32, color:'#6b5344' }}>500 seats. Real people. Zero pretense.</p>

          {success ? (
            <div style={{ background:'#e8f5e9', padding:16, color:'#1a5c2a' }}>
              ✓ Check your email to confirm your account!
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              {apiError && <div style={{ background:'#fde8e8', padding:12, marginBottom:16, color:'var(--red)' }}>{apiError}</div>}

              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:16 }}>
                <div>
                  <label className="form-label">First Name</label>
                  <input className="form-input" {...register('firstName', { required: true })} placeholder="Arjun" />
                </div>
                <div>
                  <label className="form-label">Last Name</label>
                  <input className="form-input" {...register('lastName')} placeholder="Mehta" />
                </div>
              </div>
              <div style={{ marginBottom:16 }}>
                <label className="form-label">Email</label>
                <input className="form-input" type="email" {...register('email', { required: true })} placeholder="you@gmail.com" />
              </div>
              <div style={{ marginBottom:16 }}>
                <label className="form-label">WhatsApp Number</label>
                <input className="form-input" type="tel" {...register('phone')} placeholder="+91 98765 43210" />
              </div>
              <div style={{ marginBottom:24 }}>
                <label className="form-label">Password</label>
                <input className="form-input" type="password" {...register('password', { required: true, minLength: 8 })} placeholder="Min 8 characters" />
              </div>
              <button type="submit" className="nav-cta" style={{ width:'100%', padding:'15px', textAlign:'center', cursor:'pointer', border:'none', fontSize:'0.75rem' }}>
                I Want In
              </button>
              <p style={{ textAlign:'center', marginTop:20, color:'#8a6a58' }}>
                Already a member? <Link to="/login" style={{ color:'var(--red)' }}>Log in</Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}