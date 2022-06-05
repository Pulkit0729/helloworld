import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../../Components/Mobile/Navbars/Navbar2';
import {UserObj} from '../../logic/data/UserObj';


export default function Messages() {
  return (
    <React.Fragment>
      <Navbar2 title="Messages" />
      <div className="pt-44 w-100">
        <input type="text" placeholder="Search" className='w-100 p-2 tertiaryText light-bottom-border'></input>
        <ChatUser user={UserObj} message="Hey, Welcome to Hello World" time="1h"/>
        <ChatUser user={UserObj} message="Hey, Welcome to Hello World" time="1h"/>
        <ChatUser user={UserObj} message="Hey, Welcome to Hello World" time="1h"/>
      </div>
    </React.Fragment>
  )
}

function ChatUser({ user, message, time }) {
  let navigate = useNavigate();
  return (
      <div className='d-flex flex-row p-2 gap-3 align-items-center light-bottom-border' onClick={()=>{navigate('user');}}>
          <img src={user.image} width="50px" className='rounded-image' />
          <div className='d-flex flex-column'>
              <span className="primaryText">{user.name}</span>
              <span className='tertiaryText'>{message}</span>
          </div>
          <span className="ms-auto tertiaryText">{time}</span>
      </div>
  )
}