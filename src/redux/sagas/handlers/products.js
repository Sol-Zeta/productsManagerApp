import {call, put} from 'redux-saga/effects';
import {setAllProducts} from '../../ducks/products';
import {
  requestGetAllProducts,
  requestGetProductsByPage,
  requestGetProductById,
} from '../requests/products';

export function* handleGetAllProducts(action) {
  try {
    const response = yield call(() => requestGetAllProducts(true));
    console.log('2. handler =>', response);
    yield put(setAllProducts(response));
    return;
  } catch (error) {
    console.error('2. Error handler =>', error);
  }
}
export function* handleGetProductsByPage({page, quantity, active}) {
  try {
    const response = yield call(() =>
      requestGetProductsByPage(page, quantity, active),
    );
    console.log('2. handler =>', response);
    yield put(setAllProducts(response));
    return;
  } catch (error) {
    console.error('2. Error handler =>', error);
  }
}
export function* handleGetProductById(id) {
  try {
    const response = yield call(() => requestGetProductById(id));
    console.log('2. handler =>', response);
    yield put(setAllProducts(response));
    return;
  } catch (error) {
    console.error('2. Error handler =>', error);
  }
}
