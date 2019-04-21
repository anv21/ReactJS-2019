import React from 'react';
import { shallow } from 'enzyme';

import Items from '../../components/Items/index.jsx';

describe('Items', () => {
    const items = shallow(<Items />);

    it('should be like snapshot', () => {
        expect(items).toMatchSnapshot();
    });
});
