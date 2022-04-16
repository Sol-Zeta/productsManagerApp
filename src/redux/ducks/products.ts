import {IProduct} from '../../interfaces'

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
export const POST_PRODUCT = 'postProduct';
export const DELETE_PRODUCT = 'deleteProduct';

// export const handleApiError = () => ({ type: HANDLE_API_ERROR})
export const setAllProducts = (products:any) => {
    console.log('3. ducks', products)
    return { 
        type: SET_ALL_PRODUCTS, 
        products
    }
}
export const getAllProducts = () => ({ type: GET_ALL_PRODUCTS})
export const getProductsByPage = (page: number, quantity: number, active: boolean) => ({ type: GET_PRODUCTS_BY_PAGE, page, quantity, active})
export const setProductDetail = (productDetail: any) => ({ type: SET_PRODUCT_DETAIL, productDetail})
export const getProductById = (id: string) => ({ type: GET_PRODUCT_BY_ID, id})
export const setUpdateSuccess = (updateSuccess: boolean) => ({ type: SET_UPDATE_SUCCESS, updateSuccess})
export const updateProductById = (id: string, body: any) => ({ type: UPDATE_PRODUCT_BY_ID, id, body})
export const postProduct = { type: POST_PRODUCT}
export const deleteProduct = { type: DELETE_PRODUCT}

interface IInitialState {
    products: IProduct[] | [];
    productDetail: IProduct | any;
    favouriteProducts: string[] | [];
}


// *** STATE *** //
const initialState = {
    products: [],
    productDetail: undefined,
    favouriteProducts: [],
    updateSuccess: false
}

export default (state:IInitialState = initialState, action:any) => {
    switch (action.type) {
        case SET_ALL_PRODUCTS: 
            console.log("SET_ALL_PRODUCTS")        
            return { ...state, products: action.products, saludo: 'HOLI'};
        case GET_ALL_PRODUCTS: 
            console.log("GET_ALL_PRODUCTS")        
            return { ...state, products: action.products, saludo: 'CHAU'};
        case GET_PRODUCTS_BY_PAGE:
            return { success: true};
        case SET_PRODUCT_DETAIL:
            console.log("3.SET_PRODUCT_DETAIL") 
            return { ...state, productDetail: action.productDetail};
        return;
        case SET_UPDATE_SUCCESS:
            console.log("3.SET_UPDATE_SUCCESS") 
            return { ...state, updateSuccess: action.updateSuccess};
        return;
        case POST_PRODUCT:
            
        return;
        case DELETE_PRODUCT:
            
        return;
    
        default:
            console.log("default")   
            return { ...state, products: action.products, saludo: 'rechau'};
    }
}