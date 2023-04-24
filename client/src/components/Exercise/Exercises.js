import React ,{useEffect, useState}from 'react'
import Pagination  from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material'
import {exerciseOptions, fetchData} from '../../utils/helpers'
import ExerciseCard from './ExerciseCard'

function Exercises({exercises, setExercises, bodyPartCard}) {
    // console.log(exercises);
  return (
    <Box id="workouts"
      sx={{mt: {lg: '110px'}}}
      mt='50px'
      p="20px"
    >
        <Typography mb="50px" fontSize={40} fpntWeight={700} color="#232F3E" >Workout Results</Typography>
    
      <Stack direction="row" 
          sx={{gap: {lg: '110px', xs: '50px'}}}
          flexWrap="wrap" justifyContent="center">

            {exercises.map((exercise, index) => (
              <ExerciseCard key={index} exercise={exercise}/>
            ))}

      </Stack>
    
    
    </Box>
  )
}

export default Exercises