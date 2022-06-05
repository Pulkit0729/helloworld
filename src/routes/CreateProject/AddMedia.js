import React, { useState } from 'react';
import Navbar3 from '../../Components/Mobile/Navbars/Navbar3';
import { useNavigate } from 'react-router-dom';
import { StyledButton1 } from '../../Components/styled/Button';
import MediaCard from '../../Components/Mobile/MediaCard';
import DropBox from '../../Components/Mobile/DropBox';


export default function AddMedia() {
  let navigate = useNavigate();
  const [fileList, setFileList] = useState([]);

  function drop(newFile) {
    const updatedList = [...fileList, newFile];
    setFileList(updatedList);
  }

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
  }

  return (
    <React.Fragment>
      <Navbar3 back={true} skip={'media'}></Navbar3>
      <div className='pt-44 w-100 h-100 d-flex flex-column'>
        <div className='px-2'>
          <span className='tertiaryText'>Upload Videos and Photos</span>
          <DropBox drop={drop} />
          {
            fileList.length > 0 ? (
              <div className="drop-file-preview">
                {
                  fileList.map((item, index) => (
                    <MediaCard file={item} fileRemove={fileRemove} key={index} />
                  ))
                }
              </div>
            ) : null
          }
        </div>
        <StyledButton1 onClick={() => navigate('media')} className='w-100 mt-auto mb-3'><span className='primaryText'>Continue</span></StyledButton1>

      </div>
    </React.Fragment>
  )
}




