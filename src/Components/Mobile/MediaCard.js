import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark } from '@fortawesome/free-solid-svg-icons';
import { IconWrapper } from '../styled/IconWrapper';
import {Validate} from '../../logic/Validate';

export default function MediaCard({file, fileRemove}) {
    return (
      <div className="d-flex align-items-center py-2 light-bottom-border">
        {Validate.isFileImage(file)?<img src={URL.createObjectURL(file)} alt="" width='20%' className="p-1" />:<video src={URL.createObjectURL(file)} width='20%' className="p-1"/>}
        <div className="px-1">
          <p className='primaryText'>{file.name}</p>
          <p className='tertiaryText'>{file.size}B</p>
        </div>
        <IconWrapper className="ms-auto">
          <FontAwesomeIcon icon={faXmark} onClick={() => fileRemove(file)}></FontAwesomeIcon>
        </IconWrapper>
      </div>
    )
  }
