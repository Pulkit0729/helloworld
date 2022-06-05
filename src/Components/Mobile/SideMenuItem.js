import React from 'react'
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const MenuItemWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 16px 0px 16px 16px;
width: 100%;
background:${({ theme }) => {
    return theme.id == 101 ? (`linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(43, 237, 230, 0.1) 100%)`) : theme.prCol;
  }} ;
margin-bottom:8px;
`;


export default function SideMenuItem({menuItem}) {
    const navigate = useNavigate();
    return (
        <MenuItemWrapper className='light-bottom-border' onClick={()=>{navigate('/settings')}}>
            <span className="primaryText">
                {menuItem.title}
            </span>
        </MenuItemWrapper>
    )
}
