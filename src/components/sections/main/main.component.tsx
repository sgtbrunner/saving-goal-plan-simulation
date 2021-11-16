import React from 'react';

import buyAHouse from '../../../assets/icons/buy-a-house.svg';
import { MainContainer, Title } from './main.styles';
import Card from '../../card/card.component';

const Main: React.FC = () => (
  <MainContainer>
    <Title>
      Let&apos;s plan your <strong>saving goal</strong>.
    </Title>
    <Card title="Buy a house" subtitle="Saving goal" icon={buyAHouse} />
  </MainContainer>
);

export default Main;
