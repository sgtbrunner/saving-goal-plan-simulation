import CurrencyInput from '../inputs/currency-input/currency-input.component';
import MonthPickerInput from '../inputs/month-picker-input/month-picker-input.component';
import Summary from '../summary/summary.component';
import CustomButton from '../buttons/custom-button/custom-button.component';
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
    <CardForm
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <CurrencyInput label="Total amount" />
      <MonthPickerInput label="Reach goal by" />
    </CardForm>
    <Summary
      goalAmount={25000}
      reachDateMonth="October"
      reachDateYear="2021"
      monthlyAmount={520.83}
      monthlyDeposits={48}
    />
    <CustomButton>Confirm</CustomButton>
  </CardContainer>
);

export default Card;
