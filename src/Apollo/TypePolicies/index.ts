import { TypePolicies } from '@apollo/client';

import { todosVar } from '@Apollo/ReactiveVars/Todos';
import { visibilityFilterVar } from '@Apollo/ReactiveVars/VisibilityFilters';
import { Todo } from '@Apollo/Models/Todos';

export const typePolicies: TypePolicies = {
    Query: {
        fields: {
            todos: {
                read(existing: Todo[]) {
                    if (!existing) return [];
                    return existing;
                },
            },
            visibilityFilter: {
                read() {
                    return visibilityFilterVar();
                },
            },
        },
    },
};
