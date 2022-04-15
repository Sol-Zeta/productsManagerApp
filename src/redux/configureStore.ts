import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import products from './ducks/products';
import {watcherSaga} from './sagas/rootSaga';

const reducer = combineReducers({
  products: products,
});

const sagaMiddleWare = createSagaMiddleWare();

const middleware = [sagaMiddleWare];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleWare.run(watcherSaga);

export default store;
