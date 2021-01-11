import { InMemoryCache } from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import { persistCache } from 'apollo3-cache-persist';
import { typePolicies } from '@Apollo/TypePolicies';

let _cache: InMemoryCache;

const getCache = async (): Promise<InMemoryCache> => {
    if (_cache) return _cache;

    const cache: InMemoryCache = new InMemoryCache({
        typePolicies,
    });

    await persistCache({
        cache,
        storage: AsyncStorage,
        debug: __DEV__ ? true : false,
    });

    return cache;
};

export default getCache;
