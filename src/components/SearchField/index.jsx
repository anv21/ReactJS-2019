import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import URLSearchParams from '@ungap/url-search-params';

import SEARCH_BY from "../../constants/SEARCH_BY";
import { getItems, setSearchValue, setSearchBy } from '../../actions';

const ENTER_KEY = 13;

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    componentWillMount() {
        const params = new URLSearchParams(this.props.location.search);
        this._getItems(params);
    }

    componentDidUpdate(prevProps) {
        const params = new URLSearchParams(this.props.location.search);
        if (prevProps.location.search !== this.props.location.search) {
            this._getItems(params);
        }
    }

    _getItems(params) {

        const value = params.get('search') || this.props.value;
        const searchBy = params.get('searchBy') || this.props.searchBy;
        const sortBy = params.get('sortBy') || this.props.sortBy;
        this.props.getItems(value, searchBy, sortBy);
    }

    onChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    onEnter = (event) => {
        const isEnterPressed = event.which === ENTER_KEY || event.keyCode === ENTER_KEY;
        if (isEnterPressed) {
            const { searchBy, sortBy } = this.props;
            this.props.setSearchValue(this.state.value);
            this.props.history.push(`/search?search=${this.state.value}&searchBy=${searchBy}&sortBy=${sortBy}`);
        }
    }

    onSearchByTitleClick = () => {
        this.props.setSearchBy(SEARCH_BY.TITLE);
    }

    onSearchByGenreClick = () => {
        this.props.setSearchBy(SEARCH_BY.GENRE);
    }

    onBlur = () => {
        this.props.setSearchValue(this.state.value);
    }

    render() {
        const { searchBy, sortBy } = this.props;

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
                    <Link to={`/search?search=${this.state.value}&searchBy=${searchBy}&sortBy=${sortBy}`}>
                        <button
                            className="search_button"
                            type="button"
                            onClick={this.onSearchClick}
                        >search
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

SearchField.propTypes = {
    value: PropTypes.string,
    searchBy: PropTypes.string,
    sortBy: PropTypes.string,
    getItems: PropTypes.func,
    setSearchBy: PropTypes.func,
    setSearchValue: PropTypes.func,
    location: PropTypes.object
};

SearchField.defaultProps = {
    value: '',
    searchBy: SEARCH_BY.TITLE,
    sortBy: '',
    getItems: function () { },
    setSearchBy: null,
    setSearchValue: null,
    location: {}
};

const mapStateToProps = (state) => {
    const { value, searchBy, sortBy } = state.appReducer;
    return { value, searchBy, sortBy };
};

export default connect(mapStateToProps, { getItems, setSearchValue, setSearchBy })(SearchField);
