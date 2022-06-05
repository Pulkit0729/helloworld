import styled from 'styled-components';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar3 from '../../Components/Mobile/Navbars/Navbar3';
import { StyledButton1 } from '../../Components/styled/Button';
import { IconWrapper } from '../../Components/styled/IconWrapper';
import { faJava } from '@fortawesome/free-brands-svg-icons';

const StyledBorder = styled.div`
width:100px;
height:100px;
background: rgba(78, 203, 113, 0.05);
border: 0.2px solid #4ECB71;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
`;

export default function AddTechPage() {
  let navigate = useNavigate();

  return (
    <React.Fragment>
      <Navbar3 back={true}></Navbar3>
      <div className='pt-44 w-100 h-100 px-2 d-flex flex-column'>
        <div className='d-flex gap-3 flex-column pt-3'>
          <h1 className="tertiaryText">Add Tech</h1>
          <div className="d-flex gap-3">
            <StyledBorder className="">
              <IconWrapper>
                <FontAwesomeIcon icon={faPlus} />
              </IconWrapper>
            </StyledBorder>
            <StyledBorder>
              <IconWrapper size="48px" secondary>
                <FontAwesomeIcon icon={faJava} />
              </IconWrapper>
              <span className="secondaryText">Java</span>
            </StyledBorder>
            <StyledBorder>
              <IconWrapper size="48px" secondary>
                <FontAwesomeIcon icon={faJava} />
              </IconWrapper>
              <span className="secondaryText">Java</span>
            </StyledBorder>
          </div>
        </div>
        <StyledButton1 onClick={() => navigate('members')} className='w-100 mt-auto mb-3'><span className='primaryText'>Continue</span></StyledButton1>

      </div>
    </React.Fragment>
  )
}
