import { useState } from 'react'
import { T, playfair } from '../styles/theme'
import { useApp } from '../context/AppContext'
import StatusBar from '../components/StatusBar'
import BtnPrimary from '../components/BtnPrimary'

export default function LoginScreen() {
  const { login, navigate } = useApp()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = () => {
    login('User')
  }

  const inputStyle = {
    background: 'white',
    border: `1.5px solid ${T.border}`,
    borderRadius: 12,
    padding: '14px 16px',
    fontSize: 15,
    outline: 'none',
    width: '100%',
    transition: 'all 0.2s'
  }

  return (
    <div
      style={{
        background: T.cream,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <StatusBar />

      {/* Form */}
      <div
        style={{
          flex: 1,
          padding: '110px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          maxWidth: 420,
          margin: '120px auto 0',
          width: '100%'
        }}
      >
        <h2 style={{ ...playfair, marginBottom: 6 }}>
          Log In
        </h2>

        <input
          style={inputStyle}
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <BtnPrimary onClick={handleSubmit}>
          Sign In
        </BtnPrimary>

        <div
          style={{
            textAlign: 'center',
            fontSize: 13,
            color: T.textMuted
          }}
        >
          Don't have an account?{" "}
          <span
            onClick={() => navigate('signup')}
            style={{
              color: T.gold,
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  )
}