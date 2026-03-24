import React from 'react';
import { C, sectionStyle, headingStyle, pill } from '../theme';

const SKILLS = {
  Mobile: ['React Native', 'Expo', 'TypeScript', 'JavaScript', 'Android'],
  'Game Dev': ['Unity', 'C#', 'Phaser.js', 'WebGL', 'Aseprite'],
  Web: ['Node.js', 'Python', 'REST APIs', 'Firebase'],
  Tools: ['Git', 'Figma', 'VS Code'],
};

const Skills = () => (
  <section id="skills" style={{ ...sectionStyle, background: C.papaya }} className="reveal">
    <h2 style={headingStyle}>Skills</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '720px', margin: '0 auto' }}>
      {Object.entries(SKILLS).map(([cat, items]) => (
        <div key={cat}>
          <h3 style={{
            fontFamily: 'Nunito, sans-serif', fontSize: '1.05rem', color: C.dark2,
            marginBottom: '16px', fontWeight: 700,
          }}>{cat}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {items.map(sk => (
              <span key={sk} className="reveal" style={{
                ...pill,
                background: C.corn,
              }}
                onMouseEnter={e => { e.target.style.background = C.bronze; e.target.style.color = '#fff'; e.target.style.borderColor = C.bronze; }}
                onMouseLeave={e => { e.target.style.background = C.corn; e.target.style.color = C.dark; e.target.style.borderColor = C.sage; }}
              >{sk}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
