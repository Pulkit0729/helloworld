import styled from 'styled-components';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconWrapper } from '../styled/IconWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const ItemWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap:2rem;
padding: 16px;
width: 100%;
background:${({ theme }) => {
        return theme.id == 101 ? (`linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(43, 237, 230, 0.1) 100%)`) : theme.prCol;
    }} ;
margin-bottom:8px;
`;


export default function SettingsListItem({ settingItem }) {
    const navigate = useNavigate();
    return (
        <ItemWrapper onClick={() => { navigate(settingItem.link) }}>
            <IconWrapper>
                <FontAwesomeIcon icon={settingItem.icon} />
            </IconWrapper>
            <span className="primaryText capitalize">
                {settingItem.title}
            </span>
            <IconWrapper className="ms-auto">
                <FontAwesomeIcon icon={faAngleRight} />
            </IconWrapper>
        </ItemWrapper>
    )
}