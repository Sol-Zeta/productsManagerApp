import {call, put} from 'redux-saga/effects';
import {
  setAllProducts,
  setUpdateSuccess,
  setProductDetail,
} from '../../ducks/products';
import {
  requestGetAllProducts,
  requestGetProductsByPage,
  requestGetProductById,
  requestPutProductById,
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
    if (response.success) {
      yield put(setProductDetail(response));
    } else {
      yield put(setProductDetail(undefined));
    }
    return;
  } catch (error) {
    yield put(setProductDetail(undefined));
    console.error('2. Error handler =>', error);
  }
}
export function* handleUpdateProductById(id, body) {
  try {
    const response = yield call(() => requestPutProductById(id, body));
    console.log('2. handler =>', response);
    if (response.success) {
      yield put(setUpdateSuccess(true));
    } else {
      yield put(setUpdateSuccess(false));
    }
    return;
  } catch (error) {
    console.error('2. Error handler =>', error);
    yield put(setUpdateSuccess(false));
  }
}
