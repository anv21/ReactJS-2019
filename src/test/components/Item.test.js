import React from 'react';
import { shallow } from 'enzyme';

import Item from '../../components/Item/index.jsx';

describe('Item', () => {
    const mockGetItem = jest.fn();
    const mockGetItemsByGenre = jest.fn();
    const mockItem = {
        "id": 447365,
        "title": "Guardians of the Galaxy Vol. 3",
        "tagline": "Life finds a way",
        "vote_average": 0,
        "vote_count": 9,
        "release_date": "2020-05-01",
        "poster_path": "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
        "overview": "The third film based on Marvel's Guardians of the Galaxy.",
        "budget": 0,
        "revenue": 0,
        "genres": [
          "Action",
          "Adventure",
          "Science Fiction"
        ],
        "runtime": 93
    };
    const item = shallow(
        <Item
            item={mockItem}
            getItem={mockGetItem}
            getItemsByGenre={mockGetItemsByGenre}
        />
    );

    it('should be like snapshot', () => {
        expect(item).toMatchSnapshot();
    });

    it('should call getItem function on ItemImage click', () => {
        item.find('.item_image').simulate('click');
        expect(mockGetItem.mock.calls.length).toBe(1);
        expect(mockGetItemsByGenre.mock.calls.length).toBe(1);
    });
});