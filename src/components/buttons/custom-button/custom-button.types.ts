export const WHITE = 'white';

export type CustomButtonStyles = {
  color: string;
  textColor: string;
};

type ButtonColor = 'primary' | 'secondary' | typeof WHITE;
type ButtonType = 'button' | 'submit' | 'reset';

export type ButtonProps = {
  children: string;
  color?: ButtonColor;
  disabled?: boolean;
  textColor?: ButtonColor;
  type?: ButtonType;
};
