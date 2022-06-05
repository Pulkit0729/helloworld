import React, { useState } from 'react';
import Navbar3 from '../../Components/Mobile/Navbars/Navbar3';
import Select from '../../Components/Select';
import CheckboxInput from '../../Components/Checkbox';
import { StyledButton1 } from '../../Components/styled/Button';
import { apiUrl1 } from '../../logic/Constant';
import { useNavigate } from 'react-router-dom';

const TypeOfProgrammers = [
  'Software Developer',
  'Web Developer',
  'AI Programmer',
  'ML Programmer',
  'Data Analysis',
];

const IamList = [
  'Student',
  'Working Professional',
  'Self Programmer'
]



export default function WorkInfoPage() {
  let navigate = useNavigate();
  let [isLoading, setLoading] = useState(false);

  let IamValue;

  function onChange(selectedId) {
    IamValue = selectedId;
  }

  function onSubmit(e) {
    e.preventDefault()

    let programmerType = e.target.type.value;


    const rs = fetch(
      apiUrl1 + 'user/personal',
      {
        credentials: 'include', /*important*/
        body: JSON.stringify({
          personalInfo: {
            programmerType: programmerType,
            iam: IamValue
          }
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'PUT'
      }
    ).then(async (res) => {
      switch (res.status) {
        case 200:
          console.log('sucessfully created');
          setLoading(false);
          navigate('/create/addSkills')
          break;
        case 511:
          console.log('authentication false');
          alert('Invalid Request');
          navigate('/signup');
          break;
        default:
          alert(res.msg)
          setLoading(false);
          console.log('error');
      }
    }).catch(err => {
      setLoading(false);
      console.log(err.message)
      alert(err.msg)
      navigate('/signup');
    });


  }

  return (
    <React.Fragment>
      <Navbar3 back={true} skip='addSkills'></Navbar3>
      <form className='d-flex h-100' onSubmit={onSubmit}>
        <div className='pt-44 w-100 h-100 px-2 d-flex flex-column'>
          <Select label='What type of programmer you are?' list={TypeOfProgrammers} />
          <div className='d-flex gap-3 flex-column pt-3'>
            <span className="primaryText">I am a </span>
            <CheckboxInput className='' list={IamList} onChange={onChange} />
          </div>
          <StyledButton1 type='submit' className='w-100 mt-auto'><span className='primaryText'>Continue</span></StyledButton1>
        </div>
      </form>
    </React.Fragment>
  )
}
