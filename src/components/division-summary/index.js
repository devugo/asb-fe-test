import DivisionSummaryIcon from '../../images/icons/division-summary.svg';
import PhoneIcon from '../../images/icons/phone.svg';
import MailIcon from '../../images/icons/mail.svg';
import LocationIcon from '../../images/icons/location.svg';
import JournalIcon from '../../images/icons/journal.svg';
import FingerprintsIcon from '../../images/icons/fingerprints.svg';

import './division-summary.scss';

const DivisionSummary = () => {
    return (
        <div className="division-summary animate__animated  animate__fadeInDown asb-card">
            <div className="card-body">
                <div className="title">
                    <div className="icon">
                        <img src={DivisionSummaryIcon} alt="icon" />
                    </div>
                    <span>Division Summary</span>
                </div>
                <div className="contact">
                    <img src={PhoneIcon} alt="icon" />
                    <span>0801 234 5678</span>
                </div>
                <div className="contact">
                    <img src={MailIcon} alt="icon" />
                    <span>asbfefr@gmail.com</span>
                </div>
                <div className="contact">
                    <img src={LocationIcon} alt="icon" />
                    <span>Mojidi, Lagos</span>
                </div>
                <div className="contact">
                    <img src={JournalIcon} alt="icon" />
                    <span><a href="#">2 Journal entries</a></span>
                </div>
                <div className="contact">
                    <img src={FingerprintsIcon} alt="icon" />
                    <span>24 fingerprints enrolled</span>
                </div>
            </div>
        </div>
    )
}

export default DivisionSummary;