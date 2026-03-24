import React from 'react';
import { C, sectionStyle, headingStyle, cardStyle } from '../theme';

const About = () => {
  const stats = [
    { num: '2+', label: 'Years Exp' },
    { num: '3', label: 'Apps Published' },
    { num: '50k+', label: 'Downloads' },
  ];

  return (
    <section id="about" style={{ ...sectionStyle, background: C.beige }} className="reveal">
      <h2 style={headingStyle}>About Me</h2>

      <p style={{
        maxWidth: '720px', margin: '0 auto 36px', textAlign: 'center',
        lineHeight: 1.85, fontSize: '1.05rem', color: C.text,
        fontFamily: 'Nunito, sans-serif',
      }}>
        Passionate mobile and game developer with 2+ years building cross-platform apps
        using React Native. I love creating immersive experiences — from sleek productivity
        apps to fast-paced 2D games. Currently exploring WebGL and Unity for richer
        interactive experiences.
      </p>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
        {['📍 Bengaluru, India', '✉️ kushalraj04@gmail.com'].map(t => (
          <span key={t} style={{
            display: 'inline-block', padding: '10px 22px',
            borderRadius: '999px', fontSize: '.9rem',
            fontFamily: 'Nunito, sans-serif',
            background: C.corn, color: C.dark,
            border: `1.5px solid ${C.sage}`,
            fontWeight: 600,
          }}>{t}</span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {stats.map(s => (
          <div key={s.label} style={{
            ...cardStyle,
            textAlign: 'center', padding: '24px 36px', minWidth: '140px',
            background: C.corn,
          }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '2rem', fontWeight: 900, color: C.bronze }}>{s.num}</div>
            <div style={{ fontSize: '.85rem', color: C.textLight, marginTop: '6px', fontFamily: 'Nunito, sans-serif', fontWeight: 600 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
