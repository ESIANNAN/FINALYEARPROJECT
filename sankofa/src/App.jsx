import { useApp, AppProvider } from './context/AppContext'
import { globalStyles } from './styles/theme'
import { T, mono } from './styles/theme'

// Screens
import SplashScreen      from './screens/SplashScreen'
import AuthScreen        from './screens/AuthScreen'
import OnboardingScreen  from './screens/OnboardingScreen'
import HomeScreen        from './screens/HomeScreen'
import LessonScreen      from './screens/LessonScreen'
import ExploreScreen     from './screens/ExploreScreen'
import PracticeScreen    from './screens/PracticeScreen'
import LeaderboardScreen from './screens/LeaderboardScreen'
import ProfileScreen     from './screens/ProfileScreen'

// ─── Screen router ────────────────────────────────────────────────────────────
function Router() {
  const { screen } = useApp()

  const screens = {
    splash:      <SplashScreen />,
    auth:        <AuthScreen />,
    onboarding:  <OnboardingScreen />,
    home:        <HomeScreen />,
    lesson:      <LessonScreen />,
    explore:     <ExploreScreen />,
    practice:    <PracticeScreen />,
    leaderboard: <LeaderboardScreen />,
    profile:     <ProfileScreen />,
  }

  return screens[screen] ?? <HomeScreen />
}

// ─── Phone frame shell ────────────────────────────────────────────────────────
function PhoneShell() {
  const { screen, navigate } = useApp()

  const NAV_DOTS = ['splash', 'auth', 'onboarding', 'home', 'explore', 'profile']

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      {/* Phone chrome */}
      <div style={{
        width: 375,
        background: T.cream,
        borderRadius: 44,
        boxShadow: `0 0 0 10px ${T.black}, 0 8px 60px rgba(26,18,8,0.35)`,
        overflow: 'hidden',
        position: 'relative',
        minHeight: 812,
      }}>
        {/* Notch */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 120, height: 28, background: T.black, borderRadius: '0 0 20px 20px', zIndex: 100 }} />
        <div style={{ minHeight: 812, position: 'relative' }}>
          <Router />
        </div>
      </div>

      {/* Screen label + dot nav */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{ ...mono, fontSize: 11, color: '#7A6652', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {screen.charAt(0).toUpperCase() + screen.slice(1)} Screen
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {NAV_DOTS.map(s => (
            <div
              key={s}
              onClick={() => s !== 'lesson' && navigate(s)}
              title={s}
              style={{
                width: screen === s ? 20 : 8,
                height: 8,
                borderRadius: 99,
                background: screen === s ? T.gold : 'rgba(139,94,60,0.25)',
                transition: 'all 0.3s',
                cursor: s !== 'lesson' ? 'pointer' : 'default',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── App root ─────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <AppProvider>
      <style>{globalStyles}</style>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '100vh',
        padding: '32px 16px 60px',
        background: '#d4c9b8',
      }}>
        <PhoneShell />
      </div>
    </AppProvider>
  )
}
