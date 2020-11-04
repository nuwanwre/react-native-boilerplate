import { Todos } from '@Apollo/Models/Todos';
import { getApolloClient } from '@Apollo';
import { getAllTodos } from '@Apollo/Operations/Queries/getAllTodos';

export const todosInitialState: Todos = [
    {
        id: 0,
        completed: false,
        text: 'Welcome to React Native Boilerplate',
    },
];
