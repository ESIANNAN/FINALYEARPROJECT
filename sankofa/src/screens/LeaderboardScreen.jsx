import { T, playfair, mono } from '../styles/theme'
import { useApp } from '../context/AppContext'
import { LEADERBOARD } from '../data/lessons'
import KentePattern from '../components/KentePattern'
import BottomNav from '../components/BottomNav'
import StatusBar from '../components/StatusBar'

const MEDALS = { 1: '🥇', 2: '🥈', 3: '🥉' }

function PodiumPlayer({ player, height, avatarSize, accentColor }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
      <div style={{ fontSize: 20, marginBottom: 4 }}>{MEDALS[player.rank]}</div>
      <div style={{ width: avatarSize, height: avatarSize, borderRadius: '50%', background: `linear-gradient(135deg,${accentColor},${accentColor}88)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: avatarSize / 2.5, fontWeight: 700, color: 'white', border: `3px solid ${accentColor}`, marginBottom: 4 }}>
        {player.name[0]}
      </div>
      <div style={{ fontSize: 11, fontWeight: 700, textAlign: 'center', maxWidth: 64, color: T.textMain }}>{player.name}</div>
      <div style={{ fontSize: 10, color: T.textMuted }}>{player.xp} XP</div>
      <div style={{ width: '100%', height, background: accentColor, borderRadius: '8px 8px 0 0', marginTop: 6, opacity: 0.3 }} />
    </div>
  )
}

export default function LeaderboardScreen() {
  const { user, stats, handleNav } = useApp()

  // Inject current user at rank 3
  const myEntry = { name: user, xp: stats.xp, flag: '🇬🇭', streak: stats.streak, rank: 3, isMe: true }
  const rows = [
    LEADERBOARD[0],
    LEADERBOARD[1],
    myEntry,
    ...LEADERBOARD.slice(2),
  ].sort((a, b) => b.xp - a.xp).map((p, i) => ({ ...p, rank: i + 1 }))

  const top3 = rows.slice(0, 3)
  const podiumOrder = [top3[1], top3[0], top3[2]] // silver, gold, bronze

  const podiumProps = [
    { height: 80, avatarSize: 52, accentColor: T.textLight },
    { height: 100, avatarSize: 64, accentColor: T.gold     },
    { height: 65, avatarSize: 48, accentColor: T.earth     },
  ]

  return (
    <div style={{ background: T.cream, minHeight: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>

      {/* Header */}
      <div style={{ background: T.black, padding: '16px 20px 24px', position: 'relative', overflow: 'hidden' }}>
        <KentePattern />
        <StatusBar light />
        <div style={{ ...playfair, fontSize: 24, fontWeight: 900, color: 'white', position: 'relative', zIndex: 1 }}>Leaderboard</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', position: 'relative', zIndex: 1, marginTop: 4 }}>Weekly XP Rankings</div>
      </div>
      <div style={{ height: 20, background: T.cream, borderRadius: '20px 20px 0 0', marginTop: -4 }} />

      {/* Podium top 3 */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 12, padding: '16px 24px', marginBottom: 8 }}>
        {podiumOrder.map((p, i) => (
          <PodiumPlayer key={p.name} player={p} {...podiumProps[i]} />
        ))}
      </div>

      {/* Full list */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px 100px' }}>
        {rows.map(p => (
          <div
            key={p.name + p.rank}
            style={{
              background: p.isMe ? T.softGold : 'white',
              borderRadius: 14,
              border: `1.5px solid ${p.isMe ? T.gold : T.border}`,
              padding: '14px 16px',
              display: 'flex', alignItems: 'center', gap: 12,
              marginBottom: 8,
              boxShadow: p.isMe ? `0 4px 16px ${T.gold}33` : '0 2px 6px rgba(26,18,8,0.05)',
            }}
          >
            <div style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>
              {MEDALS[p.rank] || `#${p.rank}`}
            </div>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: `linear-gradient(135deg,${T.gold},${T.red})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, color: 'white' }}>
              {p.name[0]}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>
                {p.name} {p.flag}
                {p.isMe && <span style={{ fontSize: 11, color: T.gold, ...mono, marginLeft: 6 }}>(you)</span>}
              </div>
              <div style={{ fontSize: 12, color: T.textMuted }}>🔥 {p.streak} day streak</div>
            </div>
            <div style={{ ...playfair, fontSize: 18, fontWeight: 900, color: p.rank === 1 ? T.gold : T.textMain }}>{p.xp}</div>
          </div>
        ))}
      </div>

      <BottomNav active="leaderboard" onNav={handleNav} />
    </div>
  )
}
