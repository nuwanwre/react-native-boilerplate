import { NormalizedCacheObject, InMemoryCache, Reference } from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import { persistCache } from 'apollo-cache-persist';
import { PersistentStorage, PersistedData } from 'apollo-cache-persist/types';
import { typePolicies } from '@Graphql/TypePolicies';

let _cache: InMemoryCache;

const initCache = async (): Promise<InMemoryCache> => {
    if (_cache) return _cache;

    const cache: InMemoryCache = new InMemoryCache({
        typePolicies
    });

    await persistCache({
        cache,
        storage: AsyncStorage as PersistentStorage<PersistedData<NormalizedCacheObject>>,
        debug: true,
    })

    // Return persisted cache if exists, else bring cache to initial state
    return cache
}

export default initCache;
