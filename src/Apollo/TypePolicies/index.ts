import { TypePolicies } from '@apollo/client';

import { todoVar } from '@Apollo/ReactiveVars/Todos';
import { visibilityFilterVar } from '@Apollo/ReactiveVars/VisibilityFilters';

export const typePolicies: TypePolicies = {
    Query: {
        fields: {
            todos: {
                read () {
                    return todoVar();
                }
            },
            visibilityFilter: {
                read () {
                    return visibilityFilterVar();
                }
            }
        }
    }
};




