import React from 'react';
import Image from 'next/image';

import logo from '../imgs/logo.png';
import ShareSection from './ShareSection';

function Footer() {
  return (
    <footer className="slim-landing-footer" style={{ backgroundColor: '#FFFFFF' }}>
      <ShareSection />
      <div className="text-center mb-3">
        <Image src={logo} alt="Zumbini" className="img-fluid" width="200" />
      </div>
      <div className="container">
        <h4 className="text-center" style={{ color: '#EBC944' }}>Partido Novo</h4>
        <a href="#top" className="text-muted">
          <i className="fa fa-chevron-circle-up" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;