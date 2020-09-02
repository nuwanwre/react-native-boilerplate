import { TypePolicies } from '@apollo/client';

import { todosVar } from '@Apollo/ReactiveVars/Todos';
import { visibilityFilterVar } from '@Apollo/ReactiveVars/VisibilityFilters';

export const typePolicies: TypePolicies = {
    Query: {
        fields: {
            todos: {
                read() {
                    return todosVar();
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
