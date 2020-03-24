import { Resolvers } from 'apollo-boost';
import { testGetTasks } from "./TestResolver";

const resolvers: Resolvers = {
    Query: {
        testGetTasks,
    }
}

export default resolvers;