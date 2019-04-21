import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from './App';
import NotFound from './components/NotFound/index.jsx';
import configureStore from './store/index.js';

const render = (App) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={configureStore().store}>
                <PersistGate loading={null} persistor={configureStore().persistor}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route path="/search" component={App}/>
                        <Route path="/film" component={App}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </Router>
                </PersistGate>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
};

 render(App);

 if (module.hot) {
    module.hot.accept('./App', () => {
        render(App);
    });
}