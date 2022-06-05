import React, { useState } from 'react';
import PostSkills from '../../logic/API/PostSkills';
import { useNavigate } from 'react-router-dom';
import Navbar3 from '../../Components/Mobile/Navbars/Navbar3';
import { StyledButton1 } from '../../Components/styled/Button';
import SearchSkills from '../../Components/Mobile/Profile/SearchSkills';
import AddSkillCard from '../../Components/Mobile/Profile/AddSkillCard';

export default function AddSkillsPage() {
    let navigate = useNavigate();
    let [addedSkills, setAddedSkills] = useState([]);

    function onClick(skill) {
        if (!checkIfSkillExist(skill, addedSkills)) {
            let newArr = [...addedSkills];
            // Cpy numbers like let old = [...numbers];
            // useState doesn't update the value only if it has changed so if it was 44 and it became 7 it will update. but how can it know if an array or object have changed. it's by reference so when you do let old = numbers you are just passing a reference and not creating a new one
            newArr.push(skill)
            setAddedSkills(newArr);
        }

    }

    async function onSubmit(e) {
        try {
            const res = await PostSkills(addedSkills);
            switch (res.status) {
                case 200:
                    console.log('sucessfully added');
                    navigate('interests');
                    break;
                case 401:
                    console.log('Token Experienced');
                    navigate('../signup');
                    break;
                default:
                    console.log(res.status);

            }
        } catch (error) {
            console.log(error);
            navigate('../signup');
        }

    }
    //todo: what if return back to skills page

    return (
        <React.Fragment>
            <Navbar3 back={true} skip='interests'></Navbar3>
            <div className="pt-44 w-100 h-100 d-flex flex-column ">
                <div className='d-flex gap-3 flex-column pt-3 h-100 '>
                    <h1 className="tertiaryText px-2">Add Skills</h1>
                    <div>
                        <SearchSkills onClickCallback={onClick}></SearchSkills>
                    </div>
                    <div className='d-flex flex-column'>
                        {addedSkills.map((skill) => {
                            return (<AddSkillCard skill={skill} />)
                        })}
                    </div>
                    <div className='px-2 mt-auto'>
                        <StyledButton1 onClick={onSubmit} className=' w-100'><span className='primaryText'>Continue</span></StyledButton1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


function checkIfSkillExist(skill, skills) {
    for (var i = 0; i < skills.length; i++) {
        if (skill._id === skills[i]._id) {
            return true;
        }
    }
    return false;
}

