import { gql, useMutation } from '@apollo/client';
import { Post } from '../../types';

export const UPDATE_POST = gql`
  mutation($post: UpdatePostInput!) {
    updatePost(input: $post) {
      post {
        id
        title
        description
      }
    }
    uploadFiles(files: $files) {

    }
  }
`;


export interface UpdatePostData {
  post: Post;
}

export interface PostInputType {
  post: {
    id: number;
    title?: string;
    description?: string;
  }
}