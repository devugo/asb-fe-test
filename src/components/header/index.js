import Logo from '../../images/logo.svg';
import HomeIcon from '../../images/icons/home.svg';
import EntriesIcon from '../../images/icons/entries.svg';
import DivisionsIcon from '../../images/icons/divisions.svg';
import SearchIcon from '../../images/icons/search.svg';
import NotificationIcon from '../../images/icons/notification.svg';
import ProfileIcon from '../../images/icons/profile.svg';
import DropdownIcon from '../../images/icons/dropdown.svg';

import './header.scss';

const Header = () => {
    return (
        <header>
            <div className="asb-container">
                <div className="content left">
                    <div className="title">
                        <img src={Logo} />
                        <span>FE Engineer Test 1</span>
                    </div>
                    <ul className="nav-links">
                        <li className="link">
                            <a href="#">
                                <img src={HomeIcon} />
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="link">
                            <a href="#">
                                <img src={EntriesIcon} />
                                <span>Entries</span>
                            </a>
                        </li>
                        <li className="link active">
                            <a href="#" className="active">
                                <img src={DivisionsIcon} />
                                <span>Divisions</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="content right">
                    <form>
                        <div className="form-body">
                            <input />
                            <img src={SearchIcon} />
                        </div>
                    </form>
                    <div className="notification">
                        <img src={NotificationIcon} />
                    </div>
                    <div className="dropdown">
                        <div className="profile">
                            <img src={ProfileIcon} />
                        </div>
                        <img src={DropdownIcon} />
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;