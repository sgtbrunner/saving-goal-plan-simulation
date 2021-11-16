import CurrencyInput from '../inputs/currency-input/currency-input.component';
import MonthPickerInput from '../inputs/month-picker-input/month-picker-input.component';
import { CardContainer, CardTitle, CardForm } from './card.styles';
import { CardProps } from './card.types';

const Card = ({ title, subtitle, icon }: CardProps): JSX.Element => (
  <CardContainer>
    <CardTitle>
      <img src={icon} alt={title}></img>
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </CardTitle>
    <CardForm>
      <CurrencyInput label="Total amount" />
      <MonthPickerInput label="Reach goal by" />
    </CardForm>
  </CardContainer>
);

export default Card;