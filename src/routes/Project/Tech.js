import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CardView from '../../Components/Mobile/CardView';
import ProgressPie from '../../Components/Mobile/Project/ProjectPie';
import { IconWrapper } from '../../Components/styled/IconWrapper';

export default function Tech() {

    return (
        <React.Fragment>
            <CardView title="Progress" icon1={faPen}>
                <div className="d-flex flex-row align-items-center justify-content-between px-4 py-3">
                    <ProgressPie percent={22} title="Design"></ProgressPie>
                    <ProgressPie percent={2} title="Design"></ProgressPie>
                    <ProgressPie percent={60} title="Design"></ProgressPie>
                </div>
            </CardView>
            <CardView title="Tech Stack" icon1={faPen} icon2={faPlus} viewCallback={() => { }}>
                <div className='d-flex align-items-center overflow-scroll hide-scrollbar'>
                    <div className='d-flex flex-column align-items-center p-3 mx-3'>
                        <IconWrapper secondary>
                            <FontAwesomeIcon icon={faJava} size='3x' />
                        </IconWrapper>
                        <span className="tertiaryText">Java</span>
                    </div>
                    <div className='d-flex flex-column align-items-center p-3 mx-3'>
                        <IconWrapper secondary>
                            <FontAwesomeIcon icon={faJava} size='3x' />
                        </IconWrapper>
                        <span className="tertiaryText">Java</span>
                    </div>
                    <div className='d-flex flex-column align-items-center p-3 mx-3'>
                        <IconWrapper secondary>
                            <FontAwesomeIcon icon={faJava} size='3x' />
                        </IconWrapper>
                        <span className="tertiaryText">Java</span>
                    </div>
                    <div className='d-flex flex-column align-items-center p-3 mx-3'>
                        <IconWrapper secondary>
                            <FontAwesomeIcon icon={faJava} size='3x' />
                        </IconWrapper>
                        <span className="tertiaryText">Java</span>
                    </div>
                    <div className='d-flex flex-column align-items-center p-3 mx-1'>
                        <IconWrapper secondary>
                            <FontAwesomeIcon icon={faJava} size='3x' />
                        </IconWrapper>
                        <span className="tertiaryText">Java</span>
                    </div>

                </div>
            </CardView>
        </React.Fragment>
    )
}

