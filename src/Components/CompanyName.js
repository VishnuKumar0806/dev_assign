import React from "react";
import './Style.css'
import Logout from '../Images/power-off.png';
import Logo from '../Images/sample-logo.png';
import 'semantic-ui-css/semantic.min.css';

export default function CompanyName() {
    return (
        <React.Fragment>
            <div className="company-head">
                <img src={Logo} className="company-logo" alt="company-logo" />
                <img src={Logout} alt="logout" title="logout"/>
            </div>
        </React.Fragment>
    )
}