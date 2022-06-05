import styled from 'styled-components';

export const StyledSeparator = styled.div`
color: ${({ theme})=> theme.separatorCol};
overflow: hidden;
width: 100%;
  text-align: center;
  :before,
:after {
  background-color: ${({ theme }) => theme.border.prBorderCol};
  content: "";
  display: inline-block;
  height: 0.2px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}

:before {
  right: 0.5em;
  margin-left: -50%;
}

:after {
  left: 0.5em;
  margin-right: -50%;
}
`