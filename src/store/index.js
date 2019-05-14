import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../reducers';
import appSaga from '../sagas';

export default function configureStore(initialState, { ssr = false } = {}) {
    const sagaMiddleware = createSagaMiddleware();
    const enhancers = [applyMiddleware(sagaMiddleware)]
    const store = createStore(rootReducer, initialState, compose(...enhancers))
    store.runSaga = () => sagaMiddleware.run(appSaga, { ssr });
    store.close = () => store.dispatch(END);
    return store;
};