import React from 'react'
import { useNavigate } from "react-router-dom";
import { StyledButton1, StyledButton3 } from '../Components/styled/Button';
import { StyledSeparator } from '../Components/styled/Separator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconWrapper } from '../Components/styled/IconWrapper';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { StyledInput } from '../Components/styled/StyledInput';


const Login = styled.div`
.forgot{
  font-size: 14px;
  opacity: 60%;
}
.signup{
  font-size: 14px;
  opacity: 60%;
}
`;

export default function LoginPage() {
  let navigate = useNavigate();
  return (
    <Login className="d-flex flex-column align-items-center w-100 px-2 h-100 justify-content-between pt-5">
      <h1 className='primaryText mt-3'>Hello World!</h1>

      <div className='w-100 align-items-center d-flex flex-column gap-4'>

        <form className='d-flex flex-column w-100 gap-4'>
          <StyledInput id='email' type="text" placeholder='Email or Phone' className='light-bottom-border primaryText'></StyledInput>
          <StyledInput id='password' type="password" placeholder='Password' className='light-bottom-border primaryText'></StyledInput>
          <StyledButton1 onClick={() => navigate(`/feed`)}><span className='primaryText'>Login</span></StyledButton1>
        </form>

        <button className='tertiaryText forgot' onClick={() => navigate(`/feed`)}>Forgot Password?</button>

        <StyledSeparator>or</StyledSeparator>

        <StyledButton3 className='w-100 d-flex justify-content-center gap-2' onClick={() => navigate(``)}>
          <IconWrapper>
            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
          </IconWrapper>
          <span className='primaryText'>Sign in with Google</span>
        </StyledButton3>
      </div>
      
      <button className='tertiaryText signup' onClick={() => navigate(`/signup`)}>Don't have an account?<span  className='fw-bold'> Signup</span></button>
    </Login>
  )
}
