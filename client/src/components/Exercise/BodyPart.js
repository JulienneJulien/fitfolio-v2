import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../../assets/fit-icon.png'


function BodyPart() {
  return (
      <Stack 
        type= "button" 
        // alignItems="center" 
        // justifyContent="center" 
        // className='bodyPartCards' 
        // sx={{
        //     borderTop: bodyPart === item ? '4px solid #232F3E' : '',
        //     backgroundColor: '#d9dcd6',
        //     borderBottomLeftRadius: '20px',
        //     width: '270px',
        //     height: '280px',
        //     cursor: 'pointer',
        //     gap: '47px'
        //   }}
      >
        <img src={Icon} alt='dumbell icon'/>
    </Stack>
  )
}

export default BodyPart