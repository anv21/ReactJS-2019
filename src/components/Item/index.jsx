import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    _onItemClick = () => {
        const {item, onItemClick} = this.props;
        onItemClick(item.id);
    }

    render() {
        const {item} = this.props;
        const {poster_path, title, release_date, genres} = item;

        return (
            <div className="item_wrapper">
                <img className="item_image"
                    src={poster_path}
                    onClick={this._onItemClick}
                />
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
    item: PropTypes.object,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array
};

Item.defaultProps = {
    item: {},
    poster_path: '',
    title: '',
    release_date: '',
    genres: []
};

export default Item;