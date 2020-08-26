import { TypePolicies } from '@apollo/client';

import { todoVar } from '@Graphql/ReactiveVars/Todos';
import { visibilityFilterVar } from '@Graphql/ReactiveVars/VisibilityFilters';

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




