import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Profile from '../Images/food.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faBorderAll, faHeart, faUserPlus, faBullhorn, faUser, faGraduationCap, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function MenuPage() {

    const listRef = useRef(null);
    const spandetails = ['home', 'dashboard', 'donations', 'benificary profile', 'my campaingns', 'my profile','explore campaingns', 'apply for scholarship', 'log out'];
    const icons = ['faHouseUser', 'faBorderAll', 'faHeart', 'faHeart', 'faUserPlus', 'faBullhorn', 'faUser', 'faGraduationCap', 'faRightFromBracket'];

    const [clickedIcon, setClickedIcon] = useState('');

    useEffect(()=>{
        setClickedIcon(5)
    },[])

    return (
        <div className="menu-bar">
            <div className="profile-details">
                <img src={Profile} alt="user profile" />
                <p>Vishnu kumar</p>
            </div>
            <div className="menu-details" ref={listRef}>
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
                                <span>{value}</span>
                            </li>
                        )
                    })
                }
            </div>
        </div>
    )
}