import React from 'react'
import { useParams } from 'react-router-dom';
import AddPhotoPage from './AddPhotoPage';
import AddSkillsPage from './AddSkillsPage';
import WorkInfoPage from './WorkInfoPage.js';
import AddInterestsPage from './AddInterestsPage';

export default function CreateProfile() {
  let params = useParams();
  let id = params.id;
    switch (id) {
      case 'photo':
        return (<AddPhotoPage/>)
      case 'work':
        return (<WorkInfoPage/>)
      case 'addSkills':
        return (<AddSkillsPage/>)
        case 'interests':
        return (<AddInterestsPage/>)
    }
}
