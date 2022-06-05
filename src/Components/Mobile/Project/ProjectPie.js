import React from 'react';
import styled, { useTheme } from 'styled-components';

const StyledPie = styled.div`
.pie {
  --p:20;
  --b:0.8px;
  --c:darkred;

  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  margin: 5px;
  place-content: center;
}
.pie:before,
.pie:after {
  content: "";
  position: absolute;
  border-radius: 50%;
}
.pie:before {
  inset: 0;
  background:
    radial-gradient(farthest-side,var(--c) 98%,#0000) top/var(--b) var(--b) no-repeat,
    conic-gradient(var(--c) calc(var(--p)*1%),#0000 0);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
          mask: radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
}
.animate {
  animation: p 1s .5s both;
}
.no-round:before {
  background-size: 0 0, auto;
}
.no-round:after {
  content: none;
}
@keyframes p{
  from{--p:0}
}
`
export default function ProgressPie({ percent, title }) {

    const theme = useTheme();
    let color;
    if (percent < 20) {
        color = '#F84973'
    } else if (20 <= percent && percent < 50) {
        color = '#E0F849'
    } else {
        color = '#4ECB71'
    }
    return (
        <div className='d-flex align-items-center flex-column'>
            <StyledPie>
                <div className="pie p-0" style={{ '--p': percent, '--c': theme.prCol, '--b': '2.5px' }}>
                    <div className="pie p-2 m-0" style={{ '--p': 100, '--c': theme.prCol }}>
                        <div className="pie p-2" style={{ '--p': 100, '--c': color }}>
                            <span className="primaryText" style={{ 'color': color, 'minWidth':'27px' }}>{percent}%</span>
                        </div>
                    </div>
                </div>
            </StyledPie>
            <span className="primaryText">{title}</span>
        </div>
    );
}