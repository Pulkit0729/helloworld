import { faCut, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar3 from '../../Components/Mobile/Navbars/Navbar3';
import { StyledButton1 } from '../../Components/styled/Button';
import { IconWrapper } from '../../Components/styled/IconWrapper';

export default function AddMembersPage() {
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <Navbar3 back={true} skip={'description'}></Navbar3>
      <div className='pt-44 w-100 h-100 d-flex flex-column'>
        <div className='d-flex gap-3 flex-column pt-3'>
          <p className='tertiaryText light-bottom-border py-2'>+ Add Members</p>
          <Member img='../user.jfif' name='Jeff Bezoz' position='Founder' />
          <Member img='../user.jfif' name='Jeff Bezoz' position='Founder' />
          <Member img='../user.jfif' name='Jeff Bezoz' position='Founder' />
        </div>
        <StyledButton1 onClick={() => navigate('members')} className='w-100 mt-auto mb-3'><span className='primaryText'>Continue</span></StyledButton1>

      </div>
    </React.Fragment>
  )
}

function Member({ name, position, img }) {
  return (
    <div className='d-flex flex-row px-2 pb-3 gap-3 justify-content-center align-items-center light-bottom-border'>
      <img src={img} width="50px" className='rounded-image' />
      <div className='d-flex flex-column'>
        <span className="primaryText">{name}</span>
        <span className='tertiaryText'>{position}</span>
      </div>
      <div className='ms-auto'>
        <IconWrapper>
          <FontAwesomeIcon icon={faXmark} />
        </IconWrapper>
      </div>
    </div>
  )
}