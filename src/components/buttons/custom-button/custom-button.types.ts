import { WHITE } from '../../../utils/constants.utils';
import { BUTTON } from '../../../utils/test.utils';

export type CustomButtonStyles = {
  color: string;
  textColor: string;
};

type ButtonColor = 'primary' | 'secondary' | typeof WHITE;
type ButtonType = typeof BUTTON | 'submit' | 'reset';

export type ButtonProps = {
  children: string;
  color?: ButtonColor;
  disabled?: boolean;
  textColor?: ButtonColor;
  type?: ButtonType;
};
