import { WHITE } from '../../../utils/constants.utils';
import { Button } from './custom-button.styles';
import { ButtonProps } from './custom-button.types';

const CustomButton = ({
  color = 'primary',
  children,
  disabled = false,
  textColor = WHITE,
  type = 'submit',
}: ButtonProps): JSX.Element => (
  <Button color={color} disabled={disabled} textColor={textColor} type={type}>
    {children}
  </Button>
);

export default CustomButton;
