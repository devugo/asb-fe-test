import DropdownIcon from '../../images/icons/dropdown.svg';

import './breadcrumb.scss';

const Breadcrumb = () => {
    return (
        <div className="asb-breadcrumb">
            <div className="asb-container">
                <div className="content">
                    <p>Divisions</p>
                    <img src={DropdownIcon} />
                    <p>Module</p>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb;