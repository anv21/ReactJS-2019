import React from 'react';
import './assets/style/index.css';

import Header from './components/Header/index.jsx';
import Items from './components/Items/index.jsx';
import Footer from './components/Footer/index.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import items from './mock-data/data.json';

import APP_STATES from './constants/APP_STATES';
import SEARCH_BY from './constants/SEARCH_BY';
import SORT_BY from './constants/SORT_BY';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            searchBy: SEARCH_BY.TITLE,
            sortBy: SORT_BY.RELEASE_DATE,
            appState: APP_STATES.SEARCH_PAGE,
            selectedItem: null,
            items: items.data,
        }
    }

    goToSearchPage = () => {
        this.setState({
            appState: APP_STATES.SEARCH_PAGE
        })
    }

    onSearch = (options) => {
        const {
            value = this.state.value,
            searchBy = this.state.searchBy,
            sortBy = this.state.sortBy
        } = { ...options };
        this.setState({
            value,
            searchBy,
            sortBy,
            selectedItem: null,
            appState: APP_STATES.SEARCH_PAGE
        });
    }

    onItemClick = (id) => {
        this.setState({
            selectedItem: id,
            appState: APP_STATES.DETAILS_PAGE
        });
    }

    render() {
        return (
            <ErrorBoundary>
                <Header
                    {...this.state}
                    onSearch={this.onSearch}
                    goToSearchPage={this.goToSearchPage}
                />
                <Items
                    {...this.state}
                    onItemClick={this.onItemClick}
                />
                <Footer />
            </ErrorBoundary>
        )
    }
}

export default App;