import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartIcon from '../../assets/musclesIcon.png'
import TargetIcon from '../../assets/fit-icon.png'
import EquipmentIcon from '../../assets/equipment.png'

function Detail({exerciseDetail}) {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;
  return (
    <Stack gap='60px' sx={{flexDirection: {lg:'row'}, p:'20px', alignItems: 'center' }}>
      <img src={gifUrl}  alt={name} loading="Lazy" 
      className='detailimg'/>
      <Stack sx={{gap: {lg:'35px', xs: '20px'}}}>
          <Typography>
            {name}
          </Typography>
          <Typography>
          Your mood will improve and your energy will soar when you do {}. It is excellent for targeting your {}. We know it's hard to make fitness a priority and get to the gym every week! Keeping track of your health goals and working toward them is important. The time and day of your workouts are up to you. If you're not a morning person, train in the evening and if you're an early riser, train when you wake up. Ultimately, it's all about what makes you happy and what works for you. 
          </Typography>
      </Stack>
     </Stack>
  )
}

export default Detail