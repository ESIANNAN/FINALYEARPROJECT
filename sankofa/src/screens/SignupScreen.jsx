import { useState } from 'react'
import { T, playfair } from '../styles/theme'
import { useApp } from '../context/AppContext'
import StatusBar from '../components/StatusBar'
import BtnPrimary from '../components/BtnPrimary'

export default function SignupScreen() {
  const { login, navigate } = useApp()

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = () => {
    login(form.name)
  }

  return (
    <div style={{ background: T.cream, minHeight: '100vh', padding: 28 }}>

      <StatusBar />

      <h1 style={{ ...playfair }}>Create Account</h1>

      <input
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

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
        Create Account
      </BtnPrimary>

      <p>
        Already have an account?{" "}
        <span onClick={() => navigate('login')}>
          Log In
        </span>
      </p>

    </div>
  )
}