import React, {useContext} from 'react'
import {Box, Typography} from '@mui/material'
import BodyPartCard from './BodyPartCard'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

import Arrow from '../../assets/leftArrow.png'
import Arrow2 from '../../assets/rightArrow.png'



// function LeftArrow() {
//     const { scrollPrev } = useContext(VisibilityContext);
  
//     return (
//       <Typography onClick={() => scrollPrev()} className="right-arrow">
//         <img src={Arrow} alt="right-arrow" />
//       </Typography>
//     );
//   };
  
//   function RightArrow() {
//     const { scrollNext } = useContext(VisibilityContext);
  
//     return (
//       <Typography onClick={() => scrollNext()} className="left-arrow">
//         <img src={Arrow2} alt="right-arrow" />
//       </Typography>
//     );
//   };
  
//   function HorizontalScrollbar({data, bodyPartCard, setBodyPartCards}) {
//     <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//       {data.map((item) => (
//         <Box
//           key={item.id || item}
//           itemId={item.id || item}
//           title={item.id || item}
//           m="0 40px"
//         >
//          <BodyPartCard item={item} setBodyPartCards={setBodyPartCards} bodyPartCard={bodyPartCard} />
//         </Box>
//       )
//       )}
//     </ScrollMenu>
  
// };


// const LeftArrow = () =>{
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollPrev()} className="right-arrow">
//       <img src={Arrow} alt="right-arrow" />
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollNext()} className="left-arrow">
//       <img src={Arrow2} alt="right-arrow" />
//     </Typography>
//   );
// };

// const HorizontalScrollbar = ({data, bodyPartCard, setBodyPartCards})  => {
//   <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//     {data.map((item) => (
//       <Box
//         key={item.id || item}
//         itemId={item.id || item}
//         title={item.id || item}
//         m="0 40px"
//       >
//        <BodyPartCard item={item} setBodyPartCards={setBodyPartCards} bodyPartCard={bodyPartCard} />
//       </Box>
//     )
//     )}
//   </ScrollMenu>

// };



function HorizontalScrollbar({data, bodyPartCard, setBodyPartCards}) {

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <div >
     <MdChevronLeft onClick={slideLeft} size={40} className='left-arrow'/>
      <div className='wrapper' id='slider'>
     
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
        <MdChevronRight onClick={slideRight} size={40} className='right-arrow'/>
    </div>
  )
}

export default HorizontalScrollbar