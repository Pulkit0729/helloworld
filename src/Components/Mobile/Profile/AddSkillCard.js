import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { IconWrapper } from '../../styled/IconWrapper'

export default function AddSkillCard ({ skill, moreCallback, onClick }) {
    return (
        <div onClick={()=>{onClick(skill)}} className='d-flex justify-content-between p-2 light-bottom-border'>
            <span id='title' className='tertiaryText'>{skill.title}</span>
            {moreCallback?<IconWrapper>
                <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
            </IconWrapper>:null}
        </div>
    )
}


