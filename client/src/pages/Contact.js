import React, {useState} from 'react';
import { validateEmail } from '../helpers/helper';
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