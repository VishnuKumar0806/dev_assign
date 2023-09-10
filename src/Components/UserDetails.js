import React from "react";
import Profile from '../Images/profile-photo.png';

export default function UserDetails() {
    const primary_deatils = {
        'name': 'vishnu',
        'age group': '20-30',
        'contact': '+91 9876543210',
        'e mail': 'vishnu31@gmail.com',
    }
    const userdetails = {
        'name': 'vishnu',
        'city': 'madurai',
        'zip code': '625012',
        'state': 'tamil-nadu',
        'country': 'india',
        'religion': 'hindu',
        'pan number': '0DFPS1402A',
        'prefession': 'employee'
    }
    const other_details = {
        'With To Be Anonymous': 'no',
        'Facebook Profile Link': 'no',
        'Linkedliin Profile Link': 'no',
        'I Donate For Tax Befifits': 'no',
        'I Wish To Connect With My Ward': 'no',
        'I Wish To Get A Call . Notifications From Skopick': 'no',
        'I Wish To Reccive 80G Certificate': 'no'
    };
    return (
        <div className="user-details">
            <div className="user-details-head">
                <img src={Profile} alt="user profile" className="user-profile" />
                {
                    Object.entries(primary_deatils).map(([value, key]) => {
                        return (
                            <span className="user-details-head-span">
                                <p>{value}</p>
                                <p>{key}</p>
                            </span>
                        )
                    })
                }
                <span>
                    <button className="ui button">Edit</button>
                </span>
            </div>
            <div className="user-other-details">
                <div className="sub-details">
                    {
                        Object.entries(userdetails).map(([value, key]) => {
                            return (
                                <span className="sub-user-details">
                                    <p>{value}</p>
                                    <p>:</p>
                                    <p>{key}</p>
                                </span>
                            )
                        })
                    }
                </div>
                <div className="sub-details">
                    {
                        Object.entries(other_details).map(([value, key]) => {
                            return (
                                <span className="sub-user-details">
                                    <p>{value}</p>
                                    <p>:</p>
                                    <p>{key}</p>
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}