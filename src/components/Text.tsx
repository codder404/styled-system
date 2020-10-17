import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  color: orange;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.5px;
`;

function TextComp() {
  return (
    <Text>
      I love Mochi
    </Text>
  )
}

export default TextComp;