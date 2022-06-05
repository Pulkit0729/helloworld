import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IconWrapper } from '../../styled/IconWrapper';
import { StyledNav } from '../../styled/StyledNav';

const StyledUser = styled.img`
width: 40px;
background: linear-gradient(0deg, rgba(43, 237, 230, 0.15), rgba(43, 237, 230, 0.15));
border: 0.2px solid ${({ theme }) => theme.borderColor};
box-sizing: border-box;
border-radius: 100%;`


export default function ChatNavbar({user}) {
  let navigate = useNavigate();
  return (
    <StyledNav className='linear-gradient light-bottom-border justify-content-start gap-2'>
      <IconWrapper onClick={() => { navigate(-1) }}>
        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
      </IconWrapper>
      <div className='d-flex align-items-center gap-2'>
        <StyledUser src={user.image} alt={user.name} />
        <span className='primaryText'>{user.name}</span>
      </div>
    </StyledNav>
  )
}
