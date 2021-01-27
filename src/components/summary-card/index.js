import SummaryIcon from '../../images/icons/card-icon.svg';

import './summary-card.scss';

const SummaryCard = ({
    number,
    type
}) => {
    return (
        <div className="summary-card asb-card">
            <div className="card-body">
                <div className="text">
                    <h3>{number}</h3>
                    <p>{type}</p>
                </div>
                <div className="icon">
                    <img src={SummaryIcon} alt="icon" />
                </div>
            </div>
        </div>
    )
}

export default SummaryCard;