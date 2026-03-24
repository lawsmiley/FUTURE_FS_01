import React from 'react';
import { C, sectionStyle, headingStyle, cardStyle, pill } from '../theme';

const PROJECTS = [
  {
    name: 'PixelRush', type: 'Mobile Arcade Game',
    stack: ['React Native', 'Phaser.js', 'Firebase', 'JavaScript'],
    desc: 'Fast-paced 2D arcade game with procedurally generated levels and Firebase leaderboards. 50k+ Play Store downloads.',
    links: [{ label: 'GitHub', url: '#' }, { label: 'Live Demo', url: '#' }],
  },
  {
    name: 'TaskFlow', type: 'Cross-Platform Productivity App',
    stack: ['React Native', 'Expo', 'TypeScript', 'AsyncStorage'],
    desc: 'Kanban boards, Pomodoro timer, offline-first sync. 4.7★ on App Store.',
    links: [{ label: 'GitHub', url: '#' }, { label: 'App Store', url: '#' }],
  },
  {
    name: 'NightCrawler RPG', type: '2D Unity RPG Game',
    stack: ['Unity', 'C#', 'Aseprite'],
    desc: 'Top-down RPG with procedural dungeon generation, AI enemies, atmospheric sound design. Available on itch.io.',
    links: [{ label: 'GitHub', url: '#' }, { label: 'itch.io', url: '#' }],
  },
  {
    name: 'CryptoWatch', type: 'Real-Time Finance App',
    stack: ['React Native', 'Node.js', 'WebSocket', 'REST APIs'],
    desc: 'Live crypto price tracker with custom alerts, portfolio tracking, and animated charts.',
    links: [{ label: 'GitHub', url: '#' }, { label: 'Live Demo', url: '#' }],
  },
];

const Projects = () => (
  <section id="projects" style={{ ...sectionStyle, background: C.corn }} className="reveal">
    <h2 style={headingStyle}>Projects</h2>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
    }}>
      {PROJECTS.map(p => (
        <div key={p.name} className="reveal" style={{
          ...cardStyle,
          background: C.beige,
          cursor: 'default',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-6px)';
            e.currentTarget.style.boxShadow = `0 12px 36px ${C.bronze}33`;
            e.currentTarget.style.borderColor = C.bronze;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,.04)';
            e.currentTarget.style.borderColor = `${C.sage}aa`;
          }}
        >
          <h3 style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1.2rem', color: C.dark, marginBottom: '4px', fontWeight: 800 }}>{p.name}</h3>
          <p style={{ fontSize: '.82rem', color: C.textLight, marginBottom: '14px', fontFamily: 'Nunito, sans-serif', fontWeight: 600 }}>{p.type}</p>
          <p style={{ fontSize: '.95rem', color: C.text, lineHeight: 1.75, marginBottom: '18px', fontFamily: 'Nunito, sans-serif' }}>{p.desc}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
            {p.stack.map(t => (
              <span key={t} style={{ ...pill, fontSize: '.76rem', padding: '5px 12px', background: C.corn }}>{t}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '14px' }}>
            {p.links.map(l => (
              <a key={l.label} href={l.url} style={{
                fontSize: '.88rem', color: C.bronze, fontWeight: 700,
                fontFamily: 'Nunito, sans-serif',
                borderBottom: `2px solid ${C.bronze}44`,
                paddingBottom: '2px', transition: 'border-color .2s',
              }}
                onMouseEnter={e => e.target.style.borderColor = C.bronze}
                onMouseLeave={e => e.target.style.borderColor = `${C.bronze}44`}
              >{l.label} →</a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
