import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from'react-redux';
import { Skeleton } from 'antd';

//  Components
import DivisionSummaryIcon from '../../images/icons/division-summary.svg';
import PhoneIcon from '../../images/icons/phone.svg';
import MailIcon from '../../images/icons/mail.svg';
import LocationIcon from '../../images/icons/location.svg';
import JournalIcon from '../../images/icons/journal.svg';
import FingerprintsIcon from '../../images/icons/fingerprints.svg';
import { Notification } from '../../ui-elements/notification';

//  Style
import './division-summary.scss';

// Actions
import * as divisionSummaryActions from '../../store/actions/division-summary';

const DivisionSummary = () => {
    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState(false);

    const divisionSummary = useSelector(state => state.divisionSummary);
    const dispatch = useDispatch();

    const loadDivisionSummary = useCallback(async () => {
        
        setError(null);
        setLoading(true);
        try {
            await dispatch(divisionSummaryActions.read());

        } catch (err) {
            setError(err.message);
            Notification("error", "Connection Error", "There was an error connecting. Try back later!")
        }
        setLoading(false);
    }, [dispatch, setLoading, setError]);

    useEffect(() => {
        loadDivisionSummary();
    }, []);

    return (
        <div className="division-summary animate__animated  animate__fadeInDown asb-card">
            <div className="card-body">
                <div className="title">
                    <div className="icon">
                        <img src={DivisionSummaryIcon} alt="icon" />
                    </div>
                    <span>Division Summary</span>
                </div>
                <Skeleton loading={loading} active>
                    {
                        divisionSummary.loaded &&
                        <>
                            <div className="contact">
                                <img src={PhoneIcon} alt="icon" />
                                <span>{divisionSummary.data.phone}</span>
                            </div>
                            <div className="contact">
                                <img src={MailIcon} alt="icon" />
                                <span>{divisionSummary.data.email}</span>
                            </div>
                            <div className="contact">
                                <img src={LocationIcon} alt="icon" />
                                <span>{divisionSummary.data.address}</span>
                            </div>
                            <div className="contact">
                                <img src={JournalIcon} alt="icon" />
                                <span><a href="#">{divisionSummary.data.journal}</a></span>
                            </div>
                            <div className="contact">
                                <img src={FingerprintsIcon} alt="icon" />
                                <span>{divisionSummary.data.fingerprints}</span>
                            </div>
                        </>
                    }
                </Skeleton>
               
            </div>
        </div>
    )
}

export default DivisionSummary;