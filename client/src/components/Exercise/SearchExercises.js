import React, {useEffect, useState} from 'react'
import {Box, Typography, TextField, Stack ,Button} from '@mui/material'
import { exerciseOptions, fetchData } from '../../utils/helpers'
import HorizontalScrollbar from './HorizontalScrollbar'


function SearchExercises({setExercises, bodyPart, setBodyPart }) {

    const [search, setSearch] =useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
          const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions );

          setBodyParts(['all', ...bodyPartsData]);
        }

        fetchExercisesData();
    },[])

    const handleSearch = async () => {
        if (search) {
          const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions );

          const searchedResults = exercisesData.filter(
            (exercise) => exercise.name.toLowerCase().includes(search)
            ||exercise.target.toLowerCase().includes(search)  ||exercise.equipment.toLowerCase().includes(search)  ||exercise.bodyPart.toLowerCase().includes(search)
          )

          setSearch('');
          setExercises(searchedResults);
        }
    }

  return (
   <Stack alignItems='center'>
    <Typography color='#232F3E'  fontWeight={800} fontSize="30px" mt="30px"  mb={3} alignItems="center" justifyContent="center" p='20px'>
      “Train insane or remain the same!"</Typography>
      
      <Box position='relative'>
        <TextField 
          sx={{ input: {
            fontWeight:'800', 
            border: 'none', 
            borderRadius:'15px'},
            width: { lg: '800px', xs: '350px'},
            backgroundColor: '#d9dcd6'
          }}
        height="76px" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Search Exercises Here" type="text"/>

       
       <Button variant='contained' color='error' className='searchBtn' 
       sx={{
        bgcolor:'#232F3E', 
        color: '#fff',
        textTransform: 'none',
        width: {lg: '175px', xs: '80px'}, fontSize: {lg:'20px', xs: '14px'},
        height:'55px', position:'absolute',right: '0'  }}
        
          onClick={handleSearch}

        >
          Search
        </Button>

      </Box>
      <Box sx={{postion: 'relative', width: '100%', p: '20px' }} >
          <HorizontalScrollbar data={bodyParts}
          // bodyPart={bodyPart} setBodyPart={setBodyPart}
          
          />
      </Box>

   </Stack>
  )
}

export default SearchExercises