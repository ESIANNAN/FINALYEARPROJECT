# 🦅 Sankofa — Learn Ghanaian Languages

A mobile-first language learning app for Twi, Ga, and Ewe built with React + Vite.

---

## Project Structure

```
sankofa/
├── index.html                   # HTML entry point
├── vite.config.js               # Vite config
├── package.json
└── src/
    ├── main.jsx                 # React DOM bootstrap
    ├── App.jsx                  # Root app — phone shell + screen router
    │
    ├── context/
    │   └── AppContext.jsx       # Global state (user, stats, navigation)
    │
    ├── data/
    │   └── lessons.js           # All content: lessons, badges, phrases, leaderboard
    │
    ├── hooks/
    │   └── usePress.js          # Tactile press feedback hook
    │
    ├── styles/
    │   └── theme.js             # Colour tokens, typography, global CSS/keyframes
    │
    ├── components/              # Shared UI primitives
    │   ├── BottomNav.jsx        # 5-tab navigation bar
    │   ├── BtnPrimary.jsx       # Full-width CTA button
    │   ├── KentePattern.jsx     # Decorative kente-cloth background
    │   ├── SectionLabel.jsx     # Uppercase section heading
    │   └── StatusBar.jsx        # Mobile status bar mock
    │
    └── screens/                 # Full-page screen components
        ├── SplashScreen.jsx     # Animated splash (auto-advances)
        ├── AuthScreen.jsx       # Sign up / log in form
        ├── OnboardingScreen.jsx # 4-step wizard (language, goal, pace, confirm)
        ├── HomeScreen.jsx       # Dashboard, lesson path, daily challenge
        ├── LessonScreen.jsx     # Interactive quiz with feedback + XP
        ├── ExploreScreen.jsx    # Browse categories & quick phrases
        ├── PracticeScreen.jsx   # Practice modes & daily drill
        ├── LeaderboardScreen.jsx# Weekly XP rankings with podium
        └── ProfileScreen.jsx    # Stats, badges, settings, sign out
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Design System

| Token         | Value       | Usage                    |
|---------------|-------------|--------------------------|
| `--gold`      | `#F4A823`   | Primary accent           |
| `--red`       | `#C0392B`   | Kente red, errors        |
| `--green`     | `#27AE60`   | Success, completed       |
| `--black`     | `#1A1208`   | Headers, dark surfaces   |
| `--cream`     | `#FDF6E3`   | Background, cards        |

**Fonts:**
- Display: *Playfair Display* (headings, word cards)
- Body: *DM Sans* (UI text, inputs)
- Mono: *Space Mono* (badges, labels)

---

## Features

- ✅ Animated splash with floating eagle + pulsing kente rings
- ✅ Auth screen (sign up / log in tabs, Google OAuth button)
- ✅ 4-step onboarding (language picker, goal, daily minutes, confirmation)
- ✅ Home dashboard with live stats, lesson path, word of the day
- ✅ Interactive lesson engine with 5 questions, cultural notes, XP scoring
- ✅ Explore screen (6 categories, phrase browser, search)
- ✅ Practice screen (4 modes, mistake review, daily drill)
- ✅ Leaderboard with podium + real user rank
- ✅ Profile with XP bar, badge grid, toggleable settings
- ✅ Global state via React Context (no Redux needed)
- ✅ Kente cloth geometric patterns throughout

---

## Languages Supported

| Language | Region   |
|----------|----------|
| Twi      | Ashanti  |
| Ga       | Accra    |
| Ewe      | Volta    |
| Dagbani  | Northern |
| Fante    | Central  |
| Hausa    | Northern |

---

*"Sankofa" — Go back and fetch it. A symbol of learning from the past to build a better future.*
