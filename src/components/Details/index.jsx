import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItem } from '../../actions';

class Details extends React.Component {
  componentWillMount() {
    this.props.getItem(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.getItem(this.props.match.params.id);
    }
  }

  render() {
    const { item, value, searchBy, sortBy } = this.props;
    const { poster_path, title, vote_average, tagline, release_date, runtime, overview } = item;

    return (
      <div className="details_wrapper">
        <Link to={`/search?search=${value}&searchBy=${searchBy}&sortBy=${sortBy}`}>
          <button className="details_search_button">search</button>
        </Link>
        <img className="details_image" src={poster_path} />
        <div className="details_desctiption">
          <div className="details_titile_container">
            <span className="details_title">{title}</span>
            <span className="details_vote_average">{vote_average}</span>
          </div>
          <span className="details_tagline">{tagline}</span>
          <div className="details_date_duration">
            <span className="details_year">
              {release_date && release_date.slice(0, release_date.indexOf('-'))}
            </span>
            <span className="details_runtime">{runtime} min</span>
          </div>
          <div className="details_overview">{overview}</div>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  value: PropTypes.string,
  searchBy: PropTypes.string,
  sortBy: PropTypes.string,
  item: PropTypes.object,
  getItem: PropTypes.func,
  match: PropTypes.object
};

Details.defaultProps = {
  value: '',
  searchBy: '',
  sortBy: '',
  item: {},
  getItem: null,
  match: { params: { id: '' } }
};

const mapStateToProps = state => {
  const { value, searchBy, sortBy, item } = state.appReducer;
  return { value, searchBy, sortBy, item };
};

export default connect(
  mapStateToProps,
  { getItem }
)(Details);
