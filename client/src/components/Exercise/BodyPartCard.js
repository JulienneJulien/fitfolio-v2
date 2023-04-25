import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../../assets/cardWorkout.png'
import '../../styles/Exercise.css'

function BodyPartCard({ item, bodyPartCard, setBodyPartCards }) {
  return (
      <Stack 
        type= "button" 
        alignItems="center" 
        justifyContent="center" 
        className='bodyPartCards' 
        id='card'
        sx={{
            borderTop: bodyPartCard === item ? '4px solid #232F3E' : '',
            backgroundColor: '#d9dcd6',
            borderBottomLeftRadius: '20px',
            mb:" 10rem",
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '47px'
          }}
          onClick={() => {
            setBodyPartCards(item)
            window.scrollTo({top:1800, left: 100, behavior: 'smooth'})
          }
          }
      >
        <img src={Icon} alt="dumbbell" style={{width: '80px', height:'80px'}}/>
          <Typography fontSize={25} fontWeight={800} color="#232F3E">{item}</Typography>

    </Stack>
  )
}

export default BodyPartCard