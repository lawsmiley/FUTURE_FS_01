import React, { useState, useEffect } from 'react';
import { C } from '../theme';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const nav = {
    position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
    padding: scrolled ? '12px 32px' : '20px 32px',
    background: scrolled ? 'rgba(254,250,224,.88)' : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    transition: 'all .35s ease',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    borderBottom: scrolled ? `1px solid ${C.sage}55` : 'none',
    borderRadius: scrolled ? '0 0 20px 20px' : '0',
  };

  const logo = {
    fontFamily: 'Nunito, sans-serif', fontWeight: 900, fontSize: '1.4rem',
    color: C.bronze, cursor: 'pointer',
  };

  const linkS = {
    fontFamily: 'Nunito, sans-serif', fontSize: '.95rem', color: C.dark,
    cursor: 'pointer', transition: 'color .2s', fontWeight: 600,
    background: 'none', border: 'none',
  };

  const drawer = {
    position: 'fixed', top: 0, left: 0, width: '100%',
    background: 'rgba(254,250,224,.97)', backdropFilter: 'blur(16px)',
    padding: '90px 32px 40px',
    display: 'flex', flexDirection: 'column', gap: '24px',
    transition: 'transform .35s ease',
    transform: open ? 'translateY(0)' : 'translateY(-120%)',
    zIndex: 999, borderRadius: '0 0 28px 28px',
    boxShadow: open ? '0 8px 40px rgba(0,0,0,.08)' : 'none',
  };

  return (
    <>
      <nav style={nav}>
        <a href="#hero" style={logo}>KR.</a>
        <ul style={{ display: 'flex', gap: '28px', listStyle: 'none' }} className="nav-links">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} style={linkS}
                onMouseEnter={e => e.target.style.color = C.bronze}
                onMouseLeave={e => e.target.style.color = C.dark}>
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.6rem', color: C.dark }} className="burger" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </nav>
      <div style={drawer}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{ ...linkS, fontSize: '1.15rem' }}
            onClick={() => setOpen(false)}>{l}</a>
        ))}
      </div>
      <style>{`
        @media(max-width:768px){
          .nav-links{display:none!important;}
          .burger{display:block!important;}
        }
      `}</style>
    </>
  );
};

export default Navbar;
