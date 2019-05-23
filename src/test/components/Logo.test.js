import React from 'react';
import { shallow } from 'enzyme';

import Logo from '../../components/Logo/index.jsx';

describe('Logo', () => {
    const logo = shallow(<Logo />);

    it('should be like snapshot', () => {
        expect(logo).toMatchSnapshot();
    });
});
