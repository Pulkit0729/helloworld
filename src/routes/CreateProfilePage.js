import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledInput } from '../Components/styled/StyledInput';
import { StyledButton1 } from '../Components/styled/Button';
import Navbar3 from '../Components/Mobile/Navbars/Navbar3';
import SelectDate from '../Components/SelectDate';
import LoadingLayout from '../Layouts/LoadingLayout';
import { apiUrl1 } from '../logic/Constant';

export default function CreateProfilePage() {
  let navigate = useNavigate();
  let [isLoading, setLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const fname = e.target.firstName.value;
    const lname = e.target.lastName.value;
    const dob = {
      day:e.target.day.value,
      month:e.target.month.value,
      year:e.target.year.value
    }


    const rs = fetch(
      apiUrl1 + 'user/create',
      {
        credentials: 'include', /*important*/
        body: JSON.stringify({
          fname: fname,
          lname: lname,
          dob: dob,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST'
      }
    ).then(async (res) => {
      const result = await res.json();
      if (res.status === 200 && result.success) {
        console.log('sucessfully added');
        setLoading(false);
        navigate('/create/photo')
      } else {
        alert(result.msg)
        setLoading(false);
        console.log('error');
      }
    }).catch(err => {
      setLoading(false);
      console.log(err.message)
      alert(err.msg)
    });


  }

  return (
    isLoading ? <LoadingLayout></LoadingLayout>
      : <React.Fragment>
        <Navbar3></Navbar3>
        <form className='d-flex h-100' onSubmit={onSubmit}>
          <div className='pt-44 h-100 d-flex flex-column px-2 pb-2 w-100'>
            <div className='d-flex gap-3 flex-column pt-3 '>
              <h1 className="tertiaryText">Create Profile</h1>
              <StyledInput className='primaryText' placeholder='First Name' id='firstName' required />
              <StyledInput className='primaryText' placeholder='Last Name' id='lastName' required />
              <div>
                <SelectDate label="Date of Birth" id='dob' />
              </div>
            </div>
            <StyledButton1 type='submit' className='w-100 mt-auto'><span className='primaryText'>Continue</span></StyledButton1>

          </div>
        </form>
      </React.Fragment>

  )
}
