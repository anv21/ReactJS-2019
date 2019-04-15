import React from 'react';
import { shallow } from 'enzyme';

import SearchField from '../../components/SearchField/index.jsx';

describe('SearchField', () => {
    const mockGetItems = jest.fn();
    const searchField = shallow(<SearchField getItems={mockGetItems} />);

    it('should be like snapshot', () => {
        expect(searchField).toMatchSnapshot();
    });

    it('should call getItems function on SearchButton click', () => {
        searchField.find('.search_button').simulate('click');
        expect(mockGetItems.mock.calls.length).toBe(1);
    });
});
