import { onError } from '@apollo/client/link/error';
import { ApolloLink } from '@apollo/client';

export const errorLink: ApolloLink = onError(
    ({ graphQLErrors, networkError, operation, response, forward }) => {
        console.log(
            `Error occured on operation: ${operation.operationName} with response of ${response}`
        );

        if (graphQLErrors)
            graphQLErrors.map(({ message, locations, path }) => {
                console.log(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                );
            });

        if (networkError) {
            console.log(`[Network error]: ${networkError}`);
            forward(operation);
        }
    }
);
