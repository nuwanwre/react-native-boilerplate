import React from 'react';

import { shalloWithTheme } from '@Test/Helpers/render';
// import renderer from 'react-test-renderer';

import { TestAtom } from './TestAtom.impl';

describe('Components', () => {
    describe('TestAtom', () => {
        it('should match snapshot', () => {
            const wrapper = shalloWithTheme(<TestAtom filled key={1} />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
