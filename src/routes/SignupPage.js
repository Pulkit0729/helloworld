import React, { useState} from 'react';
import CreateProfilePage from './CreateProfilePage';
import SignUpLayout from '../Layouts/SignupLayout';

export default function SignupPage() {

  let [profileLayout, setProfileLayout] = useState(false);
  
  function toggleLayout() {
    profileLayout ? setProfileLayout(false) : setProfileLayout(true);
  }

  return (
    !profileLayout ? <SignUpLayout toggleLayout={toggleLayout}></SignUpLayout> : <CreateProfilePage></CreateProfilePage>
  )

}

