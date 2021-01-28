
import * as CONSTANTS from '../../constants';
export const READ_MODULE_HISTORY = 'READ_MODULE_HISTORY';

export const read = () => {
    return async (dispatch, getState) => {
        try {

            const response = await fetch(
                `${CONSTANTS.APIURL}/module_history.json`, 
            );

            if( !response.ok){
                throw new Error('Something went wrong');
            }
            
            const resData = await response.json();

            dispatch({
                type: READ_MODULE_HISTORY,
                data: resData,
                count: resData.length
            })
        } catch(err){
            throw err;
        }
    }
}