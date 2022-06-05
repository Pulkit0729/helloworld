import React from 'react';
import ProjectCardClass from '../../logic/modals/ProjectCardClass';
import ExperienceCardClass from '../../logic/modals/ExperienceCardClass';
import ProjectCard from '../../Components/Mobile/Profile/ProjectCard';
import SkillCard from '../../Components/Mobile/Profile/SkillCard';
import ExperienceCard from '../../Components/Mobile/Profile/ExperienceCard'
import CardView from '../../Components/Mobile/CardView';
import { faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import { faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import {useNavigate} from 'react-router-dom';

export default function Hacks() {
    return (
        <React.Fragment>
            <ProjectList></ProjectList>
            <Skills />
            <ExperienceList/>
        </React.Fragment>
    )
}


function ProjectList() {
    let navigate = useNavigate();
    const projectCard = new ProjectCardClass('GINKGOS', 'Ecommerce Web', 1995, 'Present', 5);
    return (
        <CardView title="Projects" icon1={faPlus} callback1={()=>{navigate('/createProject/info')}}>
            <ProjectCard projectCard={projectCard}></ProjectCard>
            <ProjectCard projectCard={projectCard}></ProjectCard>
        </CardView>
    )
}

function Skills() {
    return (
        <CardView title="Skills" icon1={faPlus} icon2={faPen}>
            <SkillCard name="Python" icon={faPython} stars={5}></SkillCard>
            <SkillCard name="Java" icon={faJava} stars={5}></SkillCard>
        </CardView>

    )
}

function ExperienceList(){
    const experienceCard = new ExperienceCardClass("Amazon Company",'Founder','1995')
    return(
        <CardView title="Experience" icon1={faPlus} icon2={faPen}>
            <ExperienceCard experienceCard={experienceCard}></ExperienceCard>
            <ExperienceCard experienceCard={experienceCard}></ExperienceCard>
        </CardView>
    )
}