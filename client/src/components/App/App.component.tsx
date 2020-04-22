import React from 'react';
import AppRoutes from 'components/AppRoutes';
import ApolloProvider from 'providers/ApolloProvider';
import ReactRouterProvider from 'providers/ReactRouterProvider';
import GlobalStyles from 'components/GlobalStyles';

function App() {
  return (
    <ApolloProvider>
      <ReactRouterProvider>
        <GlobalStyles/>
        <AppRoutes/>
      </ReactRouterProvider>
    </ApolloProvider>
  );
}

export default App;
