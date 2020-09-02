import { ReactiveVar, makeVar } from '@apollo/client';
import { todosInitialState } from '@Apollo/State/Todos';

import { Todos } from '@Apollo/Models/Todos';

export const todosVar: ReactiveVar<Todos> = makeVar<Todos>(todosInitialState);
