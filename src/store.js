import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';

export default async () => {

    const sagaMiddleware = createSagaMiddleware();

    const initialState = {};
    const middleware = [sagaMiddleware];

    const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));

    sagaMiddleware.run(rootSaga);

    return store;
}