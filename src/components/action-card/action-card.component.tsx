import CurrencyInput from '../inputs/currency-input/currency-input.component';
import { ActionCardContainer, CardTitle } from './action-card.styles';

type CardType = {
  title: string;
  subtitle: string;
  icon: string;
  buttonText?: string;
};

const ActionCard = ({ title, subtitle, icon }: CardType): JSX.Element => (
  <ActionCardContainer>
    <CardTitle>
      <img src={icon} alt={title}></img>
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </CardTitle>
    <form>
      <CurrencyInput label="Total amount" />
    </form>
  </ActionCardContainer>
);

export default ActionCard;
