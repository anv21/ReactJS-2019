import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/index.jsx';

const Items = (props) => (
    <div className="items_section">
        <div className="items_wrapper">
            {props.items.length ? (
                props.items.map(item => (
                    <Item
                        key={item.id}
                        item={item}
                        onItemClick={props.onItemClick}
                    />
                ))
                ) : (
                    <div className="items_empty_result">No films found</div>
                    )}
        </div>
    </div>
);

Items.propTypes = {
    items: PropTypes.array,
    onItemClick: PropTypes.func
};

Items.defaultProps = {
    items: [],
    onItemClick: null
};

export default Items;