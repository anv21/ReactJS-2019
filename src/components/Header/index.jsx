import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Logo from '../Logo/index.jsx';
import SearchField from '../SearchField/index.jsx';
import InfoBar from '../InfoBar/index.jsx';
import Details from '../Details/index.jsx';

const Header = () => (
    <div className="header_wrapper">
        <div className="header_section">
            <Logo/>
            <Switch>
                <Route path="/film/:id" component={Details}/>
                <Route path="/" component={SearchField}/>
            </Switch>
        </div>
        <InfoBar/>
    </div>
);

export default Header;