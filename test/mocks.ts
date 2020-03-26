import { testQuery } from "../src/Graphql/Queries/TestQuery/TestQuery";

const graphqlMocks: any = [
    {
        request: {
            query: testQuery,
            variables: {
                userId: 1,
            }
        },
        result: {
            data: {
                users: {
                    firstname: "Test1",
                    lastname: "User1",
                    accountName: "Test User 1",
                    password: "testuser1",
                    salt: "salt1"
                }
            }
        }
    }
]

export default {
    graphqlMocks
};