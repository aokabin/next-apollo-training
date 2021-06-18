import { gql, InMemoryCache, Resolvers } from '@apollo/client';
import { LIST_HIDDEN_QUERY, ListHiddenData } from './queries/list-hidden.query';

export const typeDefs = gql`
  extend type Mutation {
    ToggleListHidden: Boolean!
  }
`;

export const resolvers: Resolvers = {
  Mutation: {
    toggleListHidden: (_root, _args, ctx, _info) => {
      const cache: InMemoryCache = ctx.cache;
      const { listHidden } = cache.readQuery<ListHiddenData, null>({
        query: LIST_HIDDEN_QUERY,
      });

      cache.writeQuery<ListHiddenData, null>({
        query: LIST_HIDDEN_QUERY,
        data: { listHidden: !listHidden },
      });

      return !listHidden;
    },
  },
};