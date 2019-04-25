import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import SearchField from '../SearchField';
import InfoBar from '../InfoBar';
import Details from '../Details';
import './Header.scss';

import APP_STATES from '../../constants/APP_STATES';

const Header = (props) => (
    <div className="header_wrapper">
        <div className="header_section">
            <Logo/>
            {props.appState === APP_STATES.DETAILS_PAGE ?
                <Details
                    item={props.items.find(item => item.id === props.selectedItem)}
                    goToSearchPage={props.goToSearchPage}
                />
                :
                <SearchField {...props}/>
            }
        </div>
        <InfoBar {...props}/>
    </div>
);

Header.propTypes = {
    appState: PropTypes.string,
    selectedItem: PropTypes.number,
    items: PropTypes.array,
    goToSearchPage: PropTypes.func
};

Header.defaultProps = {
    appState: '',
    selectedItem: null,
    items: [],
    goToSearchPage: null
};

export default Header;