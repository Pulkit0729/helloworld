import React, { useState } from 'react';
import base64 from 'base-64';
import styled from 'styled-components';

import { apiUrl1 } from '../logic/Constant';
import { useNavigate } from "react-router-dom";
import { StyledButton1, StyledButton3 } from '../Components/styled/Button';
import { StyledSeparator } from '../Components/styled/Separator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconWrapper } from '../Components/styled/IconWrapper';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { StyledInput } from '../Components/styled/StyledInput';
import LoadingLayout from './LoadingLayout';

const Layout = styled.div`
display: flex;
flex-direction:column;
align-items:center;
width: 100%;
height: 100%;
padding: 2rem 1rem 0;

.error{
  color: ${({ theme }) => theme.errorCol};
  font-weight: 300;
}
`

export default function SignUpLayout({ callback }) {
    let navigate = useNavigate();
    let [isLoading, setLoading] = useState(false);

    function onSubmit(e) {
        e.preventDefault();

        const user = e.target.user.value;
        const password = e.target.password.value;

        setLoading(true);

        const rs = fetch(
            apiUrl1 + 'authorize/signup',
            {
                credentials: 'include', /*important*/
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + base64.encode(user + ':' + password),
                },
                method: 'POST'
            }
        ).then(async (res) => {
            const result = await res.json();
            if (res.status === 200 && result.success) {
                console.log('sucessfully created');
                setLoading(false);

                callback();
            } else {
                alert(result.msg)
                setLoading(false);
                console.log('error creating');
            }
        }).catch(err => {
            setLoading(false);
            console.log(err.message)
        });


    }
    return (
        isLoading ? <LoadingLayout /> : <Layout>
            <h1 className='primaryText mt-3'>Sign Up</h1>
            <div className="h-15"></div>
            <div className='w-100 align-items-center d-flex flex-column gap-4'>
                <form onSubmit={onSubmit} className='d-flex flex-column w-100 gap-4'>
                    <div className='w-100'>
                        <StyledInput id='user' type="email" placeholder='Email' className='primaryText' required />
                    </div>
                    <div className='w-100'>
                        <StyledInput title="6 or more" id='password' type="password" placeholder='Password(6 or more)' className='primaryText' pattern=".{6,}" required></StyledInput>
                    </div>
                    <StyledButton1 type='submit'><span className='primaryText'>Sign Up</span></StyledButton1>
                </form>
                <StyledSeparator>or</StyledSeparator>
                <StyledButton3 className='w-100 d-flex justify-content-center gap-2' onClick={() => navigate(``)}>
                    <IconWrapper>
                        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                    </IconWrapper>
                    <span className='primaryText'>Sign up with Google</span>
                </StyledButton3>
            </div>
            <button className='tertiaryText signup mt-auto pt-5' onClick={() => navigate(`/`)}>Already have an account? <span className='fw-bold'> Log In</span></button>
        </Layout>
    )
}


