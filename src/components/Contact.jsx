import React from 'react';
import { C, sectionStyle, headingStyle } from '../theme';

const Contact = () => {
  const inputStyle = {
    width: '100%', padding: '16px 20px',
    borderRadius: '16px', border: `1.5px solid ${C.sage}`,
    background: '#fff', color: C.dark,
    fontFamily: 'Nunito, sans-serif', fontSize: '.95rem',
    outline: 'none', transition: 'border-color .2s, box-shadow .2s',
  };

  return (
    <section id="contact" style={{ ...sectionStyle, background: C.papaya }} className="reveal">
      <h2 style={headingStyle}>Get In Touch</h2>
      <form style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}
        onSubmit={e => e.preventDefault()}>
        <input placeholder="Your Name" style={inputStyle}
          onFocus={e => { e.target.style.borderColor = C.bronze; e.target.style.boxShadow = `0 0 0 3px ${C.bronze}22`; }}
          onBlur={e => { e.target.style.borderColor = C.sage; e.target.style.boxShadow = 'none'; }} />
        <input placeholder="Your Email" type="email" style={inputStyle}
          onFocus={e => { e.target.style.borderColor = C.bronze; e.target.style.boxShadow = `0 0 0 3px ${C.bronze}22`; }}
          onBlur={e => { e.target.style.borderColor = C.sage; e.target.style.boxShadow = 'none'; }} />
        <textarea placeholder="Your Message" rows={5} style={{ ...inputStyle, resize: 'vertical' }}
          onFocus={e => { e.target.style.borderColor = C.bronze; e.target.style.boxShadow = `0 0 0 3px ${C.bronze}22`; }}
          onBlur={e => { e.target.style.borderColor = C.sage; e.target.style.boxShadow = 'none'; }} />
        <button type="submit" style={{
          padding: '16px 0', borderRadius: '999px', border: 'none',
          background: C.bronze, color: '#fff',
          fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '1rem',
          cursor: 'pointer', transition: 'transform .2s, box-shadow .2s',
          boxShadow: `0 4px 20px ${C.bronze}44`,
        }}
          onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = `0 8px 28px ${C.bronze}55`; }}
          onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = `0 4px 20px ${C.bronze}44`; }}
        >Send Message</button>
      </form>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
        {[
          { icon: 'fab fa-github', url: 'https://github.com/lawsmiley' },
          { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/kushal-raj04/' },
          { icon: 'fas fa-envelope', url: 'mailto:kushalraj04@gmail.com' },
        ].map(s => (
          <a key={s.icon} href={s.url} target="_blank" rel="noreferrer" style={{
            width: '48px', height: '48px', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: `1.5px solid ${C.sage}`, color: C.dark,
            fontSize: '1.2rem', transition: 'all .25s', background: '#fff',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = C.bronze; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = C.bronze; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = C.dark; e.currentTarget.style.borderColor = C.sage; }}
          >
            <i className={s.icon}></i>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
