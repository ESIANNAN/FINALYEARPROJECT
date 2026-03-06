import { useState } from 'react'
import { T, playfair } from '../styles/theme'
import { useApp } from '../context/AppContext'
import StatusBar from '../components/StatusBar'
import BtnPrimary from '../components/BtnPrimary'

import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import { auth } from "../firebase"


export default function SignupScreen() {
  const { login, navigate } = useApp()

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })

 const handleSubmit = async () => {
  try {

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      form.email,
      form.password
    )

    const user = userCredential.user

    // verification email
    await sendEmailVerification(user)

    alert("Verification email sent. Please check your inbox.")

    navigate("login")

  } catch (error) {
    alert(error.message)
  }
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

      {/* Header */}
      {/*<div
        style={{
          background: T.black,
          padding: '40px 24px 60px',
          textAlign: 'center',
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32
        }}
      >
        <div
          style={{
            ...playfair,
            fontSize: 32,
            fontWeight: 900,
            color: 'white'
          }}
        >
          Sankofa
        </div>

        <div
          style={{
            fontSize: 13,
            color: 'rgba(255,255,255,0.6)',
            marginTop: 6
          }}
        >
          Begin your language journey
        </div>
      </div>
        */}

        
      {/* Form */}
      <div
        style={{
          flex: 1,
          padding: '200px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          maxWidth: 420,
          margin: '0 auto',
          width: '100%'
        }}
      >
        <h2 style={{ ...playfair, marginBottom: 6 }}>
          Create Account
        </h2>

        <input
          style={inputStyle}
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

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
          Create Account 
        </BtnPrimary>

        <div
          style={{
            textAlign: 'center',
            fontSize: 13,
            color: T.textMuted
          }}
        >
          Already have an account?{" "}
          <span
            onClick={() => navigate('login')}
            style={{
              color: T.gold,
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Log In
          </span>
        </div>
      </div>
    </div>
  )
}