import React, {useState} from 'react'
import { Segment} from 'semantic-ui-react'
import video from '../assets/welcomeVid.mp4'
import '../styles/Exercise.css'
function Exercise() {


  return (
   <Segment>
    <HeroBanner/>
    <SearchExercises/>
    <Exercises/>
    </Segment> 



    <Segment basic placeholder >
      <video autoPlay loop muted>
      <source src={video} type="video/mp4"/>
     </video> 
      </Segment>

   


  )
}

export default Exercise;