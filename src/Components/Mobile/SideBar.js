import React, { useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { MenuItemList } from '../../logic/data/MenuItemsList';
import SideMenuItem from './SideMenuItem';
import { ReactComponent as LogoutIcon } from '../../svg/power.svg';
import { IconWrapper } from '../styled/IconWrapper';

const MenuWrapper = styled.div`
position: absolute;
right:0;
z-index:2;
width: 66%;
max-width:400px;
height: 100%;
background:${({ theme }) => {
        return theme.id === 101 ? (` url(feed.png) , #000000`) : theme.prCol;
    }} ;
`;

const ProfileWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
padding: 24px 0;

    img{
        border: 1px solid ${({ theme})=>theme.border.prBorderCol};
        border-radius: 100%;
    }
    .name{
        font-size: 14px;
    }
    .subTitle{
        position: static;
    }
`;

const StyledIconDiv = styled.div`
width:100% ;
position: absolute;
bottom: 50px;
`;

export default function SideBar({ display, menuCallback }) {

    const menuRef = useRef(null);
    const navigate = useNavigate();

    function handleClick(e){
        e.preventDefault();
        if (!menuRef?.current?.contains(e.target)) {
            menuCallback();
        } else {
        }
    };

    function goToProfile(){
        navigate('/profile');
    };

    return (
        display ?
            <div className="position-absolute w-100 h-100 bg-black bg-opacity-50" onClick={handleClick}>
                <MenuWrapper ref={menuRef}>
                    <ProfileWrapper className='light-bottom-border linear-gradient' onClick={goToProfile}>
                        <img src="./user.jfif" width="64px"></img>
                        <span class='name primaryText'>
                            Jeff Bezoz
                        </span>
                        <span class='subTitle tertiaryText'>Founder of Amazon</span>
                    </ProfileWrapper>
                    {MenuItemList.map((item) => {
                        return <SideMenuItem menuItem={item} key={item.id}></SideMenuItem>
                    })}
                    <StyledIconDiv>
                        <IconWrapper className="mx-auto d-flex justify-content-center">
                            <LogoutIcon width="36px"></LogoutIcon>
                        </IconWrapper>
                    </StyledIconDiv>
                </MenuWrapper>
            </div>
            : null
    )
}
