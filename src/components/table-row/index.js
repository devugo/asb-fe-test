import TickIcon from '../../images/icons/tick.svg';
import MidIcon from '../../images/icons/mid.svg';
import LowIcon from '../../images/icons/low.svg';
import HighIcon from '../../images/icons/high.svg';
import PickerIcon from '../../images/icons/picker.svg';

import './table-row.scss';

const TableRow = ({
    name,
    header,
    place,
    address,
    status,
    entries,
    risk
}) => {
   
    return (
        <div className="table-row">
            {
                header ? 
                <>
                    <div className="icon">
                        <input type="checkbox" />
                    </div>
                    <div className="name">
                        <span>NAME</span>
                    </div>
                    <div className="location">
                        <span>LOCATION</span>
                    </div>
                    <div className="status">
                        <span>STATUS</span>
                    </div>
                    <div className="entries">
                        <span>ENTRIES</span>
                    </div>
                    <div className="risk-profile">
                        <span>RISK PROFILE</span>
                    </div>
                </> :
                <>
                    <div className="icon">
                        <input type="checkbox" />
                        <img src={TickIcon} alt="icon" />
                    </div>
                    <div className="name">
                        <span>{name}</span>
                    </div>
                    <div className="location">
                        <div>
                            <span>{place}</span>
                            <span>{address}</span>
                        </div>
                    </div>
                    <div className="status">
                        <span className={`${status.type == 'warning' ? 'warning' : ''}`}>{status.value}</span>
                    </div>
                    <div className="entries">
                        <div>
                            <span>{entries.count} Unique Entries</span>
                            <span>{entries.text}</span>
                        </div>
                    </div>
                    <div className="risk-profile">
                        <div>
                            {
                                risk.type == 'low' ? <img src={LowIcon} alt="icon" /> : risk.type == 'mid' ? <img src={MidIcon} alt="icon" /> : <img src={HighIcon} alt="icon" />
                            }
                            <span className={`${risk.type == 'low' ? 'low' : risk.type == 'mid' ? 'mid' : 'high'}`}>{risk.text}</span>
                            <img src={PickerIcon} alt="icon" />
                        </div>
                    </div>
                </>
            }
           
        </div>
    )
}

export default TableRow;