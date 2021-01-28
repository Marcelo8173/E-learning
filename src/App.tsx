import React from 'react';
import Routes from './routes';
import GlobalStyle from './style/globalStyle';
import TabsProvider from './hooks/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <TabsProvider>
        <Routes />
      </TabsProvider>
    </>
  );
}

export default App;
