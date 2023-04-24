import React, {useState} from 'react'
// import { Segment} from 'semantic-ui-react'

import Auth from "../utils/auth";
import Signup from "./Signup";
import Login from "./Login";
import Exercises from '../components/Exercise/Exercises'
import HeroBanner from '../components/Exercise/HeroBanner'
import SearchExercises from '../components/Exercise/SearchExercises'
import '../styles/Exercise.css'
import {Box} from '@mui/material'



function ExerciseHome() {
  const [bodyPartCard, setBodyPartCards] =useState('all');
  const [exercises,setExercises] = useState([]);

  if (Auth.loggedIn()) {
  return (
    <Box className='exerciseHome'>
      {/* <Segment > */}
        <HeroBanner/>
        <SearchExercises 
          setExercises={setExercises} 
          bodyPartCard={bodyPartCard}
          setBodyPartCards={setBodyPartCards}
          />
        {/* <Exercises 
          setExercises={setExercises} 
          bodyPartCard={bodyPartCard} 
          setBodyPartCards={setBodyPartCards}
          /> */}
        {/* </Segment>  */}

       
    </Box>
   


  )
}
return (
  <Login/>
  )
}


export default ExerciseHome;


