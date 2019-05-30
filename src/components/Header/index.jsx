import React from 'react';

import Logo from '../Logo/index.jsx';
import InfoBar from '../InfoBar/index.jsx';

const Header = props => (
  <div className="header_wrapper">
    <div className="header_section">
      <Logo />
      {props.children}
    </div>
    <InfoBar />
  </div>
);

export default Header;
