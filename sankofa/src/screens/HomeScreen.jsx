import { T, playfair, mono } from '../styles/theme'
import { useApp } from '../context/AppContext'
import { LESSON_PATH } from '../data/lessons'
import KentePattern from '../components/KentePattern'
import BottomNav from '../components/BottomNav'
import SectionLabel from '../components/SectionLabel'

function StatPill({ icon, label, gold }) {
  return (
    <div style={{ background: gold ? `rgba(244,168,35,0.2)` : 'rgba(255,255,255,0.1)', borderRadius: 99, padding: '7px 14px', display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'white' }}>
      <span>{icon}</span>{label}
    </div>
  )
}

function DailyCard({ onStart }) {
  return (
    <div
      onClick={onStart}
      style={{ background: `linear-gradient(135deg,${T.black},#2c1a0e)`, borderRadius: 20, padding: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
    >
      <div style={{ position: 'absolute', right: -20, top: -20, width: 120, height: 120, borderRadius: '50%', background: `${T.gold}1a` }} />
      <div>
        <div style={{ ...playfair, fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 4 }}>Daily Lesson</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 14 }}>Greetings · Lesson 3 of 8</div>
        <div style={{ background: T.gold, color: T.black, borderRadius: 10, padding: '10px 18px', fontSize: 13, fontWeight: 700, display: 'inline-block' }}>Start Now ✦</div>
      </div>
      <div style={{ fontSize: 56, position: 'relative', zIndex: 1 }}>🇬🇭</div>
    </div>
  )
}

function WordOfDay() {
  return (
    <div style={{ background: 'white', borderRadius: 20, border: `1.5px solid ${T.border}`, padding: 16, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 14, boxShadow: '0 2px 8px rgba(26,18,8,0.05)' }}>
      <div style={{ width: 52, height: 52, background: T.softGold, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>📜</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Word of the Day</div>
        <div style={{ ...playfair, fontSize: 20, fontWeight: 900, color: T.gold }}>Sankofa</div>
       <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>"Go back and fetch it" — Akan proverb</div>
      </div>
      <div style={{ fontSize: 22, cursor: 'pointer' }}>🔊</div>
    </div>
  )
}

function ProgressCards({ stats }) {
  const cards = [
    { icon: '',label: 'Day Streak'   },
    { icon: '',label: 'Lessons Done' },
    { icon: '', label: 'Badges'       },
  ]
  return (
    <div style={{ display: 'flex', gap: 10, marginBottom: 4 }}>
      {cards.map(c => (
        <div key={c.label} style={{ flex: 1, background: 'white', borderRadius: 20, border: `1.5px solid ${T.border}`, padding: 16, textAlign: 'center', boxShadow: '0 2px 8px rgba(26,18,8,0.05)' }}>
          <div style={{ fontSize: 22, marginBottom: 4 }}>{c.icon}</div>
          <div style={{ ...playfair, fontSize: 26, fontWeight: 900 }}>{c.num}</div>
          <div style={{ fontSize: 11, color: T.textMuted, marginTop: 2 }}>{c.label}</div>
        </div>
      ))}
    </div>
  )
}

function LessonNode({ node, onStart }) {
  const isLocked = node.status === 'locked'
  const isDone   = node.status === 'done'
  const isActive = node.status === 'active'

  return (
    <div
      onClick={() => !isLocked && onStart(node.id)}
      style={{
        display: 'flex', alignItems: 'center', gap: 16,
        background: isDone ? '#f0faf4' : 'white',
        borderRadius: 20, padding: 16,
        border: `1.5px solid ${isActive ? T.gold : isDone ? 'rgba(39,174,96,0.3)' : T.border}`,
        cursor: isLocked ? 'default' : 'pointer',
        opacity: isLocked ? 0.5 : 1,
        boxShadow: isActive ? `0 4px 20px ${T.gold}33` : '0 2px 8px rgba(26,18,8,0.05)',
        transition: 'all 0.2s',
      }}
    >
      <div style={{ width: 52, height: 52, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, background: isDone ? '#d4f4e2' : isActive ? T.softGold : 'rgba(139,94,60,0.08)', filter: isLocked ? 'grayscale(1)' : 'none' }}>
        {node.icon}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 700 }}>{node.title}</div>
        <div style={{ fontSize: 13, color: T.textMuted, marginTop: 2 }}>{node.sub}</div>
        <div style={{ display: 'flex', gap: 2, marginTop: 6 }}>
          {[0, 1, 2].map(s => (
            <span key={s} style={{ color: s < node.stars ? T.gold : 'rgba(139,94,60,0.2)', fontSize: 13 }}>★</span>
          ))}
        </div>
      </div>
      <div style={{ background: isDone ? T.green : isActive ? T.gold : 'rgba(139,94,60,0.1)', color: isDone ? 'white' : isActive ? T.black : T.textMuted, fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 99, ...mono }}>
        {isDone ? 'Done ✓' : isActive ? 'Active' : '🔒'}
      </div>
    </div>
  )
}

export default function HomeScreen() {
  const { user, stats, startLesson, handleNav } = useApp()

  return (
    <div style={{ background: T.cream, minHeight: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>

      {/* Dark header */}
      <div style={{ background: T.black, padding: '16px 20px 20px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(60deg, ${T.gold}0a 0, ${T.gold}0a 1px, transparent 1px, transparent 20px)` }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1, paddingTop: 8, marginBottom: 14 }}>
          <div>
           {/*} <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Mema wo akye 👋</div>*/}
            <div style={{ ...playfair, fontSize: 22, color: 'white', fontWeight: 700 }}>{user}!</div>
          </div>
          <div style={{ width: 42, height: 42, borderRadius: '50%', background: `linear-gradient(135deg,${T.gold},${T.red})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, color: 'white', border: '2px solid rgba(255,255,255,0.2)' }}>
            {user[0]}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, position: 'relative', zIndex: 1, flexWrap: 'wrap' }}>
         {/*  <StatPill icon="🔥" label={`${stats.streak} day streak`} gold />
         <StatPill icon="⚡" label={`${stats.xp} XP`} />
          <StatPill icon="💎" label={`${stats.gems}`} />*/}
        </div>
      </div>
      <div style={{ height: 24, background: T.cream, borderRadius: '24px 24px 0 0', marginTop: -4 }} />

      {/* Scrollable content */}
      
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 100px' }}>
        <SectionLabel>Today's Challenge</SectionLabel>
        
        {/*<DailyCard onStart={() => startLesson('greetings')} />*/}
        <WordOfDay />

        <SectionLabel style={{ marginTop: 20 }}>Your Progress</SectionLabel>
        <ProgressCards stats={stats} />

        <SectionLabel style={{ marginTop: 20 }}>Twi Journey</SectionLabel>
       <div style={{ display: 'flex', flexDirection: 'column' }}>
          {LESSON_PATH.map((node, i) => (
            <div key={node.id}>
              <LessonNode node={node} onStart={startLesson} />
              {i < LESSON_PATH.length - 1 && (
                <div style={{ width: 3, height: 24, background: node.status === 'done' ? T.green : T.border, margin: '0 auto' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="home" onNav={handleNav} />
    </div>
  )
}
