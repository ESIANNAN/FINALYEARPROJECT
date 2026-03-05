import { T, playfair, mono } from '../styles/theme'
import { useApp } from '../context/AppContext'
import KentePattern from '../components/KentePattern'
import BottomNav from '../components/BottomNav'
import BtnPrimary from '../components/BtnPrimary'
import SectionLabel from '../components/SectionLabel'
import StatusBar from '../components/StatusBar'

const MODES = [
  { icon: '⚡', title: 'Quick Fire',  sub: '5 fast questions',     color: '#F4A823', bg: '#FEF0C7' },
  { icon: '🎧', title: 'Listening',   sub: 'Hear & translate',     color: '#7B68EE', bg: '#ede8ff' },
  { icon: '✍️', title: 'Writing',     sub: 'Spell it out',         color: '#27AE60', bg: '#d4f4e2' },
  { icon: '💬', title: 'Speaking',    sub: 'Pronunciation drill',  color: '#C0392B', bg: '#fdecea' },
]

export default function PracticeScreen() {
  const { handleNav, startLesson } = useApp()

  return (
    <div style={{ background: T.cream, minHeight: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>

      {/* Header */}
      <div style={{ background: T.black, padding: '16px 20px 24px', position: 'relative', overflow: 'hidden' }}>
        <KentePattern />
        <StatusBar light />
        <div style={{ ...playfair, fontSize: 24, fontWeight: 900, color: 'white', position: 'relative', zIndex: 1 }}>Practice</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', position: 'relative', zIndex: 1, marginTop: 4 }}>Sharpen your Twi skills</div>
      </div>
      <div style={{ height: 20, background: T.cream, borderRadius: '20px 20px 0 0', marginTop: -4 }} />

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '8px 20px 100px' }}>

        <SectionLabel>Practice Modes</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
          {MODES.map(m => (
            <div
              key={m.title}
              onClick={() => startLesson('greetings')}
              style={{ background: 'white', borderRadius: 16, border: `1.5px solid ${T.border}`, padding: 20, cursor: 'pointer', transition: 'all 0.2s' }}
            >
              <div style={{ width: 52, height: 52, background: m.bg, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, marginBottom: 12 }}>{m.icon}</div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>{m.title}</div>
              <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>{m.sub}</div>
            </div>
          ))}
        </div>

        <SectionLabel>Review Mistakes</SectionLabel>
        <div
          onClick={() => startLesson('greetings')}
          style={{ background: T.black, borderRadius: 20, padding: 20, display: 'flex', alignItems: 'center', gap: 16, position: 'relative', overflow: 'hidden', cursor: 'pointer', marginBottom: 20 }}
        >
          <KentePattern opacity={0.05} />
          <div style={{ width: 52, height: 52, background: `${T.red}22`, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, position: 'relative', zIndex: 1 }}>📝</div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'white' }}>Review 3 Mistakes</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Words that need practice</div>
          </div>
          <div style={{ marginLeft: 'auto', background: T.gold, color: T.black, fontSize: 12, fontWeight: 700, padding: '8px 14px', borderRadius: 10, position: 'relative', zIndex: 1 }}>Review</div>
        </div>

        <SectionLabel>Today's Drill</SectionLabel>
        <div style={{ background: 'white', borderRadius: 20, border: `1.5px solid ${T.border}`, padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>Daily Vocabulary</div>
            <div style={{ background: T.softGold, color: T.earth, fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 99, ...mono }}>10 words</div>
          </div>
          <div style={{ height: 6, background: 'rgba(139,94,60,0.1)', borderRadius: 99, overflow: 'hidden', marginBottom: 10 }}>
            <div style={{ height: '100%', width: '30%', background: `linear-gradient(90deg,${T.gold},#F4C842)`, borderRadius: 99 }} />
          </div>
          <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 16 }}>3 of 10 completed</div>
          <BtnPrimary onClick={() => startLesson('greetings')}>Continue Drill →</BtnPrimary>
        </div>
      </div>

      <BottomNav active="practice" onNav={handleNav} />
    </div>
  )
}
