import { Resolver, gql } from 'apollo-boost';

const query = gql
`
    query getTasks {
        tasks @client
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

export const testAddToTasks: Resolver = (_, {description, title, taskId}: {description: string, title: string, taskId: number }, {cache}): any => {
    try {
        const queriedTasks = cache
            .readQuery({
                query
            });

        if (queriedTasks) {
            const {tasks} = queriedTasks;
            
            tasks.push({
                description,
                title,
                taskId
            });

            cache.writeQuery({
                query,
                data: tasks
            });

            return tasks;
        }
        return [];
    }
    catch(e) {
        console.log("Resolver encountered an error: ", e);
        return [];
    }
}




