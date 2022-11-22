import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import type { ReactNode } from 'react';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
});

type ApolloProviderProps = {
  children: ReactNode | ReactNode[] | null;
};

export default function ApolloProviderWithClient(props: ApolloProviderProps) {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
