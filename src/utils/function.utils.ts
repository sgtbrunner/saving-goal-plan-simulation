export const clearInvalidCharacters = (value: string): string =>
  value.replace(/\D|^0+/g, '');

export const convertInputToNumber = (value: string): number => {
  if (value.includes('.')) {
    const [decimalPart, fractionalPart] = value.split('.');
    return Number(
      [
        clearInvalidCharacters(decimalPart),
        '.',
        clearInvalidCharacters(fractionalPart),
      ].join('')
    );
  }

  return Number(value.replace(/\D|^0+/g, ''));
};
