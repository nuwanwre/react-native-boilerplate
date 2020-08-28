import { gql } from '@apollo/client';

export const getAllTodos = gql`
    query GetAllTodos {
        todos @client {
            id
            text
            completed
        }
    }
`;
