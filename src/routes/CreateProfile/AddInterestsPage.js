import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar3 from '../../Components/Mobile/Navbars/Navbar3';
import { StyledButton1 } from '../../Components/styled/Button';
import { IconWrapper } from '../../Components/styled/IconWrapper';
import InterestsList from '../../logic/data/InterestsList';

export default function AddInterestsPage() {
  let navigate = useNavigate();
  let [addedInterests, setAddedInterests] = useState([]);

  function onClick(interest) {
      if (!checkIfInterestExist(interest, addedInterests)) {
          let newArr = [...addedInterests];
          // Cpy numbers like let old = [...numbers];
          // useState doesn't update the value only if it has changed so if it was 44 and it became 7 it will update. but how can it know if an array or object have changed. it's by reference so when you do let old = numbers you are just passing a reference and not creating a new one
          newArr.push(interest)
          setAddedInterests(newArr);
      }

  }

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [])
  
  // async function onSubmit(e) {
  //     try {
  //         const res = await PostSkills(addedSkills);
  //         switch (res.status) {
  //             case 200:
  //                 console.log('sucessfully added');
  //                 navigate('interests');
  //                 break;
  //             case 401:
  //                 console.log('Token Experienced');
  //                 navigate('../signup');
  //                 break;
  //             default:
  //                 console.log(res.status);

  //         }
  //     } catch (error) {
  //         console.log(error);
  //         navigate('../signup');
  //     }

  // }

  return (
    <React.Fragment>
      <Navbar3 back={true} skip='../feed'></Navbar3>
      <div className="pt-44 w-100 h-100 d-flex flex-column px-2">
        <div className='d-flex gap-3 flex-column pt-3 '>
          <h1 className="tertiaryText">Select Interests</h1>
          <div>
            {InterestsList.map(interest => {
              return (
                <InterestCard interest={interest} onClick={onClick}/>
              )
            })}
          </div>
        </div>
        <StyledButton1 onClick={() => navigate('../feed')} className='w-100 mt-auto'><span className='primaryText'>Continue</span></StyledButton1>

      </div>
    </React.Fragment>
  )
}

function InterestCard({interest, onClick}) {
  return (
    <div className='d-flex justify-content-between py-1 px-2'>
      <div className='d-flex flex-column py-1 px-2 '>
        <span className='primaryText'>{interest.title}</span>
        <span className='secondaryText'>{interest.shortDescription}</span>
        <span className='tertiaryText'>{interest.followers}</span>
      </div>
      <IconWrapper onClick={()=>{onClick(interest);}}>
        <FontAwesomeIcon icon={faPlusCircle} />
      </IconWrapper>
    </div>
  )
}

function checkIfInterestExist(interest, Interests) {
  for (var i = 0; i < Interests.length; i++) {
      if (interest._id === Interests[i]._id) {
          return true;
      }
  }
  return false;
}
