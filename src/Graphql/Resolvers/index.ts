import { Resolvers } from 'apollo-boost';
import { testGetTasks, testAddToTasks } from "./TestResolver";

const resolvers: Resolvers = {
    Query: {
        testGetTasks,
    },
    Mutation: {
        testAddToTasks,
    }
}

export default resolvers;