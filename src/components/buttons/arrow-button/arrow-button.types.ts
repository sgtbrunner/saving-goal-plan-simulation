import { LEFT, RIGHT } from '../../../utils/constants.utils';

export type ArrowButtonProps = {
  id: string;
  direction?: typeof LEFT | typeof RIGHT;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
