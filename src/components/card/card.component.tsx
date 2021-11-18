import { CARD } from '../../utils/test.utils';
import { CardContainer, CardTitle, CardForm } from './card.styles';
import { CardProps } from './card.types';
import CustomButton from '../buttons/custom-button/custom-button.component';
import CurrencyInput from '../inputs/currency-input/currency-input.component';
import MonthPickerInput from '../inputs/month-picker-input/month-picker-input.component';
import Summary from '../summary/summary.component';

const Card = ({ title, subtitle, icon }: CardProps): JSX.Element => (
  <CardContainer data-testid={CARD}>
    <CardTitle>
      <img src={icon} alt={title}></img>
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </CardTitle>
    <CardForm
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <CurrencyInput label="Total amount" />
      <MonthPickerInput label="Reach goal by" />
    </CardForm>
    <Summary />
    <CustomButton>Confirm</CustomButton>
  </CardContainer>
);

export default Card;
