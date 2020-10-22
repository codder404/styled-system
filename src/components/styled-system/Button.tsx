import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.space.L};
  margin: ${({ theme }) => theme.space.M};
  width: 200px;
  border: none;
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.L};
  font-weight: 700;
  border-radius: ${({ theme }) => theme.radii.XXL};
  letter-spacing: 2px;
  cursor: pointer;

  :hover {
    filter: brightness(90%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.S}) {
    background: ${({ theme }) => theme.colors.disabled};
  }
`;

function Button() {
  return <ButtonStyled>Hello Mochi</ButtonStyled>;
}

export default Button;
