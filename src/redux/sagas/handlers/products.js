import {call, put} from 'redux-saga/effects';
import {
  setAllProducts,
  setUpdateSuccess,
  setProductDetail,
  setPostSuccess,
  setDeleteSuccess,
} from '../../ducks/products';
import {
  requestGetAllProducts,
  requestGetProductsByPage,
  requestGetProductById,
  requestPutProductById,
  requestPostProduct,
  requestDeleteProductById,
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
export function* handlePostProduct(body) {
  try {
    const response = yield call(() => requestPostProduct(body));
    console.log('2. handler =>', response);
    if (response.success) {
      yield put(setPostSuccess(true));
    } else {
      yield put(setPostSuccess(false));
    }
    return;
  } catch (error) {
    console.error('2. Error handler =>', error);
    yield put(setPostSuccess(false));
  }
}
export function* handleDeleteProduct(id) {
  try {
    const response = yield call(() => requestDeleteProductById(id));
    console.log('2. handler =>', response);
    if (response.success) {
      yield put(setDeleteSuccess(true, response));
    } else {
      yield put(setDeleteSuccess(false));
    }
    return;
  } catch (error) {
    console.error('2. Error handler =>', error);
    yield put(setPostSuccess(false));
  }
}
