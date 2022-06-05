import React from 'react';
import { useParams } from 'react-router-dom';
import UserChat from './UserChat';
import Messages from './Messages';

export default function Chat() {
  let params = useParams();
  let id = params.id;
    switch (id) {
      case 'user':
        return (<UserChat/>)
      default:
        return (<Messages/>)
  
    }
}
