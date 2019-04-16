import React from 'react';
import PropTypes from 'prop-types';

import APP_STATES from '../../constants/APP_STATES';
import SORT_BY from '../../constants/SORT_BY';

class InfoBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sortBy: SORT_BY.RELEASE_DATE}
    }

    onSortByReleaseDateClick = () => {
        this.setState({
            sortBy: SORT_BY.RELEASE_DATE
        }, () => {
            this.props.onSearch(this.state)
        });
    }

    onSortByRatingClick = () =>{
        this.setState({
            sortBy: SORT_BY.RATING
        }, () => {
            this.props.onSearch(this.state)
        });
    }

    render() {
        let output = {};
        const {appState, items, selectedItem} = this.props;

        switch (appState) {
            case APP_STATES.SEARCH_PAGE:
                output = (
                    <div className="infoBar_section">
                        {items && items.length > 0 &&
                        <div className="infoBar_wrapper">
                            <label className="infoBar_label">{items.length} movies found</label>
                            <div>
                                <label className="infoBar_label">Sort by</label>
                                <span className="infoBar_sort_by_link" onClick={this.onSortByReleaseDateClick}>release date</span>
                                <span className="infoBar_sort_by_link" onClick={this.onSortByRatingClick}>rating</span>
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
                                Films by {items.find((item) => item.id === selectedItem).genres[0]}
                            </label>
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
    selectedItem: PropTypes.number
};

InfoBar.defaultProps = {
    appState: APP_STATES.SEARCH_PAGE,
    items: [],
    selectedItem: null
};

export default InfoBar;