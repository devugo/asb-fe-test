import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from'react-redux';
import { Skeleton } from 'antd';

//  Components
import TableRow from '../table-row';
import { Notification } from '../../components/notification';

// Style
import './table.scss';

// Actions
import * as resourcesActions from '../../store/actions/resources';

const Table = () => {
    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState(false);

    const resources = useSelector(state => state.resources);
    const dispatch = useDispatch();

    const loadResources = useCallback(async () => {
        
        setError(null);
        setLoading(true);
        try {
            await dispatch(resourcesActions.read());

        } catch (err) {
            setError(err.message);
            Notification("error", "Connection Error", "There was an error connecting. Try back later!")
        }
        setLoading(false);
    }, [dispatch, setLoading, setError]);

    useEffect(() => {
        loadResources();
    }, []);

    return (
        <div className="asb-table animate__animated animate__fadeIn">
               <Skeleton loading={loading} active>
                <TableRow header />
                {
                    resources.loaded && resources.data.length > 0 ?
                        resources.data.map((resource, index) => {
                            return (
                                <TableRow
                                    key={index}
                                    name={resource.name}
                                    place={resource.location.state}
                                    address={resource.location.address}
                                    status={resource.status}
                                    entries={resource.entries}
                                    risk={resource.risk}
                                />
                            )
                        })
                    :
                    <div className="center" style={{display: 'flex', justifyContent: 'center'}}><p>No record found.</p></div>
                }
            </Skeleton>
        </div>
    )
}

export default Table;