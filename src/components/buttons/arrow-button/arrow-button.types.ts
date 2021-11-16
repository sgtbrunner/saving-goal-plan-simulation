export const LEFT = 'left';
export const RIGHT = 'right';

export type ArrowButtonProps = {
  id: string;
  direction: typeof LEFT | typeof RIGHT;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
