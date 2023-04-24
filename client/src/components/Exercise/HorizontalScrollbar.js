import React from 'react'
import {Box, Typography} from '@mui/material'
import BodyPartCard from './BodyPartCard'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'

function HorizontalScrollbar({data, bodyPart, setBodyPart}) {
  return (
    <ScrollMenu>
            {data.map((item) => (
                <Box
                    key={item.id|| item}
                    itemId={item.id|| item}
                    title={item.id|| item}
                    m= '0 40px'   
                    >
                      <BodyPartCard item={item} bodyPart=
                      {bodyPart} setBodyPart=
                      {setBodyPart}/>
              </Box>
            )
        )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar