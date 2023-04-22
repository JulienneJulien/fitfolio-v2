import React from 'react'
import video from '../../assets/welcomeVid.mp4'
// import video from '../../assets/test.mp4'
import { Segment, Header, Image, Grid} from 'semantic-ui-react'
import Typed from "typed.js";
// import Logo from '../../assets/fit-icon.png'
// import Runner from '../../assets/physicalpic.png'

function HeroBanner() {

  const title = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(title.current, {
      strings: ['Having trouble getting back into a fitness routine lately? '],
      typeSpeed: 90,
      loop: false,
    });

    return () => {
     
      typed.destroy();
    };
  }, []);

  const quote = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(quote.current, {
      strings: ['(Nice to see you here!)'],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
     
      typed.destroy();
    };
  }, []);

  return (
    <Segment basic placeholder >
        <Header className='introHome'> Welcome To FitFolio</Header> 
        <span className='spanHome'  ref={ title} />
        <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://www.shape.com/thmb/xcMppPKHI0J7PuGKeIVDke2tTCA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/squat-GettyImages-1004449544-2000-f72d11a72ed84c1885ccbeed1ccaa3c1.jpg' />
      </Grid.Column>
      <Grid.Column width={13}>
      <Header as='h2'>You're not alone — we've all been there. Having low energy, a busy schedule, and overgrown expectations are all obstacles that prevent us from exercising. 
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue, justo a sollicitudin tempus, velit velit ullamcorper ligula, ultricies ultricies ex nisi in sapien. Etiam iaculis dolor id purus ullamcorper, ut feugiat felis lobortis. Donec lacinia est diam, vel cursus risus pretium in.  </Header>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Header as='h2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue, justo a sollicitudin tempus, velit velit ullamcorper ligula, ultricies ultricies ex nisi in sapien. Etiam iaculis dolor id purus ullamcorper, ut feugiat felis lobortis. Donec lacinia est diam, vel cursus risus pretium in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue, justo a sollicitudin tempus, velit velit ullamcorper ligula, ultricies ultricies ex nisi in sapien. Etiam iaculis dolor id purus ullamcorper, ut feugiat felis lobortis. Donec lacinia est diam, vel cursus risus pretium in. </Header>
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
          {/* <Image className='runner' src={Runner}  width="350" height="350" alt="logo"  /> */}
        <Header as='h1' className='quote'>'“test”  
        <span className='codeMessage'> console.log</span><span className='spanHome2' ref={quote} />
        </Header>
  

            {/* <img className='icon' src={Logo}  width="750" height="800" alt="logo"  /> */}
    {/* //   <video autoPlay loop width="750" height="300">
    //   <source src={video} type="video/mp4" />
    //  </video>  */}
  
      </Segment>

  )
}

export default HeroBanner