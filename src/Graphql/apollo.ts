import AsyncStorage from "@react-native-community/async-storage";
import ApolloClient from "apollo-boost";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";

import { GRAPHQL_ENDPOINT } from "react-native-dotenv";
import { PersistentStorage, PersistedData } from "apollo-cache-persist/types";
import fetch from "unfetch";

import { handleGraphQLErrors, handleNetworkErrors } from "./Middlewares";

import initialState from "./state";

export type TCacheShape = any;

// Cache Apollo Client
let _client: ApolloClient<TCacheShape>;

async function rehydrateClient(cache: InMemoryCache): Promise<any> {
    return new Promise<any>((resolve) => {
        resolve(cache.writeData({ data: initialState}))
    })
}

export async function getApolloClient(): Promise<ApolloClient<TCacheShape>> {
    if (_client) return _client;

    const cache = new InMemoryCache();

    cache.writeData({
        data: initialState,
    })

    await persistCache({
        cache,
        // manual cast on next line since apollo-cache-persist has limited type support
        storage: AsyncStorage as PersistentStorage<
            PersistedData<NormalizedCacheObject>
        >,
    });

    const client = new ApolloClient({
        cache,
        uri: GRAPHQL_ENDPOINT,
        fetch,
        onError: ({ graphQLErrors, networkError, forward, operation }) => {
            if (graphQLErrors) {
                handleGraphQLErrors(graphQLErrors, forward, operation);
            }
            if (networkError) {
                handleNetworkErrors(networkError);
            }
        },
    });

    // Rehydrate on Client Restore
    client.onResetStore(() => rehydrateClient(cache));

    _client = client;

    return client;
}
