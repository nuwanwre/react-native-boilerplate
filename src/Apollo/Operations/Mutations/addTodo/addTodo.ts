import { ReactiveVar } from '@apollo/client';
import { Todos, Todo } from '@Apollo/Models/Todos';

const createAddTodo = (todosVar: ReactiveVar<Todos>) => {
    const createNewTodoId = (allTodos: Todos) => {
        return (
            allTodos.reduce(
                (maxId: number, todo: Todo) => Math.max(todo.id, maxId),
                -1
            ) + 1
        );
    };

    const createNewTodo = (text: string, allTodos: Todos) => {
        return { text, completed: false, id: createNewTodoId(allTodos) };
    };

    return (text: string) => {
        const allTodos = todosVar();
        todosVar(allTodos.concat([createNewTodo(text, allTodos)]));
    };
};

export default createAddTodo;
