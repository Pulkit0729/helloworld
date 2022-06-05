import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { StyledButton1, StyledButton2 } from '../../styled/Button';
import { IconWrapper } from '../../styled/IconWrapper';
import styled from 'styled-components';


const StyledProfCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:2rem;
padding: 24px 16px 16px;
width: 100%;

.name{
font-weight: 600;
font-size: 18px;
text-align: center;
}
    .imageDiv{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        gap: 1rem;
    }
    .bio{
        font-weight: 300;
        font-size: 14px;
        text-align: center;
    }
    img{
        width: 78px;
        border: 1px solid ${({ theme})=>theme.borderColor};
        border-radius: 100%;
    }
`;

export default function ProfileCard() {
    return (
        <StyledProfCard className='linear-gradient light-bottom-border'>
            <span className="name primaryText">Jeff Bezoz</span>
            <div className='imageDiv'>
                <div className='w-100'>
                    <StyledButton2><span>Post</span></StyledButton2>
                </div>
                <img src='./user.jfif'></img>
                <div className='w-100'>
                    <StyledButton1><span>Edit Profile</span></StyledButton1>
                </div>
            </div>
            <div className='w-100 text-center '>
                <span className='bio secondaryText'>
                    For the longest of realms Entity has been a safe haven for weary space pilots.
                </span>
                <div className="d-flex align-items-center justify-content-center gap-2 mt-2">
                    <IconWrapper><FontAwesomeIcon icon={faLocationDot} /></IconWrapper>
                    <span className='primaryText' >Planet Earth</span>
                </div>
            </div>
        </StyledProfCard>
    )
}

