import React from 'react';

function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', marginTop: '2rem', background: '#f4f4f4' }}>
      <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
    </footer>
  );
}

export default Footer;