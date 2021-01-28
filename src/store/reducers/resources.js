import { READ_RESOURCES } from '../actions/resources';
import Resource from '../../models/Resource';

const initialState = {
    data: [],
    count: 0,
    loaded: false
}

const index = (state = initialState, action) => {
    switch(action.type){
        case READ_RESOURCES:
        
            let itemsData = action.data.map(item => 
                new Resource(
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