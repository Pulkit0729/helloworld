import styled from 'styled-components';

export const IconWrapper = styled.div`
font-size: ${props=>props.size};
    color:${props=>props.secondary?({ theme }) => theme.icon.secIconCol:({ theme }) => theme.icon.prIconCol};
    svg{
        fill: ${props=>props.secondary?({ theme }) => theme.icon.secIconCol:({ theme }) => theme.icon.prIconCol};
        filter: drop-shadow(0px 0px 8px ${props=>props.secondary?({ theme }) => theme.icon.secShadowCol:({ theme }) => theme.icon.prShadowCol});
    }
`;