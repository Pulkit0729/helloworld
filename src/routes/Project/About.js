import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import CardView from '../../Components/Mobile/CardView';
import { IconWrapper } from '../../Components/styled/IconWrapper';

export default function About() {
    return (
        <React.Fragment>

            <CardView title="Description" icon1={faPen} viewCallback={() => { }}>
                <div className="tertiaryText p-2 light-bottom-border">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
            </CardView>

            <CardView title="Gallery" icon1={faPen}>
                <img src="./project.jpg" alt="Project" width="100%" />
            </CardView>

            <CardView title="Members" icon1={faPen} viewCallback={() => { }}>
                <Member img='./user.jfif' name='Jeff Bezoz' position='Founder' />
                <Member img='./user.jfif' name='Jeff Bezoz' position='Founder' />
            </CardView>

            <CardView title="Links" icon1={faPen} icon2={faPlus}>
                <LinkComp icon={faGithub} title='Github' link='/github' />
                <LinkComp icon={faGithub} title='Github' link='/github' />
            </CardView>
        </React.Fragment>
    )
}

function Member({ name, position, img }) {
    return (
        <div className='d-flex flex-row p-3 gap-3'>
            <img src={img} width="50px" className='rounded-image' />
            <div className='d-flex flex-column'>
                <span className="primaryText">{name}</span>
                <span className='tertiaryText'>{position}</span>
            </div>
        </div>
    )
}

function LinkComp({ icon, title, link }) {
    return (
        <Link to={link} className='d-flex gap-3 px-3 py-2 align-items-center'>
            <IconWrapper>
                <FontAwesomeIcon icon={icon} size='2x'></FontAwesomeIcon>
            </IconWrapper>
            <span className="primaryText">
                {title}
            </span>
        </Link>
    )

}