import React, {useEffect, useState} from 'react'
import {Box, Typography, TextField, Stack ,Button} from '@mui/material'
import { exerciseOptions, fetchData } from '../../utils/helpers'


function SearchExercises() {

    const [search, setSearch] =useState('')

    const handleSearch = async () => {
        if (search) {
          const exerciseDetails = await fetchData('https://exercisedb.p.rapidapi.com/exercises/',exerciseOptions );

          console.log(exerciseDetails)
        }
    }

  return (
   <Stack alignItems='center'>
    <Typography color='#232F3E'  fontWeight={800} fontSize="30px" mt="90px"  mb={3} alignItems="center" justifyContent="center" p='20px'>
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
        height="76px" value={search} onChange={(element) => setSearch(element.target.value.toLowerCase())} placeholder="Search Exercises Here" type="text"/>

       
       <Button variant='contained' color='error' className='searchBtn' 
       sx={{
        bgcolor:'#232F3E', 
        color: '#fff',
        textTransform: 'none',
        width: {lg: '175px', xs: '80px'}, fontSize: {lg:'20px', xs: '14px'},
        height:'55px', position:'absolute',right: '0'  }}
        
          onClick={handleSearch}

        >Search</Button>

      </Box>


   </Stack>
  )
}

export default SearchExercises