import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from'react-redux';
import { Skeleton } from 'antd';

//  Images
import ModuleHistoryIcon from '../../images/icons/module-history.svg';

//  Components
import { Notification } from '../../components/notification';
import { Item } from './Item';

//  Style
import './module-history.scss';

// Actions
import * as moduleHistoryActions from '../../store/actions/module-history';

const ModuleHistory = () => {
    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState(false);

    const moduleHistory = useSelector(state => state.moduleHistory);
    const dispatch = useDispatch();

    const loadModuleHistory = useCallback(async () => {
        
        setError(null);
        setLoading(true);
        try {
            await dispatch(moduleHistoryActions.read());

        } catch (err) {
            setError(err.message);
            // Notification("error", "Connection Error", "There was an error connecting. Try back later!")
        }
        setLoading(false);
    }, [dispatch, setLoading, setError]);

    useEffect(() => {
        loadModuleHistory();
    }, []);

    return (
        <div className="module-history animate__animated  animate__fadeIn asb-card">
            <div className="card-body">
                <div className="title">
                    <div className="icon">
                        <img src={ModuleHistoryIcon} alt="icon" />
                    </div>
                    <span>Module History</span>
                </div>
                <div className="list-items">
                    <div className="line">
                        {
                            moduleHistory.loaded && moduleHistory.data.length > 0 &&
                            moduleHistory.data.map((mh, index) => <div key={index} className="circle"></div>)
                        }
                    </div>
                    <div className="items">

                        <Skeleton loading={loading} active>
                            {
                                moduleHistory.loaded && moduleHistory.data.length > 0 ?
                                    moduleHistory.data.map((mh, index) => <Item {...mh} key={index} />)
                                :
                                <div className="center" style={{display: 'flex', justifyContent: 'center'}}><p>No record found.</p></div>
                            }
                        </Skeleton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModuleHistory;