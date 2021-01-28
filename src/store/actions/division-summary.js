
import * as CONSTANTS from '../../constants';
export const READ_DIVISION_SUMMARY = 'READ_DIVISION_SUMMARY';

export const read = () => {
    return async (dispatch, getState) => {
        try {

            const response = await fetch(
                `${CONSTANTS.APIURL}/division_summary.json`, 
            );

            if( !response.ok){
                throw new Error('Something went wrong');
            }
            
            const resData = await response.json();

            dispatch({
                type: READ_DIVISION_SUMMARY,
                data: resData
            })
        } catch(err){
            throw err;
        }
    }
}