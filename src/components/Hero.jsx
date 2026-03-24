import React, { useState, useEffect } from 'react';
import { C } from '../theme';

const Hero = () => {
  const roles = ['React Native Developer', 'Game Developer', 'Mobile Engineer'];
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timer;
    if (!deleting) {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), 90);
      } else {
        timer = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), 50);
      } else {
        setDeleting(false);
        setRoleIdx((roleIdx + 1) % roles.length);
      }
    }
    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx]);

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', position: 'relative',
      padding: '0 24px', overflow: 'hidden',
      background: C.corn,
    }}>
      {/* floating blob */}
      <div style={{
        position: 'absolute', width: '450px', height: '450px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${C.sage}66, ${C.beige}33, transparent 70%)`,
        filter: 'blur(80px)',
        animation: 'blobMove 8s ease-in-out infinite alternate',
        top: '-8%', right: '-8%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: '350px', height: '350px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${C.papaya}88, ${C.bronze}22, transparent 70%)`,
        filter: 'blur(70px)',
        animation: 'blobMove2 10s ease-in-out infinite alternate',
        bottom: '-5%', left: '-5%', pointerEvents: 'none',
      }} />

      <p style={{
        fontFamily: 'Nunito, sans-serif', fontSize: '1.05rem',
        color: C.dark2, marginBottom: '14px', letterSpacing: '3px', fontWeight: 600,
      }}>HI, I'M</p>

      <h1 style={{
        fontFamily: 'Nunito, sans-serif', fontWeight: 900,
        fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
        color: C.dark, marginBottom: '16px',
      }}>T Kushal Raj</h1>

      <p style={{
        fontFamily: 'Nunito, sans-serif',
        fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
        color: C.bronze, minHeight: '1.6em', fontWeight: 700,
      }}>
        {text}<span style={{
          borderRight: `2.5px solid ${C.bronze}`,
          marginLeft: '2px',
          animation: 'blink 1s step-end infinite',
        }}>&nbsp;</span>
      </p>

      <div style={{ marginTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#projects" style={{
          padding: '14px 36px', borderRadius: '999px',
          background: C.bronze, color: '#fff',
          fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '.95rem',
          transition: 'transform .2s, box-shadow .2s',
          boxShadow: `0 4px 20px ${C.bronze}44`,
        }}
          onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = `0 8px 30px ${C.bronze}66`; }}
          onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = `0 4px 20px ${C.bronze}44`; }}
        >View Work</a>

        <a href="#contact" style={{
          padding: '14px 36px', borderRadius: '999px',
          border: `2px solid ${C.bronze}`, color: C.bronze,
          fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '.95rem',
          transition: 'all .2s', background: 'transparent',
        }}
          onMouseEnter={e => { e.target.style.background = C.bronze; e.target.style.color = '#fff'; }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = C.bronze; }}
        >Contact Me</a>
      </div>

      <style>{`
        @keyframes blink{0%,100%{opacity:1;}50%{opacity:0;}}
        @keyframes blobMove{0%{transform:translate(0,0) scale(1);}100%{transform:translate(-50px,50px) scale(1.12);}}
        @keyframes blobMove2{0%{transform:translate(0,0) scale(1);}100%{transform:translate(40px,-40px) scale(1.1);}}
      `}</style>
    </section>
  );
};

export default Hero;
