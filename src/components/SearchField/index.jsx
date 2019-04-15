import React from 'react';
import PropTypes from 'prop-types';

import SEARCH_BY from "../../constants/SEARCH_BY";

const ENTER_KEY = 13;

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    onChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    onEnter = (event) => {
        const isEnterPressed = event.which === ENTER_KEY || event.keyCode === ENTER_KEY;
        if (isEnterPressed) {
            this.props.setSearchValue(this.state.value);
            this.props.getItems();
        }
    }

    onSearchByTitleClick = () => {
        this.props.setSearchBy(SEARCH_BY.TITLE);
    }

    onSearchByGenreClick = () => {
        this.props.setSearchBy(SEARCH_BY.GENRE);
    }

    onSearchClick = () => {
        this.props.getItems();
    }

    onBlur = () => {
        this.props.setSearchValue(this.state.value);
    }

    render() {
        const {searchBy} = this.props;

        return (
            <div className="search_field_wrapper">
                <label className="search_field_label">find your movie</label>
                <input className="search_field_input"
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    onKeyPress={this.onEnter}
                    type="text"
                    value={this.state.value}
                />
                <div>
                    <label className="search_field_label">search by</label>
                    <button
                        className={"search_by_button " + (searchBy === SEARCH_BY.TITLE && "active_button")}
                        onClick={this.onSearchByTitleClick}
                    >title
                    </button>
                    <button
                        className={"search_by_button " + (searchBy === SEARCH_BY.GENRE && "active_button")}
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
    value: PropTypes.string,
    searchBy: PropTypes.string,
    getItems: PropTypes.func,
    setSearchBy: PropTypes.func,
};

SearchField.defaultProps = {
    value: '',
    searchBy: SEARCH_BY.TITLE,
    getItems: null,
    setSearchBy: null,
};

export default SearchField;