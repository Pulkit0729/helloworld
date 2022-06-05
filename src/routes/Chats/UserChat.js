import React from 'react'
import { UserObj } from '../../logic/data/UserObj';
import ChatNavbar from '../../Components/Mobile/Navbars/ChatNavbar';
import MessageInputForm from '../../Components/Messages/MessageInputForm';
import Message from '../../Components/Messages/Message';
import MessageList from '../../logic/data/MessageList';

export default function UserChat() {
  return (
    <React.Fragment>
      <ChatNavbar user={UserObj}></ChatNavbar>
      <div className='pt-44 w-100 h-100 d-flex flex-column overflow-hidden'>

      <div className='overflow-auto'>
      {
        MessageList.map((message)=>{
          return <Message message={message} />
        })
      }
      </div>

      <MessageInputForm ></MessageInputForm>
      </div>
    </React.Fragment>
  )
}



