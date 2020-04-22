import React, { FunctionComponent } from 'react';
import { ApolloProvider as Provider } from '@apollo/react-hooks';
import client from './ApolloProvider.client';
import { ApolloProviderProps } from './ApolloProvider.types';

const ApolloProvider: FunctionComponent<ApolloProviderProps> = ({ children }) => {
    return (
        <Provider client={client}>
            {children}
        </Provider>
    );
}

export default ApolloProvider;