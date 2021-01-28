
import * as CONSTANTS from '../../constants';export const READ_RESOURCES = 'READ_RESOURCES';

export const read = () => {
    return async (dispatch, getState) => {
        try {

            const response = await fetch(
                `${CONSTANTS.APIURL}/resources.json`, 
            );

            if( !response.ok){
                throw new Error('Something went wrong');
            }
            
            const resData = await response.json();

            dispatch({
                type: READ_RESOURCES,
                data: resData,
                count: resData.length
            })
        } catch(err){
            throw err;
        }
    }
}