import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/index.jsx';
import {connect} from 'react-redux';

const Items = (props) => (
    <div className="items_section">
        <div className="items_wrapper">
            {props.items && props.items.length ? (
                props.items.map(item => (
                    <Item
                        key={item.id}
                        item={item}
                        getItem={props.getItem}
                        getItemsByGenre={props.getItemsByGenre}
                    />
                ))
                ) : (
            <div className="items_empty_result">No films found</div>
            )}
        </div>
    </div>
)

Items.propTypes = {
    items: PropTypes.array
};

Items.defaultProps = {
    items: []
};

const mapStateToProps = (state) => {
    const {items} = state.appReducer;
    return {items};
};

 export default connect(mapStateToProps)(Items);