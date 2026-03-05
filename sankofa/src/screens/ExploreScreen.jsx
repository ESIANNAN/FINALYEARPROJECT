import { T, playfair, mono } from '../styles/theme'
import { useApp } from '../context/AppContext'
import { EXPLORE_CATEGORIES, QUICK_PHRASES } from '../data/lessons'
import KentePattern from '../components/KentePattern'
import BottomNav from '../components/BottomNav'
import SectionLabel from '../components/SectionLabel'
import StatusBar from '../components/StatusBar'

export default function ExploreScreen() {
  const { handleNav, startLesson } = useApp()

  return (
    <div style={{ background: T.cream, minHeight: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>

      {/* Header */}
      <div style={{ background: T.black, padding: '16px 20px 24px', position: 'relative', overflow: 'hidden' }}>
        <KentePattern />
        <StatusBar light />
        <div style={{ ...playfair, fontSize: 24, fontWeight: 900, color: 'white', position: 'relative', zIndex: 1 }}>Explore Twi</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', position: 'relative', zIndex: 1, marginTop: 4 }}>Discover words & culture</div>
      </div>
      <div style={{ height: 20, background: T.cream, borderRadius: '20px 20px 0 0', marginTop: -4 }} />

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '8px 20px 100px' }}>

        {/* Search bar */}
        <div style={{ background: 'white', border: `1.5px solid ${T.border}`, borderRadius: 12, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <span style={{ fontSize: 18 }}>🔍</span>
          <input
            placeholder="Search words, phrases..."
            style={{ border: 'none', outline: 'none', fontSize: 14, color: T.textMain, flex: 1, background: 'transparent' }}
          />
        </div>

        <SectionLabel>Categories</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
          {EXPLORE_CATEGORIES.map(cat => (
            <div
              key={cat.title}
              onClick={() => startLesson('greetings')}
              style={{ background: 'white', borderRadius: 16, border: `1.5px solid ${T.border}`, padding: 16, cursor: 'pointer', transition: 'all 0.2s' }}
            >
              <div style={{ width: 48, height: 48, background: cat.bg, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 10 }}>{cat.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{cat.title}</div>
              <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>{cat.words} words</div>
              <div style={{ height: 3, background: cat.bg, borderRadius: 99, marginTop: 10, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${Math.floor(Math.random() * 60 + 15)}%`, background: cat.color, borderRadius: 99 }} />
              </div>
            </div>
          ))}
        </div>

        <SectionLabel>Quick Phrases</SectionLabel>
        {QUICK_PHRASES.map(p => (
          <div key={p.twi} style={{ background: 'white', borderRadius: 14, border: `1.5px solid ${T.border}`, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10, boxShadow: '0 2px 6px rgba(26,18,8,0.05)' }}>
            <div style={{ flex: 1 }}>
              <div style={{ ...playfair, fontSize: 18, fontWeight: 700, color: T.gold }}>{p.twi}</div>
              <div style={{ fontSize: 13, color: T.textMuted, marginTop: 2 }}>{p.eng}</div>
            </div>
            <div style={{ background: T.softGold, color: T.earth, fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 99, ...mono }}>{p.tag}</div>
            <span style={{ fontSize: 18, cursor: 'pointer' }}>🔊</span>
          </div>
        ))}
      </div>

      <BottomNav active="explore" onNav={handleNav} />
    </div>
  )
}
