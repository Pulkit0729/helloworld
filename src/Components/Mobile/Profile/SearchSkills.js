import React, { useState, useRef } from 'react';
import FetchSkills from '../../../logic/API/FetchSkills';
import { StyledInput } from '../../styled/StyledInput';
import AddSkillCard from './AddSkillCard';

export default function SearchSkills({onClickCallback}) {
    let timeInterval = 500;
    let timeout = 0;
    let [searchedSkills, setSearchedSkills] = useState([]);
    let searchRef = useRef();

    function onClick(skill){
        onClickCallback(skill);
        searchRef.current.value= '';
        setSearchedSkills([]);
    }
    async function onChange(e) {
        let search = e.target.value;
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(async () => {
            console.log('changed');
            try {
                const res = await FetchSkills(search);
                setSearchedSkills((await res.json()).skills)
            } catch (error) {
                console.log(error);
            }
        }, timeInterval);
    }
    return (
        <div className="pb-2" >
            <StyledInput id='search' ref={searchRef} onChange={onChange} placeholder='Search' className='px-2 primaryText'></StyledInput>
            <div className='linear-gradient border '>
                {searchedSkills.map((skill) =>{
                    return(
                        <AddSkillCard skill={skill} onClick={onClick}/>
                    )
                })}
            </div>
        </div>
    )
}
