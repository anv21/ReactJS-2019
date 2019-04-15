import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import configureStore from './store/index.js';

const render = (App) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={configureStore().store}>
                <PersistGate loading={null} persistor={configureStore().persistor}>
                    <App/>
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