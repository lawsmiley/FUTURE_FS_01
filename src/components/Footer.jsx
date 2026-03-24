import React from 'react';
import { C } from '../theme';

const Footer = () => (
  <footer style={{
    textAlign: 'center', padding: '36px 24px',
    borderTop: `1px solid ${C.sage}`,
    fontSize: '.85rem', color: C.dark2,
    fontFamily: 'Nunito, sans-serif',
    background: C.beige,
  }}>
    <p>© {new Date().getFullYear()} T Kushal Raj. All rights reserved.</p>
    <p style={{ marginTop: '8px', color: C.textLight, fontSize: '.8rem' }}>Built with React ⚡</p>
  </footer>
);

export default Footer;
