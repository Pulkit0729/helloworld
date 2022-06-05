import styled from 'styled-components';

export const StyledButton1 = styled.button`
align-items: center;
padding: 6px 6px;
text-align: center;
background:${({ theme }) => {
    return theme.id == 101 ? (`linear-gradient(180deg, rgba(43, 237, 230, 0.1) 0%, rgba(43, 237, 230, 0.2) 100%);`) : theme.primaryColor;
  }} ;
border: 0.5px solid ${({ theme})=>theme.border.prBorderCol};
box-sizing: border-box;
border-radius: 4px;
`;

export const StyledButton2 = styled.button`
align-items: center;
padding: 6px 6px;
text-align: center;
background:${({ theme }) => {
    return theme.id == 101 ? (`linear-gradient(180deg, rgba(79, 227, 139, 0.1) 0%, rgba(79, 227, 139, 0.2) 100%);`) : theme.secondaryColor;
  }} ;
border:  0.5px solid ${({ theme})=>theme.border.secBorderCol};
box-sizing: border-box;
border-radius: 4px;
`;

export const StyledButton3=styled.button`
align-items: center;
padding: 6px 6px;
text-align: center;
border: 0.5px solid ${({ theme})=>theme.border.prBorderCol};
box-sizing: border-box;
border-radius: 4px;
`;