import React from "react";
import Profile from '../Images/food.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faBorderAll, faHeart, faUserPlus, faBullhorn, faUser, faGraduationCap, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function MenuPage() {
    return (
        <div className="menu-bar">
            <div className="profile-details">
                <img src={Profile} alt="user profile"/>
                <p>Vishnu kumar</p>
            </div>
            <div className="menu-details">
                <li><span><FontAwesomeIcon icon={faHouseUser} /></span>home</li>
                <li><span><FontAwesomeIcon icon={faBorderAll} /></span>dashboard</li>
                <li><span><FontAwesomeIcon icon={faHeart} /></span>donations</li>
                <li><span><FontAwesomeIcon icon={faUserPlus} /></span>benificary profile</li>
                <li><span><FontAwesomeIcon icon={faBullhorn} /></span>my campaingns</li>
                <li><span><FontAwesomeIcon icon={faUser} /> </span>my profile</li>
                <li><span><FontAwesomeIcon icon={faHeart} /></span>explore campaingns</li>
                <li><span><FontAwesomeIcon icon={faGraduationCap} /></span>appy for scholarship</li>
                <li><span><FontAwesomeIcon icon={faRightFromBracket} /></span>log out</li>
            </div>
        </div>
    )
}