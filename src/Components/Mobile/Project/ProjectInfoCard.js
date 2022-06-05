import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faPen, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { IconWrapper } from '../../styled/IconWrapper';


const StyledIconDiv = styled.div`
background: ${props=>props.secondary?'rgba(79, 227, 139, 0.1)':'rgba(43, 237, 230, 0.1)'};
border: 0.5px solid ${props=>props.secondary?'#4ECB71':'#2BEDE6'};
width: 40px;
height: 40px;
display: flex;
justify-content:center;
align-items: center;
box-sizing: border-box;
box-shadow: ${props=>props.secondary?'rgba(79, 227, 139, 0.55)':'rgba(43, 237, 230, 0.55)'};
border-radius: 100%;
font-size: 1.2rem;
`

export default function ProjectInfoCard() {
    return (
        <div className='linear-gradient'>
            <img src='../project.jpg' height="170px" width="100%"></img>
            <div className='d-flex align-items-center flex-column text-center gap-3 py-3 px-2'>
                <div className='d-flex justify-content-center flex-column gap-1'>
                    <span className='primaryText'>GINKGOS App</span>
                    <span className='tertiaryText'>By Pulkit Agagrwal,  1995-Present</span>
                </div>
                <span className='primaryText'>An Ecommerce web application for buying plants and pots</span>
                <div className='d-flex gap-2'>
                    <div className='d-flex gap-1 align-items-center'>
                        <IconWrapper secondary>
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        </IconWrapper>
                        <span className='tertiaryText'>{5}</span>
                    </div>
                    <StyledIconDiv>
                        <IconWrapper>
                            <FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon>
                        </IconWrapper>
                    </StyledIconDiv>
                    <StyledIconDiv secondary>
                        <IconWrapper secondary>
                            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                        </IconWrapper>
                    </StyledIconDiv>
                </div>
            </div>
        </div>
    )
}