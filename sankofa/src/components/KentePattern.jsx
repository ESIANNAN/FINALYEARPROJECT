import { T } from '../styles/theme'

/**
 * KentePattern – decorative diagonal stripe overlay
 * inspired by Kente cloth weaving geometry.
 */
export default function KentePattern({ opacity = 0.07, color = T.gold }) {
  const hex = Math.round(opacity * 255).toString(16).padStart(2, '0')
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            ${color}${hex} 0, ${color}${hex} 1px,
            transparent 0, transparent 50%
          ),
          repeating-linear-gradient(
            -45deg,
            ${T.red}0d 0, ${T.red}0d 1px,
            transparent 0, transparent 50%
          )`,
        backgroundSize: '28px 28px',
      }}
    />
  )
}
