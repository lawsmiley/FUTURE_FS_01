import React from 'react';
import { C, sectionStyle, headingStyle } from '../theme';

const EXP = [
  {
    role: 'Full Stack Intern', company: 'Future Interns', date: 'June 2025 – Present',
    points: ['Building portfolio and production-grade intern projects.', 'Working on full-stack web and mobile applications.'],
  },
  {
    role: 'Freelance Mobile Developer', company: 'Self-Employed', date: '2023 – 2025',
    points: ['3 indie apps published on App Store and Google Play Store.', 'End-to-end development, design, and deployment.'],
  },
  {
    role: 'Game Jam Participant', company: 'Ludum Dare 54 & Global Game Jam 2024', date: '2023 – 2024',
    points: ['Top 15% ranking.', 'Rapid prototyping and collaborative game development.'],
  },
  {
    role: 'B.Tech Computer Science', company: 'PES University, Bengaluru', date: '2022 – 2026',
    points: ['Studying core CS fundamentals, DSA, and software engineering.'],
  },
];

const Experience = () => (
  <section id="experience" style={{ ...sectionStyle, background: C.sage }} className="reveal">
    <h2 style={headingStyle}>Experience & Education</h2>
    <div style={{ position: 'relative', maxWidth: '620px', margin: '0 auto', paddingLeft: '36px' }}>
      {/* timeline line */}
      <div style={{
        position: 'absolute', left: '10px', top: 0, bottom: 0, width: '3px',
        background: `linear-gradient(to bottom, ${C.bronze}, ${C.beige})`,
        borderRadius: '99px',
      }} />

      {EXP.map((e, i) => (
        <div key={i} className="reveal" style={{ marginBottom: '44px', position: 'relative' }}>
          {/* dot */}
          <div style={{
            position: 'absolute', left: '-32px', top: '6px',
            width: '14px', height: '14px', borderRadius: '50%',
            background: C.bronze, border: `3px solid ${C.corn}`,
            boxShadow: `0 0 12px ${C.bronze}44`,
          }} />
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.82rem', color: C.dark2, fontWeight: 600, marginBottom: '4px' }}>{e.date}</p>
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1.15rem', color: C.dark, marginBottom: '4px', fontWeight: 800 }}>{e.role}</h3>
          <p style={{ fontSize: '.9rem', color: C.bronze, marginBottom: '10px', fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}>{e.company}</p>
          <ul style={{ paddingLeft: '18px' }}>
            {e.points.map((pt, pi) => (
              <li key={pi} style={{ fontSize: '.92rem', color: C.text, lineHeight: 1.75, listStyle: 'disc', fontFamily: 'Nunito, sans-serif' }}>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
