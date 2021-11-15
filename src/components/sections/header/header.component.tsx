import React from 'react';

import originLogo from '../../../assets/icons/origin-logo.svg';
import { LogoContainer, Logo } from './header.styles';

const Header: React.FC = () => (
  <LogoContainer>
    <Logo src={originLogo} alt="Origin" />
  </LogoContainer>
);

export default Header;
