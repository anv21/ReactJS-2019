import React from 'react';
import './assets/style/index.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Header from './components/Header/index.jsx';
import Items from './components/Items/index.jsx';
import Footer from './components/Footer/index.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

import {
    getItems,
    getItem,
    getItemsByGenre,
    setSearchValue,
    setSortBy,
    setSearchBy,
} from './actions/index.js';

export class App extends React.Component {
    componentWillMount() {
        const {getItems} = this.props;
        getItems();
    }

    render() {
        return (
            <ErrorBoundary>
                <Header {...this.props} />
                <Items {...this.props} />
                <Footer />
            </ErrorBoundary>
        )
    }
}

Items.propTypes = {
    getItems: PropTypes.func,
};

Items.defaultProps = {
    getItems: null,
};

const mapStateToProps = (state) => {
    const {
        items,
        item,
        appState,
        total,
        value,
        sortBy,
        searchBy
    } = state.appReducer;

     return {
        items,
        item,
        appState,
        total,
        value,
        sortBy,
        searchBy
    };
};

 export default connect(mapStateToProps, {
    getItems,
    getItem,
    getItemsByGenre,
    setSearchValue,
    setSortBy,
    setSearchBy,
})(App);