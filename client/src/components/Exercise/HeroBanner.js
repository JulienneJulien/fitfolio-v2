import React from 'react'
import video from '../../assets/welcomeVid.mp4'
// import video from '../../assets/test.mp4'
import {Box, Typography, Button} from '@mui/material'
import { Segment, Header, Container} from 'semantic-ui-react'
import Typed from "typed.js";
// import Logo from '../../assets/fit-icon.png'
import Runner from '../../assets/physicalpic.png'

function HeroBanner() {

  const quote = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(quote.current, {
      strings: ['TRACK!' , 'GROW!' , 'COMPETE!'],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
     
      typed.destroy();
    };
  }, []);

  return (

    <Segment basic placeholder className='curved'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#232F3E" fill-opacity="1" d="M0,256L48,224C96,192,192,128,288,128C384,128,480,192,576,224C672,256,768,256,864,256C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <Box  sx={{
        mt: {lg:'0', xs: '0' }, ml: { sm: '50px' } }} position="relative" p="20px">
      
        <Typography className='introHome' fontSize= '6rem' > Welcome To FitFolio</Typography> 

        <Typography  className='spanHome' sx={{ fontSize: { lg: '44px', xs: '40px' } }}  mb={3} mt="30px">Having trouble getting back into a fitness routine lately?</Typography>

        <Typography className='quote'  mb={3}> 
        <span className='codeMessage'> Let us </span><span className='spanHome2' ref={quote} />
        </Typography>

        <Typography color='#232F3E'  fontWeight={800} fontSize="30px" mb={3}>Explore some of our available workouts for a few pointers!</Typography>

        <Button variant='contained' color='error' href="#exercises" sx={{ backgroundColor: '#232F3E'}}>Explore Now</Button>
        
          <img className='runner' src={Runner}  width="700" height="550" alt="banner"  />

        <Container>
          {/* <Typography color='#232F3E' fontWeight={800} fontSize="30px">You're not alone — we've all been there. Having low energy, a busy schedule, and overgrown expectations are all obstacles that prevent us from exercising. </Typography>
          
          <Typography color='#232F3E' textAlign="left" fontWeight={800} fontSize="25px">Consistency is essential for fitness success!
            The most important thing is to stay consistent no matter what activity you choose. Before you see any results, you have to do it over and over again.

            Our fitness motivation starts strong, but we soon slack off. It's important to develop a fitness routine that develops habits.
            
            “Motivation gets you started. Habit keeps you going.”Get started Now!
            
            </Typography> */}

            

           

        </Container>
         
       
          </Box>

            {/* <img className='icon' src={Logo}  width="750" height="800" alt="logo"  /> */}
    {/* //   <video autoPlay loop width="750" height="300">
    //   <source src={video} type="video/mp4" />
    //  </video>  */}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L60,85.3C120,107,240,149,360,144C480,139,600,85,720,69.3C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </Segment>

  
    
  )
}

export default HeroBanner