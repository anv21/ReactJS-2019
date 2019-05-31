import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from '../../actions/index.js';
import ACTION_TYPES from 'constants/ACTION_TYPES';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('app actions', () => {
    describe('sync actions', () => {
        it('should create an action to set SearchBy', () => {
            const searchBy = 'searchBy';
            const expectedAction = {
                type: ACTION_TYPES.SET_SEARCH_BY,
                searchBy,
            };
            expect(actions.setSearchBy(searchBy)).toEqual(expectedAction);
        });

        it('should create an action to set SortBy', () => {
            const sortBy = 'sortBy';
            const expectedAction = {
                type: ACTION_TYPES.SET_SORT_BY,
                sortBy,
            };
            expect(actions.setSortBy(sortBy)).toEqual(expectedAction);
        });

        it('should create an action to set SearchValue', () => {
            const value = 'value';
            const expectedAction = {
                type: ACTION_TYPES.SET_SEARCH_VALUE,
                value,
            };
            expect(actions.setSearchValue(value)).toEqual(expectedAction);
        });
    });
});