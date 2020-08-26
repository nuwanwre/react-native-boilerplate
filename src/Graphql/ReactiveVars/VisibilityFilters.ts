import { makeVar } from '@apollo/client';

import { VisibilityFilter, VisibilityFilters } from '@Graphql/Models/VisibiltyFilter';

export const visibilityFilterVar = makeVar<VisibilityFilter>(
    VisibilityFilters.SHOW_ALL
);
