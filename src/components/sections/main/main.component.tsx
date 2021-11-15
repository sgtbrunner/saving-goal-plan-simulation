import React from 'react';

import { MainContainer, Title } from './main.styles';
import ActionCard from '../../action-card/action-card.component';

const Main: React.FC = () => (
  <MainContainer>
    <Title>
      Let&apos;s plan your <strong>saving goal</strong>.
    </Title>
    <ActionCard />
  </MainContainer>
);

export default Main;
