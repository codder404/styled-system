import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.space.L}px;
  margin: ${({ theme }) => theme.space.M}px;
  width: 200px;
  border: none;
  color: #FFF;
  font-size: 15px;
  font-weight: 700;
  border-radius: 5px;
  letter-spacing: 2px;
  cursor: pointer;

  :hover {
    filter: brightness(90%);
  }
`;

function Button() {
  return (
    <ButtonStyled>
      Hello Mochi
    </ButtonStyled>
  )
}

export default Button;