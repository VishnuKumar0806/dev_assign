import React from "react";
import './Style.css'
import Logout from '../Images/power-off.png';
import Logo from '../Images/food.png';

export default function CompanyName(){
    return(
        <React.Fragment>
            <div className="company-head">
                <img src={Logo} alt="company logo"/>
                <img src={Logout} alt="logout"/>
            </div>
        </React.Fragment>
    )
}