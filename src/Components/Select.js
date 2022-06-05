import styled from 'styled-components';

const StyledSelect = styled.select`
background-color: transparent;
border-bottom: 0.2px solid ${({ theme }) => theme.border.prBorderCol} !important;
border:none;
padding: 0.2rem 0.5rem;
option:checked{
  background-color:black;
}
 :focus{
   border: green;
 }
`;

export default function Select({label, list}) {
  return (
    <div className='d-flex w-100 gap-2 flex-column mt-3'>
      <span className='primaryText'>{label}</span>
      <StyledSelect  id="type" title="Type" className="tertiaryText w-100">
        {list.map((item) => {
          return <option value={item} key={item}>{item}</option>
        })}

      </StyledSelect>
    </div>
  )
}
