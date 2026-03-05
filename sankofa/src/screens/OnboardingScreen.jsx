import { useState } from 'react'
import { T, playfair, mono } from '../styles/theme'
import { LANGUAGES, GOALS } from '../data/lessons'
import { useApp } from '../context/AppContext'
import StatusBar from '../components/StatusBar'
import BtnPrimary from '../components/BtnPrimary'

const DAILY_OPTIONS = [
  { mins: 5,  label: 'Relaxed pace'        },
  { mins: 10, label: 'Steady progress'     },
  { mins: 15, label: 'Committed learner'   },
  { mins: 20, label: 'Dedicated student'   },
]

// ── Step 1: language picker ───────────────────────────────────────────────────
function StepLanguage({ lang, setLang }) {
  return (
    <div className="animate-slide-in-right" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 24px' }}>
      <div style={{ width: 160, height: 160, background: 'linear-gradient(135deg,#FEF0C7,#FDDDA0)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 72, marginBottom: 28, boxShadow: `0 8px 32px ${T.gold}40`, position: 'relative' }}>
        🗣️
        <div style={{ position: 'absolute', top: 8, right: -16, background: T.gold, color: T.black, fontSize: 11, fontWeight: 700, padding: '5px 10px', borderRadius: 99, ...mono }}>Twi</div>
        <div style={{ position: 'absolute', bottom: 12, left: -20, background: T.green, color: 'white', fontSize: 11, fontWeight: 700, padding: '5px 10px', borderRadius: 99, ...mono }}>Ga · Ewe</div>
      </div>
      <div style={{ ...playfair, fontSize: 26, fontWeight: 900, textAlign: 'center', marginBottom: 10 }}>Which language will you learn?</div>
      <div style={{ fontSize: 14, color: T.textMuted, textAlign: 'center', marginBottom: 24 }}>Start with one — you can always add more later.</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, width: '100%' }}>
        {LANGUAGES.map(l => (
          <div
            key={l.id}
            onClick={() => setLang(l.id)}
            style={{
              background: lang === l.id ? T.softGold : 'white',
              borderRadius: 16,
              border: `2px solid ${lang === l.id ? T.gold : T.border}`,
              padding: '14px 6px', textAlign: 'center',
              cursor: 'pointer', transition: 'all 0.2s',
              boxShadow: lang === l.id ? `0 0 0 3px ${T.gold}33` : 'none',
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 4 }}>{l.flag}</div>
            <div style={{ fontSize: 13, fontWeight: 700 }}>{l.name}</div>
            <div style={{ fontSize: 10, color: T.textMuted, marginTop: 2 }}>{l.region}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Step 2: goal picker ───────────────────────────────────────────────────────
function StepGoal({ goal, setGoal }) {
  return (
    <div className="animate-slide-in-right" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 24px' }}>
      <div style={{ width: 160, height: 160, background: 'linear-gradient(135deg,#d4f4e2,#a8e6c1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 72, marginBottom: 28, boxShadow: '0 8px 32px rgba(39,174,96,0.25)' }}>🎯</div>
      <div style={{ ...playfair, fontSize: 26, fontWeight: 900, textAlign: 'center', marginBottom: 10 }}>What's your learning goal?</div>
      <div style={{ fontSize: 14, color: T.textMuted, textAlign: 'center', marginBottom: 24 }}>This helps us personalise your journey.</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, width: '100%' }}>
        {GOALS.map(g => (
          <div
            key={g.id}
            onClick={() => setGoal(g.id)}
            style={{
              background: goal === g.id ? T.softGold : 'white',
              borderRadius: 14,
              border: `2px solid ${goal === g.id ? T.gold : T.border}`,
              padding: '16px 12px', cursor: 'pointer', transition: 'all 0.2s',
              display: 'flex', flexDirection: 'column', gap: 6,
            }}
          >
            <div style={{ fontSize: 24 }}>{g.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 700 }}>{g.label}</div>
            <div style={{ fontSize: 11, color: T.textMuted }}>{g.sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Step 3: daily goal ────────────────────────────────────────────────────────
function StepDaily({ daily, setDaily }) {
  return (
    <div className="animate-slide-in-right" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 24px' }}>
      <div style={{ width: 160, height: 160, background: 'linear-gradient(135deg,#fdecea,#f8c4c0)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 72, marginBottom: 28 }}>⏱️</div>
      <div style={{ ...playfair, fontSize: 26, fontWeight: 900, textAlign: 'center', marginBottom: 10 }}>Set your daily goal</div>
      <div style={{ fontSize: 14, color: T.textMuted, textAlign: 'center', marginBottom: 24 }}>Consistency beats intensity. Pick what's realistic.</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
        {DAILY_OPTIONS.map(opt => (
          <div
            key={opt.mins}
            onClick={() => setDaily(opt.mins)}
            style={{
              background: daily === opt.mins ? T.black : 'white',
              borderRadius: 14,
              border: `2px solid ${daily === opt.mins ? T.gold : T.border}`,
              padding: '16px 20px', cursor: 'pointer', transition: 'all 0.25s',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: daily === opt.mins ? 'white' : T.textMain }}>{opt.mins} mins / day</div>
              <div style={{ fontSize: 12, color: daily === opt.mins ? 'rgba(255,255,255,0.55)' : T.textMuted }}>{opt.label}</div>
            </div>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: daily === opt.mins ? T.gold : T.border, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>
              {daily === opt.mins ? '✓' : ''}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Step 4: confirmation ──────────────────────────────────────────────────────
function StepReady({ lang, goal, daily }) {
  const langObj = LANGUAGES.find(l => l.id === lang)
  const goalObj = GOALS.find(g => g.id === goal)
  const summary = [
    { icon: '🌿', label: `Learning ${langObj?.name || 'Twi'}` },
    { icon: '🎯', label: `Goal: ${goalObj?.label || 'Greetings'}` },
    { icon: '⏱️', label: `${daily} minutes per day` },
  ]
  return (
    <div className="animate-slide-in-right" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 24px', gap: 20 }}>
      <div className="animate-bounce-in" style={{ width: 160, height: 160, background: T.gold, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 72, boxShadow: `0 0 60px ${T.gold}66` }}>🦅</div>
      <div style={{ ...playfair, fontSize: 32, fontWeight: 900, textAlign: 'center' }}>You're all set!</div>
      <div style={{ fontSize: 15, color: T.textMuted, textAlign: 'center', lineHeight: 1.6 }}>
        Your personalised <strong style={{ color: T.textMain }}>{langObj?.name || 'Twi'}</strong> learning journey is ready.
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', marginTop: 8 }}>
        {summary.map((item, i) => (
          <div key={i} className="animate-slide-up" style={{ background: 'white', borderRadius: 12, border: `1.5px solid ${T.border}`, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, animationDelay: `${i * 0.1}s` }}>
            <span style={{ fontSize: 22 }}>{item.icon}</span>
            <span style={{ fontSize: 14, fontWeight: 600 }}>{item.label}</span>
            <span style={{ marginLeft: 'auto', color: T.green }}>✓</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Main onboarding shell ─────────────────────────────────────────────────────
export default function OnboardingScreen() {
  const { navigate } = useApp()
  const [step, setStep]   = useState(0)
  const [lang, setLang]   = useState('twi')
  const [goal, setGoal]   = useState('greetings')
  const [daily, setDaily] = useState(10)
  const TOTAL = 4

  const steps = [
    <StepLanguage key={0} lang={lang} setLang={setLang} />,
    <StepGoal     key={1} goal={goal} setGoal={setGoal} />,
    <StepDaily    key={2} daily={daily} setDaily={setDaily} />,
    <StepReady    key={3} lang={lang} goal={goal} daily={daily} />,
  ]

  return (
    <div style={{ background: T.cream, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <StatusBar />

      {/* Progress pips + skip */}
      <div style={{ padding: '16px 24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {Array.from({ length: TOTAL }).map((_, i) => (
            <div key={i} style={{ height: 4, borderRadius: 99, transition: 'all 0.3s', width: i <= step ? 24 : 12, background: i <= step ? T.gold : 'rgba(139,94,60,0.2)' }} />
          ))}
        </div>
        {step < TOTAL - 1 && (
          <div onClick={() => navigate('home')} style={{ fontSize: 13, color: T.textMuted, cursor: 'pointer', fontWeight: 500 }}>Skip</div>
        )}
      </div>

      {/* Active step */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: 24, overflow: 'hidden' }}>
        {steps[step]}
      </div>

      {/* Navigation footer */}
      <div style={{ padding: '20px 28px 40px', display: 'flex', gap: 12 }}>
        {step > 0 && (
          <button
            onClick={() => setStep(s => s - 1)}
            style={{ background: 'rgba(139,94,60,0.1)', border: 'none', borderRadius: 12, padding: '16px', fontSize: 16, fontWeight: 700, cursor: 'pointer', width: 56, color: T.textMuted }}
          >
            ←
          </button>
        )}
        <BtnPrimary onClick={() => step < TOTAL - 1 ? setStep(s => s + 1) : navigate('home')}>
          {step === TOTAL - 1 ? 'Start Learning 🦅' : 'Continue →'}
        </BtnPrimary>
      </div>
    </div>
  )
}
