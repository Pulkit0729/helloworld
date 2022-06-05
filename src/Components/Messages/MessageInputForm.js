import React, {useRef} from 'react'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconWrapper } from '../styled/IconWrapper';
import styled from 'styled-components';


export default function MessageInputForm() {
    return (
      <div className='w-100 linear-gradient p-2'>
        <form>
          <div className='d-flex'>
            <MessageTextArea />
            <button type="submit" className='p-2'>
              <IconWrapper>
                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
              </IconWrapper>
            </button>
          </div>
        </form>
      </div>
    )
  
  }
  const StyledTextArea = styled.textarea`
  width:100%;
  height:42px;
  padding: 0.5rem;
  background-color: transparent;
  border: 0.5px solid ${({ theme }) => theme.border.prBorderCol};
  border-radius:1rem;
  ::placeholder{
    color: ${({ theme }) => theme.text.tertiaryText}
  }
  :focus{
    border: 0.5px solid ${({ theme }) => theme.border.prBorderCol};
    outline: none;
  }
  `
  function MessageTextArea() {
    let heightLimit = 170;
    let inpController = useRef();
    function onInput() {
      inpController.current.style.height = ""; /* Reset the height*/
      inpController.current.style.height = Math.min(inpController.current.scrollHeight, heightLimit) + "px";
    }
    return (
      <StyledTextArea onInput={onInput} ref={inpController} className='tertiaryText' placeholder="Message" ></StyledTextArea>
    )
  }
