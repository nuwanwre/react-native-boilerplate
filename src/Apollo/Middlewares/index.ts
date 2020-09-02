import { from } from '@apollo/client';
import { errorLink } from './error';
import { authLink } from './auth';
import { serverLink } from './server';

export const link = from([authLink, errorLink, serverLink]);
