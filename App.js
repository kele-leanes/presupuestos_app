import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Screens from './src/screens';
import { theme } from './src/utils/paperTheme';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Screens />
    </PaperProvider>
  );
};

export default App;
