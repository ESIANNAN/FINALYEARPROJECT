import { createContext, useContext, useState } from 'react'

// ─── Context & hook ───────────────────────────────────────────────────────────
const AppContext = createContext(null)
export const useApp = () => useContext(AppContext)

// ─── Provider ────────────────────────────────────────────────────────────────
export function AppProvider({ children }) {
  // Navigation
  const [screen, setScreen]         = useState('splash')
  const [prevScreen, setPrevScreen] = useState(null)
  const [activeLesson, setActiveLesson] = useState(null)

  // User data
  const [user, setUser]   = useState('Kwame')
  const [stats, setStats] = useState({
    streak:           12,
    xp:               240,
    gems:             580,
    lessonsCompleted: 3,
    badges:           4,
  })

  // Navigation helpers
  const navigate = (to) => {
    setPrevScreen(screen)
    setScreen(to)
  }

  const handleNav = (dest) => {
    const allowed = ['home', 'explore', 'practice', 'leaderboard', 'profile']
    if (allowed.includes(dest)) navigate(dest)
  }

  const startLesson = (lessonId) => {
    setActiveLesson(lessonId)
    navigate('lesson')
  }

  const completeLesson = (score) => {
    setStats(s => ({
      ...s,
      xp:               s.xp + score * 10,
      lessonsCompleted: s.lessonsCompleted + 1,
    }))
    navigate('home')
  }

  const login = (name) => {
    setUser(name || 'Kwame')
    navigate('onboarding')
  }

  const logout = () => navigate('auth')

  return (
    <AppContext.Provider value={{
      screen, prevScreen, activeLesson,
      user, stats,
      navigate, handleNav,
      startLesson, completeLesson,
      login, logout,
    }}>
      {children}
    </AppContext.Provider>
  )
}
