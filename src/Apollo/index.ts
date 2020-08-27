import { ApolloClient, InMemoryCache } from '@apollo/client';

import initCache from '@Apollo/Cache';
import { link } from '@Apollo/Middlewares';

export type TCacheShape = any;

let _client: ApolloClient<TCacheShape>;

export async function getApolloClient(): Promise<ApolloClient<TCacheShape>> {
    if (_client) return _client;

    const cache: InMemoryCache = await initCache();

    const client: ApolloClient<TCacheShape> = new ApolloClient({
        link,
        cache,
        connectToDevTools: true,
    });

    _client = client;

    return client;
}
