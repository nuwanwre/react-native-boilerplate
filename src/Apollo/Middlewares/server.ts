import { HttpLink } from '@apollo/client';
import { GRAPHQL_ENDPOINT } from 'react-native-dotenv';

export const serverLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
});
