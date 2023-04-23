import React from 'react'
import {Box} from '@mui/material'
import BodyPartCard from './BodyPartCard'

function HorizontalScrollbar({data, bodyPartCard, setBodyPartCards}) {
  return (
    <div>
            {data.map((item) => (
                <Box
                    key={item.id|| item}
                    itemId={item.id|| item}
                    title={item.id|| item}
                    m= '0 40px'   
                    >
                      <BodyPartCard item={item} bodyPartCard=
                      {bodyPartCard} setBodyPartCards=
                      {setBodyPartCards}/>
              </Box>
            )
        )}
    </div>
  )
}

export default HorizontalScrollbar