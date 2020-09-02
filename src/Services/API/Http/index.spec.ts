// #region Local Imports
import { Http } from './index';
// #endregion Local Imports

describe('Http request tests', () => {
    test('200 test', async () => {
        const result = await Http.Request<{ server_version: string }>(
            'GET',
            '/v1/chain/get_info'
        );
        expect(result.server_version).toBeDefined();
    });

    test('404 test', async () => {
        try {
            await Http.Request('GET', '');
        } catch (error) {
            expect(error.status).toEqual(404);
        }
    });

    test('Catch test', async () => {
        try {
            await Http.Request('GET', '');
        } catch (error) {
            expect(error.code).toBeUndefined();
        }
    });
});
