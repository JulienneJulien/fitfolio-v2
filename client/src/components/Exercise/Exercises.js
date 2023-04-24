import React ,{useEffect, useState}from 'react'
import Pagination  from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material'
import {exerciseOptions, fetchData} from '../../utils/helpers'
import ExerciseCard from './ExerciseCard'

function Exercises({exercises, setExercises, bodyPartCard}) {
    
      const [currentPage, setCurrentPage] = useState(1)
      const exercisesPerPage = 12;

      const indexOfLastExercise = currentPage * exercisesPerPage;
      const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
      const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

      const paginate = (e, value) => {
        setCurrentPage(value)

        window.scrollTo({top:1800, behavior:'smooth'})
      }


      useEffect(() => {
        const fetchExercisesDetails = async () => {
          let exerciseDetails =[];

          if (bodyPartCard === 'all') {
            exerciseDetails = await fetchData('https://exercisedb.p.rapidapi.com/exercises/',exerciseOptions );
          } else {
            exerciseDetails = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPartCard}`,exerciseOptions );
          }
          setExercises(exerciseDetails);
        }
        fetchExercisesDetails();
      }, [bodyPartCard]);
  return (
    <Box id="workouts"
      sx={{mt: {lg: '110px'}}}
      mt='50px'
      p="20px"
    >
        <Typography mb="50px" fontSize={30} textAlign="center" fontWeight={550} color="#232F3E" >Workout Results</Typography>
    
      <Stack direction="row" 
          sx={{gap: {lg: '110px', xs: '50px'}}}
          flexWrap="wrap" justifyContent="center">

            {currentExercises.map((exercise, index) => (
              <ExerciseCard key={index} exercise={exercise}/>
            ))}

      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 12 && (<Pagination  
        variant="outlined" 
        shape="rounded"
        count={Math.ceil(exercises.length / exercisesPerPage)}
        page={currentPage}
        onChange={paginate}
        size="large"
        />)}

      </Stack>
    
    </Box>
  )
}

export default Exercises