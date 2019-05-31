import React from 'react';
import { shallow } from 'enzyme';
import {mockData} from '../../mock-data/data.json'

import InfoBar from '../../components/InfoBar/index.jsx';

import APP_STATES from '../../constants/APP_STATES';

const items = mockData;

describe('InfoBar', () => {
    const infoBar = shallow(<InfoBar/>);

    it('should be like snapshot when AppState is SearchPage', () => {
        infoBar.setProps({appState: APP_STATES.SEARCH_PAGE, items});
        expect(infoBar).toMatchSnapshot();
    });

    it('should be like snapshot when AppState is DetailsPage', () => {
        infoBar.setProps({appState: APP_STATES.DETAILS_PAGE, items});
        expect(infoBar).toMatchSnapshot();
    });
});