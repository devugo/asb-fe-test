import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from'react-redux';
import { Skeleton } from 'antd';

//  Compoennts
import SummaryCard from '../../components/summary-card';
import { Notification } from '../../ui-elements/notification';

//  Style
import './summary.scss';

// Actions
import * as statisticsActions from '../../store/actions/statistics';

const Summary = () => {
    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState(false);

    const statistics = useSelector(state => state.statistics);
    const dispatch = useDispatch();

    const loadStatistics = useCallback(async () => {
        
        setError(null);
        setLoading(true);
        try {
            await dispatch(statisticsActions.read());

        } catch (err) {
            setError(err.message);
            Notification("error", "Connection Error", "There was an error connecting. Try back later!")
        }
        setLoading(false);
    }, [dispatch, setLoading, setError]);

    useEffect(() => {
        loadStatistics();
    }, []);

    return (
        <div className="summary">
            <div className="asb-container">
                <div className="content">
                    <div className="asb-row">
                        <Skeleton loading={loading} active>
                            {
                                statistics.loaded && statistics.data.length > 0 ?
                                    statistics.data.map((statistic, index) => {
                                        return (
                                            <SummaryCard 
                                                key={index}
                                                type={statistic.name}
                                                number={statistic.value}
                                            />
                                        )
                                    })
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

export default Summary;