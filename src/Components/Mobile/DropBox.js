import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { IconWrapper } from '../styled/IconWrapper';
import { Validate } from '../../logic/Validate';

const StyledBox = styled.div`
border: 1px dashed ${({ theme }) => theme.border.prBorderCol};
border-radius: 0.5rem;
`;


export default function DropBox({ drop }) {
  let dropRef = useRef();
  let theme = useTheme();

  function onClick(e) {
    let input = document.createElement('input');
    input.type = 'file';
    input.multiple = 'multiple';
    input.onchange = onChange;
    input.click();
  }
  function onDragEnter(e) {
    e.preventDefault();
    dropRef.current.style.backgroundColor = theme.background.prGradientCol;
  }
  function onDragLeave(e) {
    e.preventDefault();
    dropRef.current.style.backgroundColor = 'transparent';
  }
  function onDragOver(e) {
    e.preventDefault()
  }
  function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    dropRef.current.style.backgroundColor = 'transparent';
    const newFile = e.dataTransfer.files[0];
    addFiles(newFile);
  }
  function onChange(e) {
    e.preventDefault();
    addFiles(e.target.files[0]);
  }
  function addFiles(newFile) {
    if (newFile && (Validate.isFileImage(newFile) || Validate.isFileVideo(newFile))) {
      drop(newFile);
    }
  }


  return (
    <div ref={dropRef}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onClick={onClick}
      className="my-2">
      <StyledBox className='w-100 py-5 d-flex '>
        <IconWrapper className='m-auto'>
          <FontAwesomeIcon icon={faUpload} size={"2x"}></FontAwesomeIcon>
        </IconWrapper>
      </StyledBox>
    </div>
  )
}
