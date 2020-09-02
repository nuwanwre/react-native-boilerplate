import { makeVar } from '@apollo/client';

import {
    VisibilityFilter,
    VisibilityFilters,
} from '@Apollo/Models/VisibiltyFilter';

export const visibilityFilterVar = makeVar<VisibilityFilter>(
    VisibilityFilters.SHOW_ALL
);
