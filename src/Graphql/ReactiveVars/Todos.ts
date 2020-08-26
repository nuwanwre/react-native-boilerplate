import { ReactiveVar, makeVar } from '@apollo/client';
import { todosInitialState } from '@Graphql/State/Todos';

import { Todos } from '@Graphql/Models/Todos';

export const todoVar: ReactiveVar<Todos> = makeVar<Todos>(
    todosInitialState
)
