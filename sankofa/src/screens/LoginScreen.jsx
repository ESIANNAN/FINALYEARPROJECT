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

  return (
    <div style={{ background: T.cream, minHeight: '100vh', padding: 28 }}>

      <StatusBar />

      <h1 style={{ ...playfair }}>Log In</h1>

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <BtnPrimary onClick={handleSubmit}>
        Sign In
      </BtnPrimary>

      <p>
        Don't have an account?{" "}
        <span onClick={() => navigate('signup')}>
          Sign Up
        </span>
      </p>

    </div>
  )
}