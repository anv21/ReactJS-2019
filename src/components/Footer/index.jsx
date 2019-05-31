import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

const FooterWrapper = styled.div`
  background-color: #414141;
`;

const FooterSection = styled.div`
  padding: 20px 0;
  display: flex;
  width: 900px;
  margin: 0 auto;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterSection>
      <Logo />
    </FooterSection>
  </FooterWrapper>
);

export default Footer;
