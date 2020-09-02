// #region Global Imports
import * as React from 'react';
import { shalloWithTheme } from '@Test/Helpers/render';
// #endregion Global Imports

// #region Local Imports
import Home from './Home.impl';
// #endregion Local Imports

describe('Scenes', () => {
    describe('Home', () => {
        it('should match snapshot', () => {
            const wrapper = shalloWithTheme(<Home />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
