import React, { useState } from 'react'
import Navbar3 from '../../Components/Mobile/Navbars/Navbar3';
import { StyledInput } from '../../Components/styled/StyledInput';
import SelectDate from '../../Components/SelectDate';
import Select from '../../Components/Select';
import {StyledButton1, StyledButton2} from '../../Components/styled/Button';
import Checkbox from '../../Components/Checkbox';
import { useNavigate } from 'react-router-dom';

const TypeOfProject = [
  'Software',
  'Web App',
  'Mobile App',
  'Game',
  'Library or Package',
  'Plugins',
  'Algorithm',
  'AI Programm',
  'ML Programm',
  'Data Analysis',
];

export default function InfoPage() {
  let [check, setCheck] = useState(null);
  let navigate = useNavigate();
  function callback(value) {
    setCheck(value);
  }
  return (
    <React.Fragment>
      <Navbar3 back={true}></Navbar3>
      <div className='pt-44 w-100 h-100 px-2 d-flex flex-column'>
        <div className='d-flex w-100 gap-2 flex-column mt-3'>

          <StyledInput placeholder="Title" />
          <SelectDate label="Start Date" />
          <Select label="Type" list={TypeOfProject} />
          <div className='d-flex gap-3 flex-column pt-3'>
            <span className="primaryText">Are you still working on this project?</span>
            <div className='d-flex gap-2 flex-column'>
              <Checkbox id="Yes" check={check} callback={callback} />
              <Checkbox id="No" check={check} callback={callback} />
            </div>
          </div>

        </div>
        <StyledButton2 onClick={() => navigate('./tech')} className=' w-100 mt-auto'><span className='primaryText'>Continue</span></StyledButton2>

      </div>
    </React.Fragment>
  )
}
