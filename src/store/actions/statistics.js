
import * as CONSTANTS from '../../constants';
export const READ_STATISTICS = 'READ_STATISTICS';

export const read = () => {
    return async (dispatch, getState) => {
        try {

            const response = await fetch(
                `${CONSTANTS.APIURL}/statistics.json`, 
            );

            if( !response.ok){
                throw new Error('Something went wrong');
            }
            
            const resData = await response.json();

            dispatch({
                type: READ_STATISTICS,
                data: resData,
                count: resData.length
            })
        } catch(err){
            throw err;
        }
    }
}