import React from 'react';
import styled from 'styled-components';

interface Props {
  bg: string;
}

const Button = styled.button<Props>`
  background: ${ props => props.bg ? props.bg : 'orange'};
  color: #000;
  font-size: 15px;
  padding: 20px 40px;
  border: none;
  border-radius: 3px;
  font-weight: 500;
  margin: 20px;
  cursor: pointer;

  :hover {
    filter: brightness(90%);
  }
`;

function ButtonProps() {
  return (
    <>
      <Button bg="#FF595E">Danger Button</Button>
       <Button bg="">Default Button</Button>
    </>
  )
}

export default ButtonProps;