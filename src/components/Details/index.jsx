import React from 'react';
import PropTypes from 'prop-types';

class Details extends React.Component {
    render() {
        const {item,getItems} = this.props;
        const {poster_path, title, vote_average, tagline, release_date, runtime, overview} = item;

        return (
            <div className="details_wrapper">
                <button
                    className="details_search_button"
                    onClick={getItems}>search
                </button>
                <img
                    className="details_image"
                    src={poster_path}
                />
                <div className="details_desctiption">
                    <div className="details_titile_container">
                        <span className="details_title">{title}</span>
                        <span className="details_vote_average">{vote_average}</span>
                    </div>
                    <span className="details_tagline">{tagline}</span>
                    <div className="details_date_duration">
                        <span className="details_year">{release_date.slice(0, release_date.indexOf('-'))}</span>
                        <span className="details_runtime">{runtime} min</span>
                    </div>
                    <div className="details_overview">{overview}</div>
                </div>
            </div>
        )
    }
}

Details.propTypes = {
    getItems: PropTypes.func,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    tagline: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
    goToSearchPage: PropTypes.func
};

Details.defaultProps = {
    getItems: null,
    poster_path: '',
    title: '',
    vote_average: 0,
    tagline: '',
    release_date: '',
    runtime: null,
    overview: '',
    goToSearchPage: null
};

export default Details;