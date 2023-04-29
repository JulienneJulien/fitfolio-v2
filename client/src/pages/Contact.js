import React, {useState} from 'react';
import { validateEmail } from '../utils/helpers';
import { Header} from 'semantic-ui-react';
import "../styles/Contact.css";

function Contact() {

    const [formState, setFormState] = useState({name: '', email:'', message:''});

    const [error, setErrorMessage] = useState('');
    const {name, email, message} = formState;

    function handleChange(event) {
      if (event.target.name === 'email') {
        const isValid = validateEmail(event.target.value);

          if(!isValid) {
            setErrorMessage('Please provide a valid email address.');
          } else {
            setErrorMessage('');
          }
        } else {
        if (!event.target.value.length) {
          setErrorMessage(`${event.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      
      if(!error) {
        setFormState({...formState, [event.target.name]: event.target.value})
      }
    }

      function handleSubmit(event) {
        event.preventDefault();
    }
    return (
       
        <div class="flex-column justify-content-center" id='contactDiv'>
          <Header as='h1' className='titleNavsPage'>Contact</Header> 
          <h1><b><i>Please contact us!</i></b></h1>

          <form class=" flex-column justify-content-center" id="contact-form"   >
              <div>
                  <label htmlFor="name">Name:</label>
                  <input class="form-control" type="text" name="name"  defaultValue={name} onBlur={handleChange}/>
              </div>
              <div >
                  <label htmlFor="email">Email:</label>
                  <input class="form-control" type="email"  name="email" defaultValue={email} onBlur={handleChange} />
              </div>
              <div>
                  <label htmlFor="message">Message:</label>
                  <textarea class="form-control" type="text" name="message" defaultValue={message} onBlur={handleChange} cols="50" rows="7" />
              </div> 
              <div/>
              {error && (
              <div>
                  <p className="error-text">{error}</p>
              </div>
              )}
  
              <div>
              <button id='button' data-testid='button' class="btn btn-outline-dark mt-4" type="submit" onSubmit={handleSubmit}>Submit</button>
              </div>
              <br></br>
          </form>
          <br></br>
        </div>  

        );
  
  }
export default Contact;