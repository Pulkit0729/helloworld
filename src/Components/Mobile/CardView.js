import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconWrapper } from '../styled/IconWrapper';

export default function CardView({title, icon1, icon2, callback1, callback2, viewCallback, children}) {
  return (
    <div className="linear-gradient light-bottom-border my-2">
            <div className="linear-gradient light-bottom-border d-flex justify-content-between p-2">
                <span className='primaryText capitalize'>{title}</span>
                <div className='d-flex gap-3'>
                    {icon1?<IconWrapper onClick={callback1} secondary>
                        <FontAwesomeIcon icon={icon1}></FontAwesomeIcon>
                    </IconWrapper>:null}
                    {icon2?<IconWrapper onClick={()=>{callback2();}} secondary>
                        <FontAwesomeIcon icon={icon2}></FontAwesomeIcon>
                    </IconWrapper>:null}
                </div>
            </div>
            {children}
            {viewCallback?<div className="light-bottom-border text-center py-2">
                <span className='tertiaryText'>View All</span>
            </div>:null}
        </div>
  )
}
