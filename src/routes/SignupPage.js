import React, { useState} from 'react';
import CreateProfilePage from './CreateProfilePage';
import SignUpLayout from '../Layouts/SignupLayout';

export default function SignupPage() {

  let [layout, setLayout] = useState(false);
  function toogleState() {
    layout ? setLayout(false) : setLayout(true);
  }
  return (
    !layout ? <SignUpLayout callback={toogleState}></SignUpLayout> : <CreateProfilePage></CreateProfilePage>
  )

}

