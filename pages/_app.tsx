import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';

import { StyledThemeProvider } from '@definitions/styled-components';
import { appWithTranslation } from '@i18n';
import queryClient from '@services/cache';
import { Feedback } from '@services/feedback';
import { initializeApollo } from '@services/graphql';
import { ProgressLoad } from '@ui/components';
import GlobalStyle from '@ui/styles/globalStyles';
import 'tailwindcss/tailwind.css';

function WhimApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const apolloClient = initializeApollo();

  return (
    <>
      <GlobalStyle />
      <StyledThemeProvider>
        <ApolloProvider client={apolloClient}>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <ProgressLoad />
              <Feedback />
              <Component {...pageProps} key={router.route} />
            </Hydrate>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ApolloProvider>
      </StyledThemeProvider>
    </>
  );
}

export default WhimApp;
