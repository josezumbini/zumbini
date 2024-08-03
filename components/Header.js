import React from 'react';
import Image from 'next/image';

import logo from '../imgs/logo.png';

function Header() {
  return (
    <header className="slim-navbar sticky-top" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container d-flex justify-content-center">
        <nav>
          <Image src={logo} className="img-fluid" alt="Zumbini" width={200}/>
        </nav>
      </div>
    </header>
  );
}

export default Header;