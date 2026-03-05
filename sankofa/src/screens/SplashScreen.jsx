import { useEffect, useState } from 'react'
import { T, playfair } from '../styles/theme'
import KentePattern from '../components/KentePattern'
import { useApp } from '../context/AppContext'

export default function SplashScreen() {
  const { navigate } = useApp()

  useEffect(() => {
    const timer = setTimeout(() => navigate('welcome'), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      style={{
        background: 'transparent',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

     {/*  <KentePattern />*/}

      {/* Large decorative symbol 
      <div
        style={{
          position: 'absolute',
          fontSize: 280,
          opacity: 0.05,
          color: T.gold,
          ...playfair,
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          userSelect: 'none',
          lineHeight: 1,
        }}
      >
        ☽
      </div>
      */}

      {/* Pulsing rings 
      {[200, 265, 330].map((size, i) => (
        <div
          key={i}
          className="animate-pulse-ring"
          style={{
            width: size, height: size,
            borderRadius: '50%',
            border: `3px solid ${T.gold}55`,
            position: 'absolute',
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
    */}

    
      {/* Logo content */}
      <div
        className="animate-pop-in"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
        }}
      >
       <div
  className="animate-float"
  style={{
    width: 150,
    height: 150,
    borderRadius: '50%',
    background: T.surface, // 👈 CHANGE LOGO BACKGROUND COLOR HERE
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0 0 60px ${T.gold}66`, // 👈 CHANGE GLOW COLOR HERE
  }}
>
  <img
    src="/Sankofa-logo.png"   // 👈 PUT YOUR LOGO FILE NAME HERE
    alt="App Logo"
    style={{
      width: '70%',
      height: '70%',
      objectFit: 'contain'
    }}
  />
</div>

        <div style={{ ...playfair, fontSize: 48, fontWeight: 900, color: 'black' }}>
          <span style={{ color: T.gold }}>S</span>ankofa
        </div>

        <div
          style={{
            fontSize: 13,
            color: 'black',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          Ghanaian Language Learning
        </div>

        {/* Shimmer loader 
        <div
          style={{
            marginTop: 40,
            width: 120, height: 3,
            background: 'rgba(255,255,255,0.1)',
            borderRadius: 99,
            overflow: 'hidden',
          }}
        >
        */}
         
          <div
            className="animate-load-bar"
            style={{
              height: '100%',
              width: '55%',
              background: `linear-gradient(90deg,${T.gold},${T.red})`,
              borderRadius: 99,
            }}
          />
        </div>
      </div>
  )
}
