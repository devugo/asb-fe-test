import { READ_DIVISION_SUMMARY } from '../actions/division-summary';
import DivisionSummary from '../../models/DivisionSummary';

const initialState = {
    data: {
        address: '',
        email: '',
        fingerprints: '',
        journal: '',
        phone: ''
    },
    loaded: false
}

const index = (state = initialState, action) => {
    switch(action.type){
        case READ_DIVISION_SUMMARY:
        
            let item = action.data;
            let itemData =  new DivisionSummary(
                item.address,
                item.email,
                item.fingerprints,
                item.journal,
                item.phone
            );
            return {
                ...state,
                data: itemData,
                loaded: true
            };
        default:
            return state;
    }
}

export default index;