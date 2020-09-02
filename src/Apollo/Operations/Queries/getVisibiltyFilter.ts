import { gql } from '@apollo/client';

export const getVisibilityFilter = gql`
    query GetVisibilityFilter {
        visibilityFilter @client {
            id
            displayName
        }
    }
`;
