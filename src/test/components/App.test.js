import React from 'react';
import { shallow } from 'enzyme';

import {App} from '../../App.js';

describe('App', () => {
    const mockGetItems = jest.fn();
    const app = shallow(<App getItems={mockGetItems} />);

    it('should be like snapshot', () => {
        expect(app).toMatchSnapshot();
    });
});