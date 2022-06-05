import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconWrapper } from '../../styled/IconWrapper';
import {faStar } from '@fortawesome/free-solid-svg-icons';

export default function SkillCard(props) {
    return (
        <div className='d-flex justify-content-between py-3 px-2 light-bottom-border'>
            <div className="d-flex gap-2">
                <IconWrapper>
                    <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
                </IconWrapper>
                <span className='primaryText'>{props.name}</span>
            </div>
            <div className="d-flex gap-2">
                <span className='primaryText'>{props.stars}</span>
                <IconWrapper secondary><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></IconWrapper>
            </div>
        </div>
    )
}
