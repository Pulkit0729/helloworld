import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { IconWrapper } from '../../styled/IconWrapper';

const StyledProjectCard= styled.div`
    .title{
        text-transform: uppercase;
        font-weight: 400;
        font-size: 16px;
    }
    .description {
        font-weight: 300;
        font-size: 14px;
    }
    
`

export default function ProjectCard({projectCard}) {
    let navigate = useNavigate();
    function goToProject(){
        navigate('/project');
    };
    return (
        <StyledProjectCard className="light-bottom-border px-3 py-3 d-flex gap-3" onClick={goToProject}>
        <div>
            <img src="../amazon.jpg" width="50px" className="pt-1"></img>
            </div>
            <div className='d-flex flex-column gap-1'>
                <span className="primaryText title">{projectCard.title}</span>
                <span className='secondaryText description'>{projectCard.description}</span>
                <span className='secondaryText description'> {projectCard.startYear}-{projectCard.endYear}</span>
                <div className='d-flex gap-1 align-items-center'>
                    <IconWrapper secondary>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </IconWrapper>
                    <span className='secondaryText'>{projectCard.members}</span>
                </div>

            </div>
        </StyledProjectCard>
    )
}