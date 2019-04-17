import React from 'react';
import PropTypes from 'prop-types';

import SEARCH_BY from "../../constants/SEARCH_BY";

const ENTER_KEY = 13;

class SearchField extends React.Component {
    state = {
        value: '',
        searchBy: SEARCH_BY.TITLE
    };

    onChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    onEnter = (event) => {
        const isEnterPressed = event.which === ENTER_KEY || event.keyCode === ENTER_KEY;
        if (isEnterPressed) {
            this.props.onSearch(this.state);
        }
    }

    onSearchByTitleClick = () => {
        this.setState({
            searchBy: SEARCH_BY.TITLE
        })
    }

    onSearchByGenreClick = () => {
        this.setState({
            searchBy: SEARCH_BY.GENRE
        })
    }

    onSearchClick = () => {
        this.props.onSearch(this.state);
    }

    render() {
        return (
            <div className="search_field_wrapper">
                <label className="search_field_label">find your movie</label>
                <input className="search_field_input"
                    onChange={this.onChange}
                    onKeyPress={this.onEnter}
                    type="text"
                    value={this.state.value}
                />
                <div>
                    <label className="search_field_label">search by</label>
                    <button
                        className="search_by_button"
                        onClick={this.onSearchByTitleClick}
                    >title
                    </button>
                    <button
                        className="search_by_button"
                        onClick={this.onSearchByGenreClick}
                    >genre
                    </button>
                    <button
                        className="search_button"
                        type="button"
                        onClick={this.onSearchClick}
                    >search
                    </button>
                </div>
            </div>
        )
    }
}

SearchField.propTypes = {
    onSearch: PropTypes.func
};

SearchField.defaultProps = {
    onSearch: null
};

export default SearchField;