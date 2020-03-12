import AsyncStorage from "@react-native-community/async-storage";
import ApolloClient from "apollo-boost";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";

import { API_URL } from "react-native-dotenv";
import { PersistentStorage, PersistedData } from 'apollo-cache-persist/types';

export type TCacheShape = any;

// Cache Apollo Client
let _client: ApolloClient<TCacheShape>;

export async function getApolloClient(): Promise<ApolloClient<TCacheShape>> {
    if (_client)
        return _client;

    const cache = new InMemoryCache();

    await persistCache({
        cache,
        // manual cast on next line as apollo-cache-persist has limited type support
        storage: AsyncStorage as PersistentStorage<PersistedData<NormalizedCacheObject>>,
    });

    const client = new ApolloClient({
        cache,
        uri: API_URL,
    });

    _client = client;

    return client;
};


