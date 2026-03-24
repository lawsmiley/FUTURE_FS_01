/* ── Color Palette & Shared Theme ── */
export const C = {
  sage:    '#ccd5ae',
  beige:   '#e9edc9',
  corn:    '#fefae0',
  papaya:  '#faedcd',
  bronze:  '#d4a373',
  dark:    '#5c4a32',
  dark2:   '#7a6548',
  text:    '#3d3222',
  textLight:'#6b5b45',
};

export const sectionStyle = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '100px 24px 80px',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

export const headingStyle = {
  fontFamily: 'Nunito, sans-serif',
  fontSize: '2.2rem',
  fontWeight: 800,
  color: C.dark,
  marginBottom: '48px',
  textAlign: 'center',
  letterSpacing: '0.5px',
};

export const pill = {
  display: 'inline-block',
  padding: '8px 20px',
  borderRadius: '999px',
  fontSize: '.88rem',
  fontFamily: 'Nunito, sans-serif',
  background: '#fff',
  color: C.dark,
  border: `1.5px solid ${C.sage}`,
  fontWeight: 600,
  transition: 'all .25s ease',
};

export const cardStyle = {
  padding: '28px',
  borderRadius: '24px',
  background: '#fff',
  border: `1.5px solid ${C.sage}aa`,
  boxShadow: '0 2px 16px rgba(0,0,0,.04)',
  transition: 'transform .3s ease, box-shadow .3s ease, border-color .3s ease',
};
