import React from 'react';
import PropTypes from 'prop-types';

import APP_STATES from '../../constants/APP_STATES';
import SORT_BY from '../../constants/SORT_BY';

class InfoBar extends React.Component {
    onSortByReleaseDateClick = () => {
        this.props.setSortBy(SORT_BY.RELEASE_DATE);
        this.props.getItems();
    }

    onSortByRatingClick = () =>{
        this.props.setSortBy(SORT_BY.RATING);
        this.props.getItems();
    }

    render() {
        let output = {};
        const {appState, items, item, total, sortBy} = this.props;

        switch (appState) {
            case APP_STATES.SEARCH_PAGE:
                output = (
                    <div className="infoBar_section">
                        {items && items.length > 0 &&
                        <div className="infoBar_wrapper">
                            <label className="infoBar_label">{total} movies found</label>
                            <div>
                                <label className="infoBar_label">Sort by</label>
                                <span className={"infoBar_sort_by_link " + (sortBy === SORT_BY.RELEASE_DATE && "active_link")} onClick={this.onSortByReleaseDateClick}>release date</span>
                                <span className={"infoBar_sort_by_link " + (sortBy === SORT_BY.RATING && "active_link")} onClick={this.onSortByRatingClick}>rating</span>
                            </div>
                        </div>
                        }
                    </div>
                );
            break;
            case APP_STATES.DETAILS_PAGE:
                output = (
                    <div className="infoBar_section">
                        {items && items.length > 0 &&
                        <div className="infoBar_wrapper">
                            <label className="infoBar_label">
                            Films by {item && item.genres && item.genres[0]}                            </label>
                        </div>
                        }
                    </div>
                );
            break;
        }
        return (
            output
        )
    }
}

InfoBar.propTypes = {
    appState: PropTypes.string,
    items: PropTypes.array,
    item: PropTypes.object,
    total: PropTypes.number,
    sortBy: PropTypes.string,
    setSortBy: PropTypes.func
};

InfoBar.defaultProps = {
    appState: APP_STATES.SEARCH_PAGE,
    items: [],
    item: {},
    total: 0,
    setSortBy: null
};

export default InfoBar;