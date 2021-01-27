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
    }, () => setOpenProfile(true))
    return (
        <header>
            <div className="asb-container">
                <div className="content left">
                    <div className="title">
                        <img src={Logo} />
                        <span>FE Engineer Test 1</span>
                    </div>
                    <div className={`hamburger ${open && 'open'} hide-desktop`} onClick={() => {setOpen(prevState => !prevState)}}>
                        <span className={`hamburger__stick ${open && 'open'}`}></span>
                    </div>
                    <ul className={`nav-links animate__animated animate__fadeIn ${open ? 'show' : ''}`}>
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
                    <div className="togglers">
                        <div className="notification">
                            <img src={NotificationIcon} />
                        </div>
                        <div className="dropdown">
                            <div className="profile" onClick={() => setOpenProfile(prevState => !prevState)}>
                                <img class="img" alt="image" src={ProfileIcon} />
                            </div>
                            <img className="dropdown-icon" onClick={() => setOpenProfile(prevState => !prevState)} src={DropdownIcon} alt="dropdown-icon" />

                            

                            <div id="myDropdown" class={`dropdown-content animate__animated  animate__fadeInDown ${openProfile ? 'show' : ''}`}>
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