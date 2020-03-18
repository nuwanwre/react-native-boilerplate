import { NextLink, Operation } from "apollo-link";
import { GraphQLError } from 'graphql';

/**
 * Middleware for GraphQL requests
 * 
 * Hasura 
 *      - useQuery() -> error, data, loading
 *
 * Custom
 *      - useQuery() -> ok, error, data
 */
export const handleGraphQLErrors = (errors: readonly GraphQLError[], forward: NextLink, operation: Operation) => {
    console.log('GraphQLError: ', errors);
    // Global error handling goes here
    errors.forEach((error: GraphQLError) => {
        if (error.extensions) {
            if (error.extensions.code === 'UNAUTHENTICATED') {
                // handle unauthenticated error: 예) refetch Auth Token
                forward(operation) // to retry request
            }
        }
    })
};

export const handleNetworkErrors = (error: Error) => {
    console.log('NetworkError: ', error);
    // Global error handling goes here

};