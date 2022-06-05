import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { StyledNav } from '../../styled/StyledNav';
import { IconWrapper } from '../../styled/IconWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEllipsis } from '@fortawesome/free-solid-svg-icons';

const StyledTitle = styled.span`
font-weight: 400;
font-size: 16px;
`;



export default function Navbar2({title, moreCallback}) {
    let navigate = useNavigate();
    return (
        <StyledNav className='linear-gradient light-bottom-border'>
            <IconWrapper onClick={() => { navigate(-1) }}>
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </IconWrapper>

            <StyledTitle className='primaryText capitalize mx-auto'>
                {title}
            </StyledTitle>

            {moreCallback?<IconWrapper>
                <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
            </IconWrapper>:null}
        </StyledNav>
    )
}
