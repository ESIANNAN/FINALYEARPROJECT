import { useState } from 'react'
import { T, playfair, mono } from '../styles/theme'
import { LESSONS } from '../data/lessons'
import { useApp } from '../context/AppContext'
import StatusBar from '../components/StatusBar'
import BtnPrimary from '../components/BtnPrimary'
import KentePattern from '../components/KentePattern'

// ── Confetti celebration on completion ────────────────────────────────────────
function FinishScreen({ score, total }) {
  const { navigate, prevScreen } = useApp()
  const pieces = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: [T.gold, T.red, T.green, 'white'][i % 4],
    delay: Math.random() * 0.5,
  }))

  return (
    <div style={{ background: T.black, minHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <KentePattern />
      {pieces.map(c => (
        <div key={c.id} style={{ position: 'absolute', top: 0, left: `${c.x}%`, width: 8, height: 8, borderRadius: 2, background: c.color, animation: `confetti-fall 2s ease ${c.delay}s forwards` }} />
      ))}
      <div className="animate-bounce-in" style={{ width: 120, height: 120, background: T.gold, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 60, boxShadow: `0 0 60px ${T.gold}88`, marginBottom: 24 }}>🏆</div>
      <div style={{ ...playfair, fontSize: 36, fontWeight: 900, color: 'white', marginBottom: 8 }}>Excellent!</div>
      <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>{score}/{total} correct</div>
      <div style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
        <div style={{ background: `${T.gold}22`, borderRadius: 12, padding: '14px 24px', textAlign: 'center' }}>
          <div style={{ ...playfair, fontSize: 28, fontWeight: 900, color: T.gold }}>{score * 10}</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>XP Earned</div>
        </div>
        <div style={{ background: `${T.green}22`, borderRadius: 12, padding: '14px 24px', textAlign: 'center' }}>
          <div style={{ ...playfair, fontSize: 28, fontWeight: 900, color: T.green }}>
            {'★'.repeat(score >= total ? 3 : score >= Math.ceil(total * 0.66) ? 2 : 1)}
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Stars</div>
        </div>
      </div>
      <div style={{ padding: '0 32px', width: '100%' }}>
        <BtnPrimary onClick={() => navigate(prevScreen || 'home')}>Back to Home</BtnPrimary>
      </div>
    </div>
  )
}

// ── Individual question view ──────────────────────────────────────────────────
function QuestionView({ q, qIdx, total, onAnswer }) {
  const [selected, setSelected]   = useState(null)
  const [answered, setAnswered]   = useState(false)
  const isCorrect = selected === q.correct

  const handleSelect = (idx) => {
    if (answered) return
    setSelected(idx)
    setAnswered(true)
  }

  const handleNext = () => {
    onAnswer(selected === q.correct)
    setSelected(null)
    setAnswered(false)
  }

  const progress = ((qIdx + (answered ? 1 : 0)) / total) * 100

  return (
    <>
      {/* Question body */}
      <div style={{ flex: 1, background: T.cream, borderRadius: '32px 32px 0 0', padding: '28px 24px 0', display: 'flex', flexDirection: 'column', gap: 20, overflowY: 'auto' }}>

        {/* Prompt label */}
        <div style={{ fontSize: 12, fontWeight: 700, color: T.textMuted, letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center' }}>
          Translate this word
        </div>

        {/* Word card */}
        <div style={{ background: T.black, borderRadius: 20, padding: '28px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(30deg,${T.gold}10 0,${T.gold}10 1px,transparent 1px,transparent 16px)` }} />
          <div style={{ ...playfair, fontSize: 44, fontWeight: 900, color: T.gold, position: 'relative', zIndex: 1, marginBottom: 4 }}>{q.twi}</div>
          <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', fontStyle: 'italic', position: 'relative', zIndex: 1, marginBottom: 8 }}>{q.roman}</div>
          <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', position: 'relative', zIndex: 1 }}>Twi · Translate to English</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `rgba(244,168,35,0.15)`, color: T.gold, fontSize: 13, fontWeight: 600, padding: '8px 16px', borderRadius: 99, marginTop: 12, cursor: 'pointer', position: 'relative', zIndex: 1 }}>
            🔊 Play Pronunciation
          </div>
        </div>

        <div style={{ ...playfair, fontSize: 20, fontWeight: 700, textAlign: 'center', lineHeight: 1.35 }}>
          What does "{q.twi}" mean in English?
        </div>

        {/* Choices */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingBottom: 8 }}>
          {q.choices.map((choice, idx) => {
            const isRight  = answered && idx === q.correct
            const isWrong  = answered && idx === selected && idx !== q.correct
            return (
              <div
                key={idx}
                onClick={() => handleSelect(idx)}
                style={{
                  background: isRight ? '#edfaf3' : isWrong ? '#fdecea' : 'white',
                  border: `2px solid ${isRight ? T.green : isWrong ? T.red : T.border}`,
                  borderRadius: 12, padding: '15px 18px',
                  fontSize: 16, fontWeight: 600, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  transition: 'all 0.15s',
                  color: isRight ? '#1a7a45' : isWrong ? '#8b1a12' : T.textMain,
                  transform: isRight ? 'scale(1.01)' : 'scale(1)',
                }}
              >
                <span>{choice}</span>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: isRight ? T.green : isWrong ? T.red : 'rgba(139,94,60,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: (isRight || isWrong) ? 'white' : T.textMuted, flexShrink: 0 }}>
                  {isRight ? '✓' : isWrong ? '✗' : String.fromCharCode(65 + idx)}
                </div>
              </div>
            )
          })}
        </div>

        {/* Feedback */}
        {answered && (
          <div className="animate-slide-up" style={{ background: isCorrect ? '#edfaf3' : '#fdecea', borderRadius: 12, padding: 16, borderLeft: `4px solid ${isCorrect ? T.green : T.red}`, display: 'flex', gap: 12 }}>
            <div style={{ fontSize: 24 }}>{isCorrect ? '✅' : '❌'}</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: isCorrect ? '#1a7a45' : '#8b1a12', marginBottom: 2 }}>
                {isCorrect ? 'Excellent! You got it right.' : `Correct answer: "${q.choices[q.correct]}"`}
              </div>
              <div style={{ fontSize: 13, color: isCorrect ? '#2d8a55' : '#c0392b' }}>{q.cultural}</div>
            </div>
          </div>
        )}
        <div style={{ height: 8 }} />
      </div>

      {/* Footer CTA */}
      {answered && (
        <div className="animate-slide-up" style={{ padding: '16px 24px 28px', background: T.cream }}>
          <BtnPrimary onClick={handleNext} color={isCorrect ? T.green : T.red}>
            {qIdx < total - 1 ? 'Continue →' : 'Finish Lesson 🏆'}
          </BtnPrimary>
        </div>
      )}
    </>
  )
}

// ── Screen shell ──────────────────────────────────────────────────────────────
export default function LessonScreen() {
  const { activeLesson, prevScreen, navigate, completeLesson } = useApp()
  const questions = LESSONS[activeLesson] || LESSONS.greetings

  const [qIdx,     setQIdx]     = useState(0)
  const [score,    setScore]    = useState(0)
  const [finished, setFinished] = useState(false)

  const progress = (qIdx / questions.length) * 100

  const handleAnswer = (correct) => {
    const newScore = correct ? score + 1 : score
    if (qIdx < questions.length - 1) {
      if (correct) setScore(s => s + 1)
      setQIdx(i => i + 1)
    } else {
      setScore(newScore)
      completeLesson(newScore)
      setFinished(true)
    }
  }

  if (finished) {
    return <FinishScreen score={score} total={questions.length} />
  }

  return (
    <div style={{ background: T.black, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <StatusBar light />

      {/* Lesson header */}
      <div style={{ padding: '8px 20px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          onClick={() => navigate(prevScreen || 'home')}
          style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, cursor: 'pointer' }}
        >
          ←
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 5, fontWeight: 600, letterSpacing: '0.08em' }}>
            QUESTION {qIdx + 1} OF {questions.length}
          </div>
          <div style={{ height: 8, background: 'rgba(255,255,255,0.1)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: `linear-gradient(90deg,${T.gold},#F4C842)`, borderRadius: 99, transition: 'width 0.4s ease', boxShadow: `0 0 10px ${T.gold}88` }} />
          </div>
        </div>
        <div style={{ background: `rgba(244,168,35,0.15)`, color: T.gold, fontSize: 13, fontWeight: 700, padding: '6px 12px', borderRadius: 99, ...mono }}>
          +10 XP
        </div>
      </div>

      <QuestionView
        key={qIdx}
        q={questions[qIdx]}
        qIdx={qIdx}
        total={questions.length}
        onAnswer={handleAnswer}
      />
    </div>
  )
}
