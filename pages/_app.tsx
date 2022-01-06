import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';

import { StyledThemeProvider } from '@definitions/styled-components';
import { appWithTranslation } from '@i18n';
import { initializeApollo } from '@services/graphql';

import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = initializeApollo();
  const queryClient = new QueryClient();
  return (
    <StyledThemeProvider>
      <ApolloProvider client={apolloClient}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </ApolloProvider>
    </StyledThemeProvider>
  );
}

export default MyApp;
