import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Item extends React.Component {
    render() {
        const {item} = this.props;
        const {poster_path, title, release_date, genres} = item;

        return (
            <div className="item_wrapper">
                <Link to={`/film/${item.id}`}>
                    <img className="item_image"
                        src={poster_path}
                        onClick={this.onItemClick}
                    />
                </Link>

                <div className="item_info">
                    <span className="item_title">{title}</span>
                    <span className="item_date">{release_date.slice(0, release_date.indexOf('-'))}</span>
                </div>
                <div className="item_genres">{genres.join(' & ')}</div>
            </div>
        )
    }
}

Item.propTypes = {
    item: PropTypes.object
};

Item.defaultProps = {
    item: {}
};

export default Item;