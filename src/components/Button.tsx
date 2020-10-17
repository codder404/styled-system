import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: orange;
  color: #FFF;
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

function ButtonComp() {
  return (
    <Button>
      Hello Mochi
    </Button>
  )
}

export default ButtonComp;