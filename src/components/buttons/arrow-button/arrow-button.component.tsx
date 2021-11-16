import { ArrowButtonProps, RIGHT } from './arrow-button.types';
import ArrowLeft from '../../../assets/icons/arrow-left.svg';
import ArrowRight from '../../../assets/icons/arrow-right.svg';
import { Button } from './arrow-button.styles';

const ArrowButton = ({
  id,
  direction = RIGHT,
  disabled = false,
  onClick,
}: ArrowButtonProps): JSX.Element => (
  <Button id={id} disabled={disabled} type="button" onClick={onClick}>
    <img
      src={direction === RIGHT ? ArrowRight : ArrowLeft}
      alt={`arrow-${direction}`}
    />
  </Button>
);

export default ArrowButton;
