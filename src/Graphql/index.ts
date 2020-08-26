import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GRAPHQL_ENDPOINT } from 'react-native-dotenv';

import initCache from '@Graphql/Cache';

export type TCacheShape = any;

let _client: ApolloClient<TCacheShape>;

export async function getApolloClient(): Promise<ApolloClient<TCacheShape>> {
    if (_client) return _client;

    const cache: InMemoryCache = await initCache();

    const client: ApolloClient<TCacheShape> = new ApolloClient({
        uri: GRAPHQL_ENDPOINT,
        cache,
        connectToDevTools: true,
    });

    _client = client;

    return client;
}
