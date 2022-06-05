import React from 'react'
import styled from 'styled-components';
import { IconWrapper } from '../styled/IconWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { faHouse, faMagnifyingGlass, faBell, faSquarePlus, faCompass } from '@fortawesome/free-solid-svg-icons';

const StyledBottom = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 12px;

position: absolute;
width: 100%;
height: 38px;
bottom: 0px;

background: rgba(255, 255, 255, 0.01);
box-shadow: inset 0px 0.5px 1px rgba(43, 237, 230, 0.5);

.selected{
    box-shadow: inset 0px 0.5px 0px #2BEDE6;
  }
`;

const StyledIconDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0 4px;
width: 100%;
height: 100%;
top: 0px;
`;

const BottomList = [
  { icon: <FontAwesomeIcon icon={faHouse} />, to: 'feed' },
  { icon: <FontAwesomeIcon icon={faMagnifyingGlass} />, to: 'search' },
  { icon: <FontAwesomeIcon icon={faSquarePlus} />, to: 'add' },
  { icon: <FontAwesomeIcon icon={faCompass} />, to: 'explore' },
  { icon: <FontAwesomeIcon icon={faBell} />, to: 'bell' }
]
export default function BottomNavBar() {
  return (
    <StyledBottom>
      {
        BottomList.map((item) => {
          return (
            <IconDiv item={item} key={item.to}></IconDiv>
          )
        })
      }
    </StyledBottom>
  )
}

function IconDiv({ item }) {
  let resolved = useResolvedPath(`../${item.to}/*`);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    
    <StyledIconDiv  className={match?`selected`:null}>
    <Link to={`/${item.to}`}>
      <IconWrapper>
        {item.icon}
      </IconWrapper>
      </Link>
    </StyledIconDiv>
  )
}
