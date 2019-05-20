import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';

import SORT_BY from '../../constants/SORT_BY';
import { setSortBy } from '../../actions';

class InfoBar extends React.Component {
    onSortByReleaseDateClick = () => {
        this.props.setSortBy(SORT_BY.RELEASE_DATE);
    }

    onSortByRatingClick = () => {
        this.props.setSortBy(SORT_BY.RATING);
    }

    render() {
        const {value, items, item, total, sortBy, searchBy} = this.props;

        return (
            <Switch>
                <Route path='/film' render={() => (
                    <div className="infoBar_section">
                        {items && items.length > 0 &&
                            <div className="infoBar_wrapper">
                                <label className="infoBar_label">
                                    Films by {item && item.genres && item.genres[0]}
                                </label>
                            </div>
                        }
                    </div>
                )}
                />
                <Route path='/' render={() => (
                    <div className="infoBar_section">
                        {items && items.length > 0 &&
                            <div className="infoBar_wrapper">
                                <label className="infoBar_label">
                                    {total} movies found
                                </label>
                                <div>
                                    <label className="infoBar_label">Sort by</label>
                                    <Link to={`/search?search=${value}&searchBy=${searchBy}&sortBy=${SORT_BY.RELEASE_DATE}`}>
                                        <span className={"infoBar_sort_by_link " + (sortBy === SORT_BY.RELEASE_DATE && "active_link")}
                                            onClick={this.onSortByReleaseDateClick}>
                                            release date
                                        </span>
                                    </Link>
                                    <Link to={`/search?search=${value}&searchBy=${searchBy}&sortBy=${SORT_BY.RATING}`}>
                                        <span className={"infoBar_sort_by_link " + (sortBy === SORT_BY.RATING && "active_link")}
                                            onClick={this.onSortByRatingClick}>
                                            rating
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        }
                    </div>)}
                />
            </Switch>
        )
    }
}

InfoBar.propTypes = {
    value: PropTypes.string,
    items: PropTypes.array,
    item: PropTypes.object,
    total: PropTypes.number,
    sortBy: PropTypes.string,
    searchBy: PropTypes.string,
    setSortBy: PropTypes.func,
};

InfoBar.defaultProps = {
    value: '',
    items: [],
    item: {},
    total: 0,
    sortBy: '',
    searchBy: '',
    setSortBy: null,
};

const mapStateToProps = (state) => {
    const {value, items, item, total, sortBy, searchBy} = state.appReducer;
    return {value, items, item, total, sortBy, searchBy};
};

export default connect(mapStateToProps, {setSortBy})(InfoBar);