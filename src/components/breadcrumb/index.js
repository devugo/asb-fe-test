import DropdownIcon from '../../images/icons/dropdown.svg';

import './breadcrumb.scss';

const Breadcrumb = () => {
    return (
        <div className="asb-breadcrumb">
            <div className="asb-container">
                <div className="content">
                    <span>Divisions</span>
                    <img src={DropdownIcon} alt="dropdown-icon" />
                    <span>Module</span>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb;