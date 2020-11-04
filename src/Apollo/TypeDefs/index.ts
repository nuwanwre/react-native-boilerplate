import { gql } from '@apollo/client';

const typeDefs = gql`
    type Todo {
        id: Int!
        text: String!
        completed: Boolean!
    }

    extend type Query {
        todos: [Todo]
    }
`;

export default typeDefs;
