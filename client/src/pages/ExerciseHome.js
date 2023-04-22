import React, {useState} from 'react'
import { Segment} from 'semantic-ui-react'


import Exercises from '../components/Exercise/Exercises'
import HeroBanner from '../components/Exercise/HeroBanner'
import SearchExercises from '../components/Exercise/SearchExercises'
import '../styles/Exercise.css'



function ExerciseHome() {


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

export default ExerciseHome;