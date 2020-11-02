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
                merge(existing = [], incoming: Todo[]) {
                    let duplicate = false;

                    existing.map((item: Todo) => {
                        if (incoming[0].id === item.id) {
                            duplicate = true;
                            return;
                        }
                    });
                    if (duplicate) return [...existing];
                    return [...existing, ...incoming];
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
