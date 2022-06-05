import React from 'react';
import styled from 'styled-components';
import Navbar3 from '../../Components/Mobile/Navbars/Navbar3';
import { useNavigate } from 'react-router-dom';
import { StyledButton1 } from '../../Components/styled/Button';

const StyledInput = styled.div`
position:relative;
margin-top: 24px;
label{
  position: absolute;
		pointer-events: none;
		top: 9px;
		left: 12px;
		transition: all 0.1s ease;
}
textarea{
  padding:0.5rem 0.5rem;
  background-color: transparent;
width: 100%;
min-height: 90px;
border-radius: 4px;
border: 0.1px solid ${({ theme }) => theme.border.prBorderCol};
}
textarea:focus ~ label,
	textarea:not(:focus):valid ~ label {
		top: -25px;
		bottom: 0px;
		left: 0px;
	}
`

export default function AddDescription() {
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <Navbar3 back={true} skip={'media'}></Navbar3>
      <div className='pt-44 w-100 h-100 d-flex flex-column'>
        <div className='px-2'>
          <StyledInput>
            <textarea className='tertiaryText' type='text' required></textarea>
            <label className='primaryText' for='short'>Short Description</label>
          </StyledInput>
          <StyledInput>
            <textarea className='tertiaryText' type='text' required></textarea>
            <label className='primaryText' for='short'>Description</label>
          </StyledInput>
        </div>
        <StyledButton1 onClick={() => navigate('media')} className='w-100 mt-auto mb-3'><span className='primaryText'>Continue</span></StyledButton1>

      </div>
    </React.Fragment>
  )
}
