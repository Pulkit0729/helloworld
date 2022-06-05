import React from 'react';
import Navbar2 from '../Components/Mobile/Navbars/Navbar2';
import SettingsListItem from '../Components/Mobile/SettingItem';
import {SettingsList} from '../logic/data/SettingsList';
import {Link } from 'react-router-dom';

export default function SettingsPage() {
    return (
        <div>
            <Navbar2 title="Settings" />
            <div className="t-5 position-absolute w-100">
                {SettingsList.map((item) => {
                    return <SettingsListItem settingItem={item} key={item.title}></SettingsListItem>
                })}
                <div className='d-flex gap-3 flex-column ps-3 mt-3'>
                    <Link to={''}>
                        <span className="tertiaryText">Privacy Policy</span>
                    </Link>
                    <Link to={''}>
                        <span className="tertiaryText">Terms & Conditions</span>
                    </Link>
                    <Link to={''}>
                        <span className="tertiaryText">Logout</span>
                    </Link>

                </div>
            </div>
        </div>
    )
}

