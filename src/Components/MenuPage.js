import React, { useEffect, useState } from "react";
import Profile from '../Images/profile-photo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faBorderAll, faHeart, faUserPlus, faBullhorn, faUser, faGraduationCap, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function MenuPage() {

    const spandetails = ['home', 'dashboard', 'donations', 'benificary profile', 'my campaingns', 'my profile', 'explore campaingns', 'apply for scholarship', 'log out'];
    const icons = ['faHouseUser', 'faBorderAll', 'faHeart', 'faHeart', 'faUserPlus', 'faBullhorn', 'faUser', 'faGraduationCap', 'faRightFromBracket'];

    const [clickedIcon, setClickedIcon] = useState('');

    useEffect(() => {
        setClickedIcon(5)
    }, [])

    return (
        <div className="menu-bar">
            <div className="hambergur-menu-bar">

            </div>
            <div className="profile-details">
                <img src={Profile} alt="user profile" />
                <p>Vishnu kumar</p>
            </div>
            <div className="menu-details">
                {
                    spandetails.map((value, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => setClickedIcon(index)}
                                style={{
                                    color: clickedIcon === index ? 'gray' : 'white',
                                    background: clickedIcon === index ? 'white' : 'gray'
                                }}
                            >
                                <span><FontAwesomeIcon icon={icons[index]} />{value}</span>
                            </li>
                        )
                    })
                }
            </div>
        </div>
    )
}