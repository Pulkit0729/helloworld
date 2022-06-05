import React from 'react';
import styled from 'styled-components';

const StyledExperienceCard= styled.div`
    .title{
        text-transform: uppercase;
        font-weight: 400;
        font-size: 16px;
    }
    .description {
        font-weight: 300;
        font-size: 14px;
    }
    img{
        border-radius:100%
    }
    
`

export default function ExperienceCard({experienceCard}) {
    return (
        <StyledExperienceCard className="light-bottom-border px-3 py-3 d-flex gap-3">
        <div>
            <img src="../amazon.jpg" width="50px" className="pt-1"></img>
            </div>
            <div className='d-flex flex-column gap-1'>
                <span className="primaryText title">{experienceCard.title}</span>
                <span className='secondaryText description'>{experienceCard.role}</span>
                <span className='secondaryText description'> {experienceCard.startYear}-{experienceCard.endYear}</span>
            </div>
        </StyledExperienceCard>
    )
}