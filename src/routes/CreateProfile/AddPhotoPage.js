import React from 'react'
import Navbar3 from '../../Components/Mobile/Navbars/Navbar3'
import styled from 'styled-components';
import { StyledButton2 } from '../../Components/styled/Button';
import { useNavigate } from 'react-router-dom';

const AddPhoto = styled.div`
border:0.2px solid ${({ theme }) => theme.border.secBorderCol};
padding: 1rem 0.5rem;
border-radius: 1rem;
align-items: center;

  .imageContainer{
    border-radius:100%;
    border: 0.2px solid ${({ theme }) => theme.border.secBorderCol};
    background: linear-gradient(0deg, rgba(43, 237, 230, 0.25), rgba(43, 237, 230, 0.25))

  }
  img{
    border-radius:100%;

    width:160px;
    opacity: 50%;
  }`

export default function AddPhotoPage() {
  let navigate = useNavigate();

  return (
    <React.Fragment>
      <Navbar3 back={true} skip='work'></Navbar3>
      <div className="pt-44 w-100 h-100 d-flex flex-column px-2">
        <div className='d-flex gap-3 flex-column pt-3 '>
          <h1 className="tertiaryText">Add Profile Photo</h1>
          <AddPhoto className='d-flex flex-column w-100 gap-3'>
            <div className='imageContainer'>
              <img src='../../add.jfif' width='160px'></img>
            </div>
            <StyledButton2 onClick={() =>navigate('work')} className='w-100'> <span className='secondaryText'>Upload From Phone</span></StyledButton2>
            <StyledButton2 onClick={() =>navigate('work')} className='w-100'> <span className='secondaryText'>Take from Camera</span></StyledButton2>
          </AddPhoto>
        </div>
      </div>
    </React.Fragment>
  )
}
