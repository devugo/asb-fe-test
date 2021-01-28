import { READ_STATISTICS } from '../actions/statistics';
import Statistic from '../../models/Statistic';

const initialState = {
    data: [],
    count: 0,
    loaded: false
}

const index = (state = initialState, action) => {
    switch(action.type){
        case READ_STATISTICS:
        
            let itemsData = action.data.map(item => 
                new Statistic(
                    item.id,
                    item.name,
                    item.value
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