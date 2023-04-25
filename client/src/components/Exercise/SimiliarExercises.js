import React from 'react'
import {Box, Stack, Typography} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

function SimiliarExercises({targetMuscleExercises, equipmentExercises}) {
  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}}>
       <Typography  textAlign="center" variant='h3' mt={8} mb={4}>
       Below are a few exercises that target similar muscle groups
       </Typography>
       <Stack direction='row' sx={{p:'2', position: 'relative' }}>
          {targetMuscleExercises.length ?
           <HorizontalScrollbar className='similiarExercises' data={targetMuscleExercises} />
          : <Loader/>}
       </Stack>
       <Typography textAlign="center" variant='h3' mt={5} mb={4}>
       Below are a few exercises that uses similar equipments
       </Typography>
       <Stack direction='row' sx={{p:'2', position: 'relative' }}>
          {equipmentExercises.length ?
           <HorizontalScrollbar className='similiarExercises'data={equipmentExercises} />
          : <Loader/>}
       </Stack>
      </Box>
  )
}

export default SimiliarExercises