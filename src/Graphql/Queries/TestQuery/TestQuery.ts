import gql from 'graphql-tag';

export const testInsertUserMutation = gql
`
    mutation TestInsertUserMutation($accountName: String!, $firstName: String!, $lastName: String!, $salt: String!, $password: String!, $uuid: uuid!) {
        insert_users(objects: {account_name: $accountName, first_name: $firstName, last_name: $lastName, salt: $salt, password: $password, uuid: $uuid}) {
            returning {
                id
                uuid
            }
        }
    }
`;

export const testQuery = gql
`
    query testQuery($userId: Int!) {
        users(where: {id: {_eq: $userId}}) {
            id
        }
    }
`;

export const testUserDeleteMutation = gql
`
    mutation TestUserDeleteMutation($userId: Int!) {
        delete_users(where: {id: {_eq: $userId}}) {
            returning {
                id
            }
        }
    }
`;

export const testTaskDeleteMutation = gql
`
    mutation TestTaskDeleteMutation($taskId: Int!) {
        delete_user_tasks(where: {task_id: {_eq: $taskId }}) {
            returning {
                task_id
            }
        }
        delete_tasks(where: {id: {_eq: $taskId }}) {
            returning {
                id
            }
        }
    }
`;

export const testCachedVisibilityFilter = gql
`
    query TestCachedVisibilityFitler {
        visibilityFilter @client
    }
`;

export const testCacheTask = gql
`
    query TestCachedTasks{
        testGetTasks @client
    }
`;

export const testAddTaskToCache = gql
`
    mutation TestAddTaskToCache($description: String!, $title: String!, $taskId: Int!) {
        testAddToTasks(description: $description, title: $title, taskId: $taskId) @client
    }
`;

export const testInsertTaskMutation = gql
`
    mutation TestInsertTaskMutation($description: String!, $title: String!, $userId: Int!) {
        insert_user_tasks(objects: {task: {data: {description: $description, title: $title}}, user_id: $userId}) {
            returning {
                task {
                    id
                }
            }
        }
    }
`;

