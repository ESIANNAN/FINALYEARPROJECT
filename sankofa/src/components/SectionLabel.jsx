import { T } from '../styles/theme'

/** Small uppercase section label used throughout the app */
export default function SectionLabel({ children, style = {} }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 700,
        color: T.textMuted,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: 12,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
