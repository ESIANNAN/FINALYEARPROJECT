import { T } from '../styles/theme'

const NAV_ITEMS = [
  { id: 'home',        icon: '🏠', label: 'Home'    },
  { id: 'explore',     icon: '🗺️', label: 'Explore' },
  { id: 'practice',    icon: '⚔️', label: 'Practice'},
  { id: 'leaderboard', icon: '🏆', label: 'Leaders' },
  { id: 'profile',     icon: '👤', label: 'Profile' },
]

/**
 * BottomNav – persistent 5-tab navigation bar.
 *
 * Props:
 *   active  – id of currently active tab
 *   onNav   – callback(tabId)
 */
export default function BottomNav({ active, onNav }) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        background: 'white',
        borderTop: `1px solid ${T.border}`,
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px 0 20px',
        zIndex: 10,
      }}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = active === item.id
        return (
          <div
            key={item.id}
            onClick={() => onNav(item.id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              cursor: 'pointer',
              flex: 1,
              userSelect: 'none',
            }}
          >
            <span style={{ fontSize: 22 }}>{item.icon}</span>
            {isActive && (
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: T.gold }} />
            )}
            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: isActive ? T.gold : T.textMuted,
              }}
            >
              {item.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
