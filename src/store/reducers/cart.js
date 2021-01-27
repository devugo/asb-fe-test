import { READ_CART } from '../actions/cart';
import Cart from '../../models/Cart';

const initialState = {
    data: [],
    count: 0,
    loaded: false
}

const index = (state = initialState, action) => {
    switch(action.type){
        case READ_CART:
        
            let itemsData = action.data.map(item => 
                new Cart(
                    item.id, 
                    item.title, 
                    item.tag, 
                    item.size, 
                    item.cost, 
                    item.image
                )
            );
            return {
                ...state,
                data: itemsData,
                count: action.count,
                loaded: true
            };
        default:
            return state;
    }
}

export default index;