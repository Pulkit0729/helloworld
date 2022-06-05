import React from 'react'
import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';
import { ReactComponent as InternetLogo } from '../../../svg/internet.svg';
import { IconWrapper } from '../../styled/IconWrapper';
import { StyledNav } from '../../styled/StyledNav';

const StyledBrandSpan = styled.span`
font-weight: 500;
font-size: 18px;
`;

const StyledUser = styled.img`
width: 28px;
background: linear-gradient(0deg, rgba(43, 237, 230, 0.15), rgba(43, 237, 230, 0.15));
border: 0.2px solid ${({ theme }) => theme.borderColor};
box-sizing: border-box;
border-radius: 100%;`



export default function Navbar({ menuCallback }) {
    let navigate = useNavigate();
    return (
        <StyledNav className='linear-gradient light-bottom-border'>
            <Link to={'/feed'}>
                <img src={'../logo192.png'} width="42px" />
            </Link>
            <StyledBrandSpan className='primaryText'>Hello World</StyledBrandSpan>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <IconWrapper>
                    <InternetLogo onClick={() =>{navigate('/chat')}} width="25px"></InternetLogo>
                </IconWrapper>
                <StyledUser src="../user.jfif" className="ms-3" onClick={menuCallback}></StyledUser>
            </div>
        </StyledNav>
    )
}
