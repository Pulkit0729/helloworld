import styled from 'styled-components';

export const StyledInput = styled.input`
padding:12px 0px;
width: 100%;
border-bottom: 0.2px solid ${({ theme }) => theme.border.prBorderCol};

::placeholder{
  color: #ffffff50;
}`;