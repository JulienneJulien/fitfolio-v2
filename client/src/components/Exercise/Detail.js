import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartIcon from '../../assets/bodyPart.png'
import TargetIcon from '../../assets/musclesIcon.png'
import EquipmentIcon from '../../assets/equipment.png'

function Detail({exerciseDetail}) {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

    const extraDetail = [
        {
          icon: BodyPartIcon,
          name: bodyPart,
        },
        {
          icon: TargetIcon,
          name: target,
        },
        {
          icon: EquipmentIcon,
          name: equipment,
        }
      ]

  return (
    <Stack gap='60px' sx={{flexDirection: {lg:'row'}, p:'20px', alignItems: 'center' }}>
      <img src={gifUrl}  alt={name} loading="Lazy" 
      className='detailimg'/>
      <Stack sx={{gap: {lg:'35px', xs: '20px'}}}>
          <Typography className='workoutName' textTransform='capitalize' variant='h1'>
            {name}
          </Typography>
          <Typography className='workoutDescription' variant='h6'>
          Your mood will improve and your energy will soar when you do <b><i>{name}</i></b>. It is excellent for targeting your <b><i>{target}</i></b>. <br/> 
          <br/>
         We know it's hard to make fitness a priority and get to the gym every week! <br/><br/>Keeping track of your health goals and working toward them is important. The time and day of your workouts are up to you. <br/>If you're not a morning person, train in the evening and if you're an early riser, train when you wake up.
         
         <br/><br/> <b>Ultimately, it's all about what makes you happy and what works for you!</b> 
          </Typography>
           {extraDetail.map((item) => (
              <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
                <Button sx={{ background: '#232F3E', borderRadius:"50%", width: '100px', height: '100px'}}>
                  <img className='iconsExercise' alt={bodyPart} src={item.icon}/>
                </Button>
                <Typography variant='h5' textTransform='capitalize'>
                  {item.name}
                </Typography>
              </Stack>

           ))}
      </Stack>
     </Stack>
  )
}

export default Detail