import { ApolloClient } from 'apollo-boost';
import { TCacheShape } from '@Graphql/apollo';
import { getApolloClient } from "@Graphql";
import { testInsertUserMutation, testQuery, testUserDeleteMutation, testCachedVisibilityFilter, testInsertTaskMutation, testCacheTask, testTaskDeleteMutation, testAddTaskToCache } from "./TestQuery";

let client: ApolloClient<TCacheShape>
let userId: number; 
let taskId: Number;
const taskDescription: string = "Test Description";
const taskTitle: string = "Test Title";

describe("GraphQL request tests", () => {
    beforeAll(async () => {
        client = await getApolloClient();
    })

    test("Query Cache Test", async () => {
        try {
            const result = await client
            .query({
                query: testCachedVisibilityFilter,
            })

            expect(result.data.visibilityFilter).toBeDefined();
        } catch ({ graphQLErrors, networkError }) {
            console.log('mutation error: ', graphQLErrors[0].message);
        }
    });

    test("Insert User Mutation Test", async () => {
        try {
            const result = await client
            .mutate({
                mutation: testInsertUserMutation,
                variables: {
                    accountName: "testUser8",
                    firstName: "test1",
                    lastName: "user1",
                    salt: "salt",
                    password: "testuser1",
                    uuid: "e9c51382-6cd0-11ea-bc55-0242ac130010",
                }
            })

            expect(result.data.insert_users.returning[0].id).toBeDefined();
            userId = result.data.insert_users.returning[0].id;
        } catch ({ graphQLErrors, networkError }) {
            console.log('mutation error: ', graphQLErrors);
        }
    });

    test("Test Query for User", async () => {
        try {
            const result = await client.query({
                query: testQuery,
                variables: {
                    userId
                }
            });

            expect(result.data.users[0].id).toEqual(userId);
        } catch ({ graphQLErrors, networkError }) {
            console.log('query error: ', graphQLErrors[0].message);
        }
    });

    test("Test Mutation for Inserting a Task", async () => {
        try {
            const result = await client.mutate({
                mutation: testInsertTaskMutation,
                variables: {
                    description: taskDescription,
                    title: taskTitle,
                    userId
                }
            });

            expect(result.data.insert_user_tasks.returning[0].task.id).toBeDefined();
            taskId = result.data.insert_user_tasks.returning[0].task.id;
        } catch ({ graphQLErrors, networkError }) {
            console.log('mutation error: ', graphQLErrors[0].message);
        }
    });

    test("Test Query for Writing a Task to Cache", async () => {
        try {
            if (taskId) {
                const result = await client.mutate({
                    mutation: testAddTaskToCache,
                    variables: {
                        description: taskDescription,
                        title: taskTitle,
                        taskId
                    }
                });
    
                expect(result.data.testAddToTasks.length).toBeGreaterThan(0);
            }
        } catch ({ graphQLErrors, networkError }) {
            console.log('mutation error: ', graphQLErrors);
        }
    });

    test("Test Query for Reading tasks from Cache", async () => {
        try {
            const result = await client.query({
                query: testCacheTask,
            });

            expect(result.data.testGetTasks).toBeDefined();
        } catch ({ graphQLErrors, networkError }) {
            console.log('mutation error: ', graphQLErrors);
        }
    });

    test("Delete User Task Test", async () => {
        try {
            const result = await client.mutate({
                mutation: testTaskDeleteMutation,
                variables: {
                    taskId,
                }
            });

            expect(result.data.delete_user_tasks.returning[0].task_id).toEqual(taskId);
            expect(result.data.delete_tasks.returning[0].id).toEqual(taskId);
        }  catch ({ graphQLErrors, networkError }) {
            console.log('mutation error: ', graphQLErrors);
        }
    });

    test("Delete User Mutation Test", async () => {
        try {
            const result = await client.mutate({
                mutation: testUserDeleteMutation,
                variables: {
                    userId,
                }
            });

            expect(result.data.delete_users.returning[0].id).toEqual(userId);
        }  catch ({ graphQLErrors, networkError }) {
            console.log('mutation error: ', graphQLErrors);
        }
    });
});