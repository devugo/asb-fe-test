
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

            console.log(resData);

            dispatch({
                type: READ_RESOURCES,
                data: resData
            })
        } catch(err){
            throw err;
        }
    }
}