import { useState, useEffect } from 'react';
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
    const [open, setOpen] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);

    useEffect(() => {
        window.onclick = function(event) {
            if (!event.target.matches(['.dropdown', '.profile', '.img', '.dropdown-icon'])) {
                setOpenProfile(false);
            }
        }
    })
    return (
        <header>
            <div className="asb-container">
                <div className="content left">
                    <div className="title animate__animated  animate__fadeIn">
                        <img src={Logo} alt="logo" />
                        <span>FE Engineer Test 1</span>
                    </div>
                    <div className={`hamburger ${open && 'open'} hide-desktop`} onClick={() => {setOpen(prevState => !prevState)}}>
                        <span className={`hamburger__stick ${open && 'open'}`}></span>
                    </div>
                    <ul className={`nav-links animate__animated animate__fadeIn ${open ? 'show' : ''}`}>
                        <li className="link">
                            <a href="#">
                                <img src={HomeIcon} alt="home-icon" />
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="link">
                            <a href="#">
                                <img src={EntriesIcon} alt="entries-icon" />
                                <span>Entries</span>
                            </a>
                        </li>
                        <li className="link active">
                            <a href="#" className="active">
                                <img src={DivisionsIcon} alt="divisions-icon" />
                                <span>Divisions</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="content right">
                    <form>
                        <div className="form-body">
                            <input />
                            <img src={SearchIcon} alt="search-icon" />
                        </div>
                    </form>
                    <div className="togglers">
                        <div className="notification">
                            <img src={NotificationIcon} alt="notification-icon" />
                        </div>
                        <div className="dropdown">
                            <div className="profile" onClick={() => setOpenProfile(prevState => !prevState)}>
                                <img className="img" alt="profile-photo" src={ProfileIcon} />
                            </div>
                            <img className="dropdown-icon" onClick={() => setOpenProfile(prevState => !prevState)} src={DropdownIcon} alt="dropdown-icon" />

                            

                            <div id="myDropdown" className={`dropdown-content animate__animated  animate__fadeInDown ${openProfile ? 'show' : ''}`}>
                                <a href="#profile">Profile</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;