import { todosVar } from '@Apollo/ReactiveVars/Todos';
import createAddTodo from './addTodo/addTodo';

export const todoMutations = {
    addTodo: createAddTodo(todosVar),
};
