import React, {useContext} from 'react'
import {Box, Typography} from '@mui/material'
import BodyPart from './BodyPart'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'

import LeftArrow from '../../assets/leftArrow.png'
import RightArrow from '../../assets/rightArrow.png'

const LeftArrowIcon = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrow} alt="right-arrow" />
    </Typography>
  );
};

const RightArrowIcon = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrow} alt="right-arrow" />
    </Typography>
  );
};


function HorizontalScrollbar({data, bodyPart, setBodyPart}) {
  return (
    <ScrollMenu LeftArrowIcon={LeftArrowIcon} RightArrowIcon={RightArrowIcon}>
            {data.map((item) => (
                <Box
                    key={item.id|| item}
                    itemId={item.id|| item}
                    title={item.id|| item}
                    m= '0 40px'   
                    >
                      <BodyPart item={item} bodyPart=
                      {bodyPart} setBodyPart=
                      {setBodyPart}/>
              </Box>
            )
        )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar