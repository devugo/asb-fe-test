import { products } from '../../data/products';

export const READ_PRODUCTS = 'READ_PRODUCTS';

const productsData = products.data;
const productsCount = products.count;

export const read = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: READ_PRODUCTS,
                data: productsData,
                count: productsCount
            })
        } catch(err){
            throw err;
        }
    }
}