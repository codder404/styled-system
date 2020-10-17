import React from 'react';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './Styleguide/theme';

import {
  Text,
  Button,
  ButtonProps,
  ButtonPill,
  Card,
  ButtonStyled
} from './components';
import GlobalStyle from './styles/styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {/* <Text /> */}
      {/* <Button /> */}
      {/* <ButtonProps /> */}
      {/* <Card
        image="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg"
        title="I love Mochi"
        description="Mochi is amazing company"
      /> */}
      <ButtonStyled />
    </ThemeProvider>
  );
}

export default App;
