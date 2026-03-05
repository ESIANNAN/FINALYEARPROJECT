import { T } from '../styles/theme'
import { usePress } from '../hooks/usePress'

/**
 * BtnPrimary – full-width CTA button with press animation.
 *
 * Props:
 *   children  – button label / content
 *   onClick   – click handler
 *   color     – override background (defaults to kente gold)
 *   style     – extra style overrides
 *   disabled  – disables interaction
 */
export default function BtnPrimary({ children, onClick, color, style = {}, disabled = false }) {
  const { pressed, pressHandlers } = usePress()
  const bg = color || T.gold
  const textColor = color ? 'white' : T.black

  return (
    <button
      onClick={!disabled ? onClick : undefined}
      {...pressHandlers}
      style={{
        background: disabled ? 'rgba(139,94,60,0.15)' : bg,
        color: disabled ? T.textLight : textColor,
        border: 'none',
        borderRadius: 12,
        padding: '16px',
        fontSize: 16,
        fontWeight: 700,
        cursor: disabled ? 'not-allowed' : 'pointer',
        width: '100%',
        boxShadow: pressed || disabled ? 'none' : `0 4px 16px ${bg}55`,
        transform: pressed ? 'scale(0.98)' : 'scale(1)',
        transition: 'all 0.15s',
        letterSpacing: '0.02em',
        ...style,
      }}
    >
      {children}
    </button>
  )
}
