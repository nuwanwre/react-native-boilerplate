import { Todos, Todo } from '@Apollo/Models/Todos';

import { getAllTodos } from '@Apollo/Operations/Queries/getAllTodos';
import { getApolloClient } from '@Apollo';

const deleteTodo = async (id: number) => {
    const client = await getApolloClient();

    let persistedTodos: any = await client.readQuery({
        query: getAllTodos,
    });

    if (persistedTodos) {
        const todos = persistedTodos.todos.filter(
            (todo: Todo) => todo.id !== id
        );

        client.writeQuery({
            query: getAllTodos,
            data: {
                todos,
            },
        });
    }

    return id;
};

export default deleteTodo;
