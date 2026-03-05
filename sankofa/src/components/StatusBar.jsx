import { T } from '../styles/theme'

/** Mobile status bar mock — time + signal indicators */
export default function StatusBar({ light = false }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '14px 24px 6px',
        fontSize: 12,
        fontWeight: 600,
        color: light ? 'white' : T.textMain,
      }}
    >
      <span>9:41</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <span style={{ fontSize: 9 }}>▲▲▲</span> WiFi
      </span>
    </div>
  )
}
