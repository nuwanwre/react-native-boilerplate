import gql from 'graphql-tag';

export const testInsertMutation = gql
`
    mutation TestInsertMutation($text: String!) {
        insert_test(objects: {text: $text}) {
            returning {
                id
            }
        }
    }
`;

export const testQuery = gql
`
    query TestQuery($id: uuid!) {
        test(where: {id : {_eq: $id}}) {
            id
            text
        }
    }
`;

export const testDeleteMutation = gql
`
    mutation TestDeleteMutation($id: uuid!) {
        delete_test(where: {id: {_eq: $id}}) {
            returning {
                id
            }
        }
    }
`;
