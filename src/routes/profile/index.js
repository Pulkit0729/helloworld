import React from 'react';
import { useParams } from 'react-router-dom';

import Navbar2 from '../../Components/Mobile/Navbars/Navbar2';
import ProfileCard from '../../Components/Mobile/Profile/ProfileCard';
import Tabs from '../../Components/Mobile/Profile/Tabs';
import Hacks from './Hacks';
import Activity from './Activity';

export default function ProfilePage() {
    let params = useParams();
    let tab = params.tab;

    return (
        <React.Fragment>
            <Navbar2 title="Profile"></Navbar2>
            <div className="position-absolute t-5 w-100">
                <ProfileCard></ProfileCard>
                <Tabs tab={tab}></Tabs>
                {tab ? <Activity /> : <Hacks />}
            </div>
        </React.Fragment>
    )
}
