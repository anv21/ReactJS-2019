import React from 'react';
import { shallow } from 'enzyme';

import Details from '../../components/Details/index.jsx';

describe('Details', () => {
    const mockGetItems = jest.fn();
    const item = {
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
    const details = shallow(<Details getItems={mockGetItems} item={item}/>);

    it('should be like snapshot', () => {
        expect(details).toMatchSnapshot();
    });

    it('should call getItems function on DetailsSearchButton click', () => {
        details.find('.details_search_button').simulate('click');
        expect(mockGetItems.mock.calls.length).toBe(1);
    });
});