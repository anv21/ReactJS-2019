import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo/index.jsx';
import SearchField from '../SearchField/index.jsx';
import InfoBar from '../InfoBar/index.jsx';
import Details from '../Details/index.jsx';

import APP_STATES from '../../constants/APP_STATES';

class Header extends React.Component {
    render() {
        const {appState, item, getItems} = this.props;

        return (<div className="header_wrapper">
            <div className="header_section">
                <Logo/>
                {appState === APP_STATES.DETAILS_PAGE ?
                    <Details
                        item={item}
                        getItems={getItems}
                    />
                :
                <SearchField {...this.props}/>
                }
            </div>
                <InfoBar {...this.props}/>
        </div>
    )};
}

Header.propTypes = {
    appState: PropTypes.string,
    items: PropTypes.array,
    getItems: PropTypes.func
};

Header.defaultProps = {
    appState: '',
    items: [],
    getItems: null
};

export default Header;