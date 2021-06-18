import { gql } from '@apollo/client';

export const LIST_HIDDEN_QUERY = gql`
  {
    listHidden @client
  }
`;

export interface ListHiddenData {
  listHidden: boolean;
}
