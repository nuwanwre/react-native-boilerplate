import { Todos, Todo } from '@Apollo/Models/Todos';

import { getAllTodos } from '@Apollo/Operations/Queries/getAllTodos';
import { getApolloClient } from '@Apollo';

const createAddTodo = async (text: string) => {
    const createNewTodoId = (allTodos: Todos) => {
        return (
            allTodos.reduce(
                (maxId: number, todo: Todo) => Math.max(todo.id, maxId),
                -1
            ) + 1
        );
    };

    const createNewTodo = async (text: string) => {
        const client = await getApolloClient();

        let persistedTodos: any = await client.readQuery({
            query: getAllTodos,
        });

        let newTodoId = 0;
        let todos;

        if (persistedTodos) {
            newTodoId = createNewTodoId(persistedTodos.todos);
            todos = [
                ...persistedTodos.todos,
                {
                    id: newTodoId,
                    text: `Added item ${newTodoId}`,
                    completed: false,
                },
            ];
        } else {
            todos = [
                {
                    id: newTodoId,
                    text: `Added item ${newTodoId}`,
                    completed: false,
                },
            ];
        }

        client.writeQuery({
            query: getAllTodos,
            data: {
                todos,
            },
        });

        return { text, completed: false, id: newTodoId };
    };

    await createNewTodo(text);
};

export default createAddTodo;
