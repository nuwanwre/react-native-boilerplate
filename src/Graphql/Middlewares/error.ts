import { onError, ErrorResponse, ErrorHandler } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { ApolloClient } from "apollo-boost";
import { GraphQLError } from 'graphql';
import { TCacheShape } from '@Graphql/apollo';

/**
 * Middleware for GraphQL requests
 * 
 * Hasura 
 *      - useQuery() -> error, data, loading
 *
 * Custom
 *      - useQuery() -> ok, error, data
 */
export const handleGraphQLErrors = (error: readonly GraphQLError[], client: ApolloClient<TCacheShape>) => {
    console.log('GraphQLError: ', error);
    // Global error handling goes here
};

export const handleNetworkErrors = (error: Error) => {
    console.log('NetworkError: ', error);
    // Global error handling goes here
};