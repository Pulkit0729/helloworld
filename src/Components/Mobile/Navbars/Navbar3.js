import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { StyledNav } from '../../styled/StyledNav';
import { IconWrapper } from '../../styled/IconWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const StyledTitle = styled.span`
font-weight: 400;
font-size: 16px;
`;


export default function Navbar3({back, skip}) {
    let navigate = useNavigate();
    return (
        <StyledNav className='linear-gradient light-bottom-border'>
            {back?<IconWrapper onClick={() => { navigate(-1) }}>
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </IconWrapper>:null}

            {skip?<StyledTitle onClick={() => { navigate(skip)}} className='primaryText capitalize'>
                Skip
            </StyledTitle>:null}
        </StyledNav>
    )
}
