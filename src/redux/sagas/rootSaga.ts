import { takeLatest } from 'redux-saga/effects';
import { handleGetAllProducts, handleGetProductsByPage, handleUpdateProductById, handleGetProductById } from './handlers/products';
import { GET_ALL_PRODUCTS, GET_PRODUCTS_BY_PAGE, GET_PRODUCT_BY_ID, UPDATE_PRODUCT_BY_ID } from '../ducks/products';

export function* watcherSaga() {
    yield takeLatest(GET_ALL_PRODUCTS, handleGetAllProducts);
    yield takeLatest(GET_PRODUCTS_BY_PAGE, handleGetProductsByPage);
    yield takeLatest(GET_PRODUCT_BY_ID, handleGetProductById);
    yield takeLatest(UPDATE_PRODUCT_BY_ID, handleUpdateProductById);
};