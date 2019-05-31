import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Item from '../Item';

const ItemsSection = styled.div`
  background-color: #fff;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 900px;
  margin: 0 auto;
`;

const Items = props => (
  <ItemsSection>
    <ItemsWrapper>
      {props.items && props.items.length
        ? props.items.map(item => (
            <Item
              key={item.id}
              item={item}
              getItem={props.getItem}
              getItemsByGenre={props.getItemsByGenre}
            />
          ))
        : props.children}
    </ItemsWrapper>
  </ItemsSection>
);

Items.propTypes = {
  items: PropTypes.array
};

Items.defaultProps = {
  items: []
};

const mapStateToProps = state => {
  const { items } = state.appReducer;
  return { items };
};

export default connect(mapStateToProps)(Items);
