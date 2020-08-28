import createAddTodo from './addTodo/addTodo';
import { todosVar } from '@Apollo/ReactiveVars/Todos';

export const todoMutations = {
    addTodo: createAddTodo(todosVar),
}
