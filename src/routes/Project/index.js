import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectInfoCard from '../../Components/Mobile/Project/ProjectInfoCard';
import Tabs from '../../Components/Mobile/Project/Tabs';
import Tech from './Tech';
import About from './About';
import MainLayout from '../../Layouts/MainLayout';

export default function ProjectPage() {
    let params = useParams();
    let tab = params.tab;

    return (
        <MainLayout>
            <div className="t-5 position-absolute w-100 overflow-hidden">
                <ProjectInfoCard />
                <Tabs tab={tab} />
                {tab ? <Tech /> : <About />}
            </div>
        </MainLayout>
    )
}

