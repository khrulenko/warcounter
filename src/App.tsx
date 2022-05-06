import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import counterTheme from './styles/counterTheme';
import { Counter } from './Counter';

export const App = () => (
  <ChakraProvider theme={counterTheme}>
    <Counter />
  </ChakraProvider>
);
