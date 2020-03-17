import { getApolloClient } from "@Graphql";
import { testInsertMutation, testQuery, testDeleteMutation } from "./TestQuery";
import { ApolloClient } from 'apollo-boost';
import { TCacheShape } from '@Graphql/apollo';

let client: ApolloClient<TCacheShape>
let testId: string;
const testText: string = "Test Insert";

describe("GraphQL request tests", () => {
    beforeAll(async () => {
        client = await getApolloClient();
    })

    test("Insert Mutation Test", async () => {
        try {
            const result = await client
            .mutate({
                mutation: testInsertMutation,
                variables: {
                    text: testText,
                }
            })

            expect(result.data.insert_test.returning[0].id).toBeDefined();
            testId = result.data.insert_test.returning[0].id;
        } catch ({ graphQLErrors, networkError }) {
            console.log('mutation error: ', graphQLErrors[0].message);
        }
    });

    test("Test Query", async () => {
        try {
            const result = await client.query({
                query: testQuery,
                variables: {
                    id: testId,
                }
            });

            expect(result.data.test[0].text).toEqual(testText);
        } catch ({ graphQLErrors, networkError }) {
            console.log('query error: ', graphQLErrors[0].message);
        }

    });

    test("Delete Mutation Test", async () => {
        try {
            const result = await client.mutate({
                mutation: testDeleteMutation,
                variables: {
                    id: testId,
                }
            });

            expect(result.data.test[0].text).toEqual(testId);
        }  catch ({ graphQLErrors, networkError }) {
            console.log('mutation error: ', graphQLErrors[0].message);
        }
    });
});