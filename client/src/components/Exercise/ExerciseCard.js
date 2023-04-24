import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Stack, Typography} from '@mui/material'


function ExerciseCard({exercise}) {
  return (
    <Link className='exerciseCard' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} Loading= "Lazy" />
          <Stack direction="row">
                <Button sx={{ml: '21px', 
                color: '#b7996a', 
                background: "#232F3E",
                fontSize: '15px',
                fontWeight: 'bold',
                borderRadius: '50%',
                textTransform: 'capitalize'}}>
                    {exercise.bodyPart}

                </Button>
                <Button sx={{ml: '21px', 
                color: '#232F3E', 
                background: "#b7996a",
                fontSize: '15px',
                fontWeight: 'bold',
                borderRadius: '50%',
                textTransform: 'capitalize'}}>
                    {exercise.target}
                </Button>
               <Typography ml="21px" textTransform="capitalize" fontSize={20} fontWeight={800} pb="10px" color="#b7996a" mt="11px">
                    {exercise.name}
                </Typography> 
          </Stack>
    </Link>

   
  )
}

export default ExerciseCard