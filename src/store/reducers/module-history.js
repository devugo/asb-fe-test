import { READ_MODULE_HISTORY } from '../actions/module-history';
import ModuleHistory from '../../models/ModuleHistory';

const initialState = {
    data: [],
    count: 0,
    loaded: false
}

const index = (state = initialState, action) => {
    switch(action.type){
        case READ_MODULE_HISTORY:
        
            let itemsData = action.data.map(item => 
                new ModuleHistory(
                    item.activity,
                    item.date,
                    item.type
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