// ─── COLOUR TOKENS ─────────────────────────────────────────────────────────────
export const T = {
  gold:      '#F4A823',
  red:       '#C0392B',
  green:     '#27AE60',
  black:     '#1A1208',
  earth:     '#8B5E3C',
  cream:     '#FDF6E3',
  softGold:  '#FEF0C7',
  textMain:  '#1A1208',
  textMuted: '#7A6652',
  textLight: '#B09880',
  border:    'rgba(139,94,60,0.15)',
}

// ─── TYPOGRAPHY SHORTCUTS ──────────────────────────────────────────────────────
export const playfair = { fontFamily: "'Playfair Display', serif" }
export const mono     = { fontFamily: "'Space Mono', monospace" }

// ─── GLOBAL CSS (injected via <style> in App.jsx) ──────────────────────────────
export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #d4c9b8;
    font-family: 'DM Sans', sans-serif;
    color: #1A1208;
  }

  input, button { font-family: 'DM Sans', sans-serif; }
  ::-webkit-scrollbar { width: 0; }

  /* ── Keyframes ── */
  @keyframes float {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-8px); }
  }
  @keyframes pulse-ring {
    0%,100% { transform: scale(1);    opacity: 0.3; }
    50%     { transform: scale(1.06); opacity: 0.7; }
  }
  @keyframes load-bar {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(220%); }
  }
  @keyframes pop-in {
    0%   { transform: scale(0.85); opacity: 0; }
    60%  { transform: scale(1.05); }
    100% { transform: scale(1);    opacity: 1; }
  }
  @keyframes slide-up {
    0%   { transform: translateY(40px); opacity: 0; }
    100% { transform: translateY(0);    opacity: 1; }
  }
  @keyframes slide-in-right {
    0%   { transform: translateX(60px); opacity: 0; }
    100% { transform: translateX(0);    opacity: 1; }
  }
  @keyframes slide-in-left {
    0%   { transform: translateX(-60px); opacity: 0; }
    100% { transform: translateX(0);     opacity: 1; }
  }
  @keyframes fade-in {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes bounce-in {
    0%   { transform: scale(0);   opacity: 0; }
    60%  { transform: scale(1.2); }
    100% { transform: scale(1);   opacity: 1; }
  }
  @keyframes confetti-fall {
    0%   { transform: translateY(-10px) rotate(0deg);   opacity: 1; }
    100% { transform: translateY(90px)  rotate(360deg); opacity: 0; }
  }

  /* ── Utility animation classes ── */
  .animate-float         { animation: float          3s   ease-in-out infinite; }
  .animate-pulse-ring    { animation: pulse-ring     2.5s ease-in-out infinite; }
  .animate-load-bar      { animation: load-bar       1.8s linear     infinite; }
  .animate-pop-in        { animation: pop-in         0.5s cubic-bezier(0.34,1.56,0.64,1) forwards; }
  .animate-slide-up      { animation: slide-up       0.4s ease forwards; }
  .animate-slide-in-right{ animation: slide-in-right 0.35s ease forwards; }
  .animate-slide-in-left { animation: slide-in-left  0.35s ease forwards; }
  .animate-fade-in       { animation: fade-in        0.4s ease forwards; }
  .animate-bounce-in     { animation: bounce-in      0.5s cubic-bezier(0.34,1.56,0.64,1) forwards; }
`
