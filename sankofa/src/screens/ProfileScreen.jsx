import { useState } from 'react'
import { T, playfair, mono } from '../styles/theme'
import { useApp } from '../context/AppContext'
import { BADGES } from '../data/lessons'
import BottomNav from '../components/BottomNav'
import StatusBar from '../components/StatusBar'

function ToggleSwitch({ on }) {
  return (
    <div style={{ width: 44, height: 26, borderRadius: 13, background: on ? T.green : 'rgba(139,94,60,0.15)', position: 'relative', transition: 'background 0.2s', flexShrink: 0 }}>
      <div style={{ position: 'absolute', top: 3, left: on ? 21 : 3, width: 20, height: 20, borderRadius: '50%', background: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.2)', transition: 'left 0.2s' }} />
    </div>
  )
}

function XpBar({ xp }) {
  const MAX = 400
  const pct = Math.min((xp / MAX) * 100, 100)
  return (
    <div style={{ background: 'white', borderRadius: 20, border: `1.5px solid ${T.border}`, padding: 16, boxShadow: '0 2px 8px rgba(26,18,8,0.05)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 8 }}>
        <span style={{ fontWeight: 700 }}>Level 7</span>
        <span style={{ color: T.textMuted }}>{xp} / {MAX} XP</span>
      </div>
      <div style={{ height: 10, background: 'rgba(139,94,60,0.1)', borderRadius: 99, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: `linear-gradient(90deg,${T.gold},#F4C842)`, borderRadius: 99, transition: 'width 1s ease' }} />
      </div>
      <div style={{ fontSize: 12, color: T.textMuted, marginTop: 8 }}>{MAX - xp} XP needed to reach Level 8 🎯</div>
    </div>
  )
}

export default function ProfileScreen() {
  const { user, stats, handleNav, logout } = useApp()
  const [notifs, setNotifs] = useState(true)
  const [sounds, setSounds] = useState(true)

  const settings = [
    { icon: '🔔', bg: '#FEF0C7', label: 'Daily Reminders', sub: '9:00 AM every day',   toggle: true,  val: notifs, set: setNotifs },
    { icon: '🎵', bg: '#d4f4e2', label: 'Sound Effects',   sub: 'Feedback sounds on',   toggle: true,  val: sounds, set: setSounds },
    { icon: '🌐', bg: '#fdecea', label: 'Language',         sub: 'Currently: Twi',       toggle: false             },
    { icon: '👥', bg: '#E8F4F8', label: 'Invite Friends',  sub: 'Earn 50 XP per invite',toggle: false             },
  ]

  return (
    <div style={{ background: T.cream, minHeight: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>

      {/* Dark header with avatar */}
      <div style={{ background: T.black, padding: '20px 20px 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(45deg,${T.gold}0d 0,${T.gold}0d 1px,transparent 1px,transparent 20px)` }} />
        <StatusBar light />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1, marginBottom: 20 }}>
          <div style={{ ...playfair, fontSize: 18, fontWeight: 700, color: 'white' }}>Profile</div>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, cursor: 'pointer' }}>⚙️</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1, gap: 10 }}>
          <div style={{ width: 84, height: 84, borderRadius: '50%', background: `linear-gradient(135deg,${T.gold},${T.red})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, fontWeight: 700, color: 'white', border: '3px solid rgba(255,255,255,0.2)', boxShadow: `0 0 30px ${T.gold}55` }}>
            {user[0]}
          </div>
          <div style={{ ...playfair, fontSize: 22, fontWeight: 900, color: 'white' }}>{user}</div>
          <div style={{ background: T.gold, color: T.black, fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 99, ...mono }}>Level 7 · Twi Learner</div>
        </div>

        {/* Floating stats card */}
        <div style={{ position: 'absolute', bottom: -32, left: 20, right: 20, background: 'white', borderRadius: 20, padding: '16px 20px', boxShadow: '0 8px 40px rgba(26,18,8,0.18)', zIndex: 5, display: 'flex', justifyContent: 'space-around' }}>
          {[
            { num: stats.streak, label: 'Day Streak 🔥', color: T.gold   },
            { num: stats.xp,     label: 'Total XP ⚡',   color: T.textMain },
            { num: stats.badges, label: 'Badges 🏅',      color: T.green  },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ ...playfair, fontSize: 22, fontWeight: 900, color: s.color }}>{s.num}</div>
              <div style={{ fontSize: 11, color: T.textMuted, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable body */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '48px 20px 100px' }}>

        {/* XP bar */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>XP to Next Level</div>
          <XpBar xp={stats.xp} />
        </div>

        {/* Badges */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Achievements</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
            {BADGES.map(b => (
              <div key={b.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, background: b.earned ? T.softGold : 'rgba(139,94,60,0.06)', border: b.earned ? `2px solid ${T.gold}55` : `2px dashed ${T.border}`, filter: b.earned ? 'none' : 'grayscale(1)', opacity: b.earned ? 1 : 0.5 }}>
                  {b.icon}
                </div>
                <div style={{ fontSize: 10, fontWeight: 600, textAlign: 'center', color: T.textMuted }}>{b.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Settings list */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Settings</div>
          <div style={{ background: 'white', borderRadius: 20, border: `1.5px solid ${T.border}`, overflow: 'hidden' }}>
            {settings.map((item, i) => (
              <div
                key={item.label}
                onClick={() => item.toggle && item.set(!item.val)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', borderBottom: i < settings.length - 1 ? `1px solid ${T.border}` : 'none', cursor: 'pointer' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 10, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: T.textMuted }}>{item.sub}</div>
                  </div>
                </div>
                {item.toggle
                  ? <ToggleSwitch on={item.val} />
                  : <span style={{ color: T.textLight, fontSize: 18 }}>›</span>
                }
              </div>
            ))}
          </div>
        </div>

        {/* Sign out */}
        <div
          onClick={logout}
          style={{ background: 'white', borderRadius: 14, border: '1.5px solid rgba(192,57,43,0.2)', padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
        >
          <div style={{ width: 34, height: 34, borderRadius: 10, background: '#fdecea', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🚪</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: T.red }}>Sign Out</div>
        </div>
      </div>

      <BottomNav active="profile" onNav={handleNav} />
    </div>
  )
}
