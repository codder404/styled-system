import React from 'react';

import { Text, Button, ButtonProps, Card } from './components';
import GlobalStyle from './styles/styles';

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Text /> */}
      {/* <Button /> */}
      {/* <ButtonProps /> */}
      <Card
        image="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg"
        title="I love Mochi"
        description="Mochi is amazing company"
      />
    </>
  );
}

export default App;
