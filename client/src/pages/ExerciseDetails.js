import React , {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {exerciseOptions, fetchData} from '../utils/helpers'
import Detail from '../components/Exercise/Detail'
import SimiliarExercises from '../components/Exercise/SimiliarExercises'


function ExerciseDetails() {
   const [exerciseDetail, setExerciseDetail] = useState({});
   const {id} = useParams();

   useEffect(() => {
    const fetchExerciseDetails = async () => {
        const exerciseDbUrl= 'https://exercisedb.p.rapidapi.com'
        const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
        setExerciseDetail(exerciseDetailData);
    }
    fetchExerciseDetails();
   }, [id]);

  return (
    <Box>
        <Detail exerciseDetail={exerciseDetail}/>
        <SimiliarExercises/>
    </Box>
  )
}

export default ExerciseDetails