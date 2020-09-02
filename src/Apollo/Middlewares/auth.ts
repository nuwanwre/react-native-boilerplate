import { setContext } from '@apollo/client/link/context';

export const authLink = setContext((request, previousContext) => ({
    headers: { authorization: 'access-token' },
}));
