import { cart } from '../../data/cart';

export const READ_CART = 'READ_CART';

const cartData = cart.data;
const cartCount = cart.count;

export const read = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: READ_CART,
                data: cartData,
                count: cartCount
            })
        } catch(err){
            throw err;
        }
    }
}