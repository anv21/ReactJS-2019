import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/index.jsx';

class Items extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {items, onItemClick} = this.props;

        return (
            <div className="items_section">
                <div className="items_wrapper">
                    {items.length ? (
                        items.map(item => (
                            <Item
                                key={item.id}
                                item={item}
                                onItemClick={onItemClick}
                            />
                        ))
                    ) : (
                        <div className="items_empty_result">No films found</div>
                    )}
                </div>
            </div>
        )
    }
}

Items.propTypes = {
    items: PropTypes.array,
    onItemClick: PropTypes.func
};

Items.defaultProps = {
    items: [],
    onItemClick: null
};

export default Items;