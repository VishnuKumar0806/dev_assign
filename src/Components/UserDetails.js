import React from "react";
import Profile from '../Images/food.png';

export default function UserDetails() {
    return (
        <div className="user-details">
            <div className="user-details-head">
                <img src={Profile} alt="user profile"/>
                <span>
                    <p>Name</p>
                    <p><b>Vishnu kumar</b></p>
                </span>
                <span>
                    <p>Age group</p>
                    <p><b>20-30</b></p>
                </span>
                <span>
                    <p>Contact</p>
                    <p><b>+91 9658741231</b></p>
                </span>
                <span>
                    <p>Email</p>
                    <p><b>vishu0831</b></p>
                </span>
                <span>
                    <button>Edit</button>
                </span>
            </div>
            <div className="user-other-details">
                <div className="sub-details">
                    <span>
                        <label>
                            Address
                        </label>
                        <p>:</p>
                        <p>19/11, nayakar street</p>
                    </span>
                    <span>
                        <label>
                            City
                        </label>
                        <p>:</p>
                        <p>Turicorn</p>
                    </span>
                    <span>
                        <label>
                            Zip code / pin code
                        </label>
                        <p>:</p>
                        <p>628092</p>
                    </span>
                    <span>
                        <label>
                            state
                        </label>
                        <p>:</p>
                        <p>tamil nadu</p>
                    </span>
                    <span>
                        <label>
                            country
                        </label>
                        <p>:</p>
                        <p>india</p>
                    </span>
                    <span>
                        <label>
                            religion
                        </label>
                        <p>:</p>
                        <p>chirstianitiy</p>
                    </span>
                    <span>
                        <label>
                            PAN number
                        </label>
                        <p>:</p>
                        <p>0DFPS9404A</p>
                    </span>
                    <span>
                        <label>
                            prefession
                        </label>
                        <p>:</p>
                        <p>employee</p>
                    </span>
                </div>
                <div className="sub-details">
                    <span>
                        <label>
                            with to be anonymous
                        </label>
                        <p>:</p>
                        <p>no</p>
                    </span>
                    <span>
                        <label>
                            facebook profile link
                        </label>
                        <p>:</p>
                        <p>-</p>
                    </span>
                    <span>
                        <label>
                            linkedliin profile link
                        </label>
                        <p>:</p>
                        <p>-</p>
                    </span>
                    <span>
                        <label>
                            I donate for tax befifits
                        </label>
                        <p>:</p>
                        <p>no</p>
                    </span>
                    <span>
                        <label>
                            I wish to connect with my ward
                        </label>
                        <p>:</p>
                        <p>no</p>
                    </span>
                    <span>
                        <label>
                            I wish to get a call . notifications from skopick
                        </label>
                        <p>:</p>
                        <p>no</p>
                    </span>
                    <span>
                        <label>
                            I wish to reccive 80G certificate
                        </label>
                        <p>:</p>
                        <p>Yes</p>
                    </span>
                </div>
            </div>
        </div>
    )
}