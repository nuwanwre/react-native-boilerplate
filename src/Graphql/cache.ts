import { InMemoryCache, NormalizedCacheObject, InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import initialState from "./state";



export async function getCache(): Promise<InMemoryCache> {
    const cache = new InMemoryCache();

    cache.writeData({ data: initialState });

    
}
const cache = new InMemoryCache(): Promise<InMemoryCache>
