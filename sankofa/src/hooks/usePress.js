import { useState } from 'react'

/**
 * usePress – returns press-state handlers for tactile button feedback.
 *
 * Usage:
 *   const { pressed, pressHandlers } = usePress()
 *   <button {...pressHandlers} style={{ transform: pressed ? 'scale(0.97)' : 'scale(1)' }}>
 */
export function usePress() {
  const [pressed, setPressed] = useState(false)

  const pressHandlers = {
    onMouseDown:  () => setPressed(true),
    onMouseUp:    () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    onTouchStart: () => setPressed(true),
    onTouchEnd:   () => setPressed(false),
  }

  return { pressed, pressHandlers }
}
