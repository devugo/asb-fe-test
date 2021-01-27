import { READ_PRODUCTS } from '../actions/products';
import Product from '../../models/Product';

const initialState = {
    data: [],
    count: 0,
    loaded: false
}

const index = (state = initialState, action) => {
    switch(action.type){
        case READ_PRODUCTS:
        
            let itemsData = action.data.map(item => 
                new Product(
                    item.id, 
                    item.title, 
                    item.cost, 
                    item.description, 
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