import { onError, ErrorResponse, ErrorHandler } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { ApolloClient } from "apollo-boost";
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
export const handleGraphQLErrors = (error: readonly GraphQLError[]) => {
    console.log('GraphQLError: ', error);
    return error;
};

export const handleNetworkErrors = (error: Error) => {
    console.log('NetworkError: ', error);
    return error;
};