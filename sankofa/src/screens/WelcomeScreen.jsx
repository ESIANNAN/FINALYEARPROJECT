import { T, playfair } from '../styles/theme'
import { useApp } from '../context/AppContext'

export default function WelcomeScreen() {
  const { navigate } = useApp()

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '60px 28px',
        background: 'FDF6E3'
      }}
    >

      {/* Top space */}
      <div />

      {/* Text section */}
      <div style={{ maxWidth: 320 }}>

        <div
          style={{
            fontSize: 42,
            fontWeight: 600,
            marginBottom: 10,
            ...playfair
          }}
        >
          Akwaaba
        </div>

        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            marginBottom: 6
          }}
        >
          Welcome to Sankofa
        </div>

        <div
          style={{
            fontSize: 14,
            color: '#555',
            lineHeight: 1.5
          }}
        >
          Rediscover Ghanaian languages and culture
          through learning
        </div>

      </div>

      {/* Bottom section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12
        }}
      >

        <button
          onClick={() => navigate('signup')}
          style={{
            width: '100%',
            maxWidth: 320,
            padding: '16px',
            borderRadius: 40,
            border: 'none',
            background: 'white',
            fontSize: 16,
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          Begin your journey
        </button>

        <div
          style={{
            fontSize: 13,
            color: '#444'
          }}
        >
          Already have an account?{' '}
          <span
            onClick={() => navigate('login')}
            style={{
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Login
          </span>
        </div>

      </div>

    </div>
  )
}