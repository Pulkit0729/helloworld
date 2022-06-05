import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledTab = styled.div`
border: 0.1px solid ${({ theme }) => theme.primaryGradientColor};
justify-content: center;
padding: 0.5rem;
box-shadow: ${props => props.selected ? "inset 0px -2px 0px #2BEDE6" : null};
`

export default function Tabs({tab}) {
    return (
        <div className="d-flex w-100">
            <StyledTab className={`d-flex w-100 linear-gradient`} selected={tab == undefined}>
                <Link to={`/project`}>
                    <span className="primaryText">About</span>
                </Link>
            </StyledTab>
            <StyledTab className={`d-flex w-100 linear-gradient`} selected={tab != undefined}>
                <Link to={`tech`}>
                    <span className="primaryText">Tech</span>
                </Link>
            </StyledTab>

        </div>
    )
}