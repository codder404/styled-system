import React from 'react';
import styled from 'styled-components';

import Button from './Button';

type PropsPill = {
  bg?: boolean;
}

const ButtonPill = styled.button<PropsPill>`
  border-radius: 24px;
  background: transparent;
  border: 1px solid;
  color: ${({ bg }) => (bg ? 'orange' : '#FFF')};
  border-color: ${({ bg }) => (bg ? 'orange' : '#FFF')};
  font-size: 15px;
  padding: 15px 45px;
  font-weight: 500;
  margin: 20px;
  cursor: pointer;

  :hover {
    filter: brightness(90%);
  }
`;

function ButtonPillComp() {
  return (
    <ButtonPill bg>Button Fill</ButtonPill>
  )
}

export default ButtonPillComp;