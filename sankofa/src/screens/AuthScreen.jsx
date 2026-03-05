import { useState } from 'react'
import { T, playfair } from '../styles/theme'
import { useApp } from '../context/AppContext'
import StatusBar from '../components/StatusBar'
import BtnPrimary from '../components/BtnPrimary'

function InputField({ label, value, onChange, type = 'text', placeholder, focusKey, focusState, setFocus }) {
  const isFocused = focusState === focusKey
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: T.textMuted, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        {label}
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocus(focusKey)}
        onBlur={() => setFocus(null)}
        placeholder={placeholder}
        style={{
          background: 'white',
          border: `1.5px solid ${isFocused ? T.gold : T.border}`,
          borderRadius: 12,
          padding: '14px 16px',
          fontSize: 15,
          outline: 'none',
          boxShadow: isFocused ? `0 0 0 3px ${T.gold}26` : 'none',
          transition: 'all 0.2s',
        }}
      />
    </div>
  )
}

export default function AuthScreen() {
  const { login } = useApp()
  const [tab, setTab]       = useState('signup')
  const [focus, setFocus]   = useState(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm]     = useState({ name: '', email: '', password: '' })

  const handleSubmit = () => {
    if (!form.email) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      login(form.name)
    }, 1200)
  }

  const field = (key) => ({
    value: form[key],
    onChange: (e) => setForm({ ...form, [key]: e.target.value }),
    focusKey: key,
    focusState: focus,
    setFocus,
  })

  return (
    <div className="animate-fade-in" style={{ background: T.cream, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>

      {/* Dark header */}
      <div style={{ background: T.black, paddingBottom: 48, position: 'relative', overflow: 'hidden' }}>
        {/* Stripe pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `repeating-linear-gradient(90deg, ${T.gold}1a 0, ${T.gold}1a 2px, transparent 2px, transparent 24px)`,
          backgroundSize: '24px 100%',
        }} />
        <StatusBar light />
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 24px 0', gap: 8 }}>
          <div className="animate-float" style={{ width: 64, height: 64, background: T.gold, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, boxShadow: `0 0 24px ${T.gold}66`, marginBottom: 4 }}>
            🦅
          </div>
          <div style={{ ...playfair, fontSize: 28, fontWeight: 900, color: 'white' }}>Sankofa</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>Your journey to Ghanaian languages begins</div>
        </div>
        {/* Wave cutout */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 32, background: T.cream, borderRadius: '32px 32px 0 0' }} />
      </div>

      {/* Form body */}
      <div style={{ flex: 1, padding: '28px 28px 32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* Sign Up / Log In tabs */}
        <div style={{ display: 'flex', gap: 4, background: 'rgba(139,94,60,0.08)', borderRadius: 12, padding: 4 }}>
          {[{ id: 'signup', label: 'Sign Up' }, { id: 'login', label: 'Log In' }].map(t => (
            <div
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                flex: 1, padding: '10px', textAlign: 'center', borderRadius: 10,
                fontSize: 14, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
                background: tab === t.id ? T.black : 'transparent',
                color: tab === t.id ? T.gold : T.textMuted,
                boxShadow: tab === t.id ? '0 2px 8px rgba(0,0,0,0.15)' : 'none',
              }}
            >
              {t.label}
            </div>
          ))}
        </div>

        {tab === 'signup' && (
          <div className="animate-slide-in-right">
            <InputField label="Full Name" placeholder="Kwame Asante" {...field('name')} />
          </div>
        )}

        <InputField label="Email" type="email" placeholder="kwame@example.com" {...field('email')} />
        <InputField label="Password" type="password" placeholder="••••••••" {...field('password')} />

        <BtnPrimary onClick={handleSubmit} style={{ marginTop: 4 }}>
          {loading ? '✦ Loading...' : tab === 'signup' ? 'Create Account ✦' : 'Sign In ✦'}
        </BtnPrimary>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ flex: 1, height: 1, background: T.border }} />
          <span style={{ fontSize: 12, color: T.textLight }}>or continue with</span>
          <div style={{ flex: 1, height: 1, background: T.border }} />
        </div>

        {/* Google button */}
        <div
          onClick={handleSubmit}
          style={{ background: 'white', border: `1.5px solid ${T.border}`, borderRadius: 12, padding: 14, fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, cursor: 'pointer' }}
        >
          <div style={{ width: 20, height: 20, borderRadius: 4, background: '#4285F4', color: 'white', fontWeight: 700, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>G</div>
          Continue with Google
        </div>

        <div style={{ textAlign: 'center', fontSize: 12, color: T.textMuted }}>
          By continuing, you agree to our{' '}
          <span style={{ color: T.gold, fontWeight: 600 }}>Terms</span> &{' '}
          <span style={{ color: T.gold, fontWeight: 600 }}>Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}
