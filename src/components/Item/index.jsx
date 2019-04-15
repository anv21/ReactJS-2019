import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
    onItemClick = () => {
        const {item, getItem, getItemsByGenre,} = this.props;
        const searchValue = item.genres && item.genres[0];
        getItem(item.id);
        getItemsByGenre(searchValue);
    }

    render() {
        const {item} = this.props;
        const {poster_path, title, release_date, genres} = item;

        return (
            <div className="item_wrapper">
                <img className="item_image"
                    src={poster_path}
                    onClick={this.onItemClick}
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
    genres: PropTypes.array,
    getItem: PropTypes.func,
    getItemsByGenre: PropTypes.func
};

Item.defaultProps = {
    item: {},
    poster_path: '',
    title: '',
    release_date: '',
    genres: [],
    getItem: null,
    getItemsByGenre: null
};

export default Item;