import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import { IconWrapper } from './styled/IconWrapper';

function Checkbox({id, check, callback}) {

    return (
        <div className='d-flex gap-2'  onClick={() => { callback(id) }}>
    
          {check == id ? <IconWrapper id='checked'>
            <FontAwesomeIcon icon={faCheckSquare} />
          </IconWrapper> :
            <div id='unchecked'>
              <FontAwesomeIcon icon={faSquare} />
            </div>}
          <label className="tertiaryText d-flex">{id}
          </label>
        </div>
      )
}


export default function CheckboxInput({ list, value, onChange }) {
  let [check, setCheck] = useState(null);

  function callback(id) {
    setCheck(id);
    value = id
    onChange(id);
  }
  return (
    <div className='d-flex gap-2 flex-column' id='iam'>
      {list.map((e) => {
        return <Checkbox id={e} key={e} check={check} callback={callback} />
      })}
    </div>
  )
}