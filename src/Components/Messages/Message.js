import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
display: inline-block; 
padding: 0.5rem;
background-color:${props=> props.sender==='101'?({ theme }) => theme.background.prGradientCol:({ theme }) => theme.background.secGradientCol};
border: 0.1px solid ${({ theme }) => theme.border.secBorderColLight};
border-radius: 0.5rem;
margin-left: ${props=> props.sender==='101'?'auto':'0'};
`

export default function Message({ message }) {
  return (
    <div className='m-2 d-flex'>
      <StyledDiv sender={message.sender}>
        <span className={message.sender=='101'?'primaryText':'secondaryText'} >{message.data}</span>
      </StyledDiv>
    </div>
  )
}
