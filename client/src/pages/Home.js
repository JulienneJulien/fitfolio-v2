import React, {useState} from 'react'
import { Segment} from 'semantic-ui-react'

import Auth from "../utils/auth";
import Signup from "./Signup";
import Login from "./Login";
import Exercises from '../components/Exercise/Exercises'
import HeroBanner from '../components/Exercise/HeroBanner'
import SearchExercises from '../components/Exercise/SearchExercises'
import '../styles/Exercise.css'



function ExerciseHome() {

  if (Auth.loggedIn()) {
  return (
    <div className='exerciseHome'>
      <Segment >
        <HeroBanner/>
        <SearchExercises/>
        <Exercises/>
        </Segment> 

       
    </div>
   


  )
}
return (
  <Login/>
  )
}


export default ExerciseHome;


