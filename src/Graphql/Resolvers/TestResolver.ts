import { Resolver, gql } from 'apollo-boost';

const query = gql
`
    query getTasks {
        tasks
    }
`

export const testGetTasks: Resolver = (_, args, { cache }): any => {
    try {
        const queryTaskResult = cache
            .readQuery({
                query
            });
    
        if (queryTaskResult) {
            return queryTaskResult.tasks;
        }

        return [];
    } catch(e) {
        console.log("Resolver encountered an error: ", e);
        return [];
    }
};




