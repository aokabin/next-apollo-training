import { AppProps } from "next/app";
import { resolvers, typeDefs } from '../graphql/resolvers';
import { LIST_HIDDEN_QUERY, ListHiddenData, } from '../graphql/queries/list-hidden.query';
import "tailwindcss/tailwind.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const cache = new InMemoryCache();
cache.writeQuery<ListHiddenData, null>({
  query: LIST_HIDDEN_QUERY,
  data: {
    listHidden: true,
  },
});
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache,
  typeDefs,
  resolvers,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
