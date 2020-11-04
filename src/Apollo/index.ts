import { ApolloClient, InMemoryCache } from '@apollo/client';

import getCache from '@Apollo/Cache';
import { link } from '@Apollo/Middlewares';
import typeDefs from '@Apollo/TypeDefs';

export type TCacheShape = any;

let _client: ApolloClient<TCacheShape>;

export async function getApolloClient(): Promise<ApolloClient<TCacheShape>> {
    if (_client) return _client;

    const cache: InMemoryCache = await getCache();

    const client: ApolloClient<TCacheShape> = new ApolloClient({
        link,
        cache,
        connectToDevTools: true,
        typeDefs,
    });

    _client = client;

    return client;
}
