import React from 'react';

import buyAHouse from '../../../assets/icons/buy-a-house.svg';
import { MainContainer, Title } from './main.styles';
import ActionCard from '../../action-card/action-card.component';

const Main: React.FC = () => (
  <MainContainer>
    <Title>
      Let&apos;s plan your <strong>saving goal</strong>.
    </Title>
    <ActionCard title="Buy a house" subtitle="Saving a goal" icon={buyAHouse} />
  </MainContainer>
);

export default Main;
