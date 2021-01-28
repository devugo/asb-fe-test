import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from'react-redux';
import { Skeleton } from 'antd';

import TableRow from '../table-row';
import './table.scss';

// Actions
import * as resourcesActions from '../../store/actions/resources';
import { Notification } from '../../ui-elements/notification';

const Table = () => {
    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState(false);
    const resources = useSelector(state => state.resources.data);
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
        <div className="asb-table animate__animated  animate__fadeInUp ">
               <Skeleton loading={loading} active>
                <TableRow header />
                {
                    resources && resources.length > 0 &&
                        resources.map((resource, index) => {
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
                }
            </Skeleton>
        </div>
    )
}

export default Table;