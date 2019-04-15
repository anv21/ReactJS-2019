import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo/index.jsx';
import SearchField from '../SearchField/index.jsx';
import InfoBar from '../InfoBar/index.jsx';
import Details from '../Details/index.jsx';

import APP_STATES from '../../constants/APP_STATES';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {appState, selectedItem, items, goToSearchPage} = this.props;

        return (
            <div className="header_wrapper">
                <div className="header_section">
                    <Logo/>
                    {appState === APP_STATES.DETAILS_PAGE ?
                        <Details
                            item={items.find(item => item.id === selectedItem)}
                            goToSearchPage={goToSearchPage}
                        />
                        :
                        <SearchField {...this.props}/>
                    }
                </div>
                <InfoBar {...this.props}/>
            </div>
        )
    }
}

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