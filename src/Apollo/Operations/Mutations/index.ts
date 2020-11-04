import createAddTodo from './addTodo/addTodo';
import deleteTodo from './deleteTodo/deleteTodo';

export const todoMutations = {
    addTodo: async (text: string) => await createAddTodo(text),
    deleteTodo: async (id: number) => await deleteTodo(id),
};
