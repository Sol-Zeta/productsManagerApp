import {IProduct} from '../../interfaces'

// *** ACTIONS *** //
// TODO: handle api error
// export const HANDLE_API_ERROR = 'handleApiError';
export const SET_ALL_PRODUCTS = 'setAllProducts';
export const GET_ALL_PRODUCTS = 'getAllProducts';
export const GET_PRODUCTS_BY_PAGE = 'getProductsByPage';
export const GET_PRODUCT_BY_ID = 'getProductById';
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
export const getProductById = { type: GET_PRODUCT_BY_ID}
export const updateProductById = { type: UPDATE_PRODUCT_BY_ID}
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
    favouriteProducts: []
}

export default (state:IInitialState = initialState, action:any) => {
    console.log("4. useSelector")
    switch (action.type) {
        case SET_ALL_PRODUCTS: 
            console.log("SET_ALL_PRODUCTS")        
            return { ...state, products: action.products, saludo: 'HOLI'};
        case GET_ALL_PRODUCTS: 
            console.log("GET_ALL_PRODUCTS")        
            return { ...state, products: action.products, saludo: 'CHAU'};
        case GET_PRODUCTS_BY_PAGE:
            return { success: true};
        case GET_PRODUCT_BY_ID:
            
        return;
        case UPDATE_PRODUCT_BY_ID:
            
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