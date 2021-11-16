import styled from 'styled-components';

export const Button = styled.button`
  padding: 20px;
  border: none;
  background-color: transparent;
  color: var(--blue-gray-300-color);

  :disabled {
    cursor: not-allowed;
  }
`;
