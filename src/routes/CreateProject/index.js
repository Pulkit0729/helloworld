import React from 'react';
import { useParams } from 'react-router-dom';
import AddTechPage from './AddTechPage';
import AddMembersPage from './AddMembersPage';
import AddDescription from './AddDescription';
import InfoPage from './InfoPage';
import AddMedia from './AddMedia';

export default function CreateProject() {
    let params = useParams();
    let id = params.id;
    switch (id) {
        case 'members':
            return (<AddMembersPage />)
        case 'tech':
            return (<AddTechPage/>)
        case 'info':
            return (<InfoPage/>)
        case 'description':
            return (<AddDescription />)
        case 'media':
            return (<AddMedia />)
    }
}
