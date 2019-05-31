import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';
import InfoBar from '../InfoBar';
import Background from '../../assets/img/background.jpg';

const HeaderSection = styled.div`
  width: 900px;
  margin: 0 auto;
  padding-top: 20px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${Background});
`;

const Header = props => {
  const { children } = props;

  return (
    <HeaderWrapper>
      <HeaderSection>
        <Logo />
        {children}
      </HeaderSection>
      <InfoBar />
    </HeaderWrapper>
  );
};

export default Header;
