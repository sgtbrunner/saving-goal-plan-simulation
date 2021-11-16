import { ArrowButtonProps } from './arrow-button.types';
import Arrow from '../../../assets/icons/arrow.svg';
import { Button } from './arrow-button.styles';

const ArrowButton = ({
  direction = 'right',
  disabled = false,
}: ArrowButtonProps): JSX.Element => (
  <Button direction={direction} disabled={disabled} type="button">
    <img src={Arrow} alt={`arrow-${direction}`} />
  </Button>
);

export default ArrowButton;
