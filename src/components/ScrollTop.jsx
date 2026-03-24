import React, { useState, useEffect } from 'react';
import { C } from '../theme';

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const h = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  if (!show) return null;

  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
      position: 'fixed', bottom: '28px', right: '28px',
      width: '48px', height: '48px', borderRadius: '50%',
      background: C.bronze, color: '#fff',
      border: 'none', fontSize: '1.3rem', cursor: 'pointer',
      boxShadow: `0 4px 20px ${C.bronze}44`,
      transition: 'transform .2s', zIndex: 999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Nunito, sans-serif',
    }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.12)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >↑</button>
  );
};

export default ScrollTop;
