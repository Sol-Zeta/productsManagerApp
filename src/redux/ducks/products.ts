import {IProduct} from '../../interfaces';

// *** ACTIONS *** //
// TODO: handle api error
// export const HANDLE_API_ERROR = 'handleApiError';
export const SET_ALL_PRODUCTS = 'setAllProducts';
export const GET_ALL_PRODUCTS = 'getAllProducts';
export const GET_PRODUCTS_BY_PAGE = 'getProductsByPage';
export const SET_PRODUCT_DETAIL = 'setProductDetail';
export const GET_PRODUCT_BY_ID = 'getProductById';
export const SET_UPDATE_SUCCESS = 'setUpdateSuccess';
export const UPDATE_PRODUCT_BY_ID = 'updateProductById';
export const SET_POST_SUCCESS = 'setPostSuccess';
export const POST_PRODUCT = 'postProduct';
export const SET_DELETE_SUCCESS = 'setDeleteSuccess';
export const DELETE_PRODUCT = 'deleteProduct';

// export const handleApiError = () => ({ type: HANDLE_API_ERROR})
export const setAllProducts = (
  success: boolean,
  products: any,
  page: number,
  quantity: number,
  active: boolean,
) => {
  return {
    type: SET_ALL_PRODUCTS,
    products: success ? products.data.list : [],
    totalProducts: success ? products.data.totalCount : 0,
    page,
    quantity,
    active,
    getProductsSuccess: success,
  };
};
export const getAllProducts = () => ({type: GET_ALL_PRODUCTS});
export const getProductsByPage = (
  page: number,
  quantity: number,
  active: boolean,
) => ({type: GET_PRODUCTS_BY_PAGE, page, quantity, active});
export const setProductDetail = (productDetail: any) => ({
  type: SET_PRODUCT_DETAIL,
  productDetail,
});
export const getProductById = (id: string) => ({type: GET_PRODUCT_BY_ID, id});
export const setUpdateSuccess = (updateSuccess: boolean) => ({
  type: SET_UPDATE_SUCCESS,
  updateSuccess,
});
export const updateProductById = (id: string, body: any) => ({
  type: UPDATE_PRODUCT_BY_ID,
  updateSuccess: false,
  id,
  body,
});
export const setPostSuccess = (postSuccess: boolean, id: string) => ({
  type: SET_POST_SUCCESS,
  postSuccess,
  postId: id,
});
export const postProduct = (body: any) => ({type: POST_PRODUCT, body});
export const setDeleteSuccess = (deleteSuccess: boolean, products: any) => ({
  type: SET_DELETE_SUCCESS,
  deleteSuccess,
  products,
});
export const deleteProduct = (
  id: string,
  page: number,
  quantity: number,
  active: boolean,
) => ({type: DELETE_PRODUCT, id, page, quantity, active});

interface IInitialState {
  products: IProduct[] | [];
  productDetail: IProduct | any;
  favouriteProducts: string[] | [];
}

// *** STATE *** //
const initialState = {
  products: [],
  totalProducts: 0,
  getProductsSuccess: false,
  productDetail: undefined,
  favouriteProducts: [],
  updateSuccess: false,
  postSuccess: false,
  postId: undefined,
  deleteSuccess: false,
  page: 0,
  quantity: 3,
  active: true,
};

export default (state: IInitialState = initialState, action: any) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      console.log('SET_ALL_PRODUCTS');
      const {
        products,
        getProductsSuccess,
        totalProducts,
        page,
        quantity,
        active,
      } = action;
      return {
        ...state,
        products,
        getProductsSuccess,
        totalProducts,
        page,
        quantity,
        active,
      };
    case SET_PRODUCT_DETAIL:
      console.log('3.SET_PRODUCT_DETAIL');
      return {...state, productDetail: action.productDetail};
    case SET_UPDATE_SUCCESS:
      console.log('3.SET_UPDATE_SUCCESS');
      return {...state, updateSuccess: action.updateSuccess};
    case SET_POST_SUCCESS:
      console.log('3. SET_POST_SUCCESS');
      return {...state, postSuccess: action.postSuccess, postId: action.postId};
    case SET_DELETE_SUCCESS:
      console.log('3. SET_DELETE_SUCCESS', action.products);
      return {
        ...state,
        deleteSuccess: action.deleteSuccess,
        products: action.products,
      };
    default:
      console.log('DEFAULT', state);
      return {...state};
  }
};
