import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Form State Goes Here", formState)
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    console.log("MUTATION RESPONSE", mutationResponse)
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
  // inputs and imgs tags need closing foward slashes, classes need to change to className. Styles will need to be converted to react syntax. example: style={{marginRight: "auto"}}
    <section className="py-20 bg-orange-200 overflow-x-hidden">
  <div className="relative container px-4 mx-auto">
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute inset-0 bg-white-200 my-24 -ml-4 -mr-4"></div>
      <div className="relative py-16 md:pt-32 md:pb-20 px-4 sm:px-8 bg-gray">
        <div className="max-w-lg mx-auto text-center">
          <a className="inline-block mb-14 text-3xl font-bold font-heading" href="#">
            <img className="h-9" src="yofte-assets/logos/yofte-logo.svg" alt="" width="auto"/>
          </a>
          <h3 className="mb-8 text-gray-700 text-4xl md:text-5xl font-bold font-heading">Signing up with FitFolio is super quick!</h3>
          <p className="mb-10 text-gray-700 font-semibold font-heading">Let's get started!</p>
          <form onSubmit= {handleFormSubmit} action="">
            <input className="w-full mb-6 px-12 py-6 border border-gray-200 focus:ring-red-300 focus:border-red-300 rounded-md" placeholder="First Name" name="firstName" type="firstName" id="firstName" onChange={handleChange}/>
            <input className="w-full mb-6 px-12 py-6 border border-gray-200 focus:ring-red-300 focus:border-red-300 rounded-md" placeholder="Last Name" name="lastName" type="lastName" id="lastName" onChange={handleChange}/>
            <input className="w-full mb-6 px-12 py-6 border border-gray-200 focus:ring-red-300 focus:border-red-300 rounded-md" placeholder="steven@example.dev"name="email"type="email" id="email" onChange={handleChange}/>
            <input className="w-full mb-6 px-12 py-6 border border-gray-200 focus:ring-red-300 focus:border-red-300 rounded-md" type="password" placeholder="Password" name="password" id="pwd" onChange={handleChange}/>
            <label className="flex" for="">
              <input className="mr-4 mt-1" type="checkbox"/>
              <span className="text-sm text-gray-700 ">By singning up, you agree to our Terms, Data Policy and Cookies.</span>
            </label>
            <button type="submit" className="mt-12 md:mt-16 bg-dark-orange-800 hover:bg-gray-900 text-white font-bold font-heading py-5 px-8 rounded-md uppercase">JOIN FitFolio</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default Signup;

{/* <div className="container my-1">
<Link to="/login">← Go to Login</Link>

<h2>Signup</h2>
<form onSubmit={handleFormSubmit}>
  <div className="flex-row space-between my-2">
    <label htmlFor="firstName">First Name:</label>
    <input
      placeholder="First"
      name="firstName"
      type="firstName"
      id="firstName"
      onChange={handleChange}
    />
  </div>
  <div className="flex-row space-between my-2">
    <label htmlFor="lastName">Last Name:</label>
    <input
      placeholder="Last"
      name="lastName"
      type="lastName"
      id="lastName"
      onChange={handleChange}
    />
  </div>
  <div className="flex-row space-between my-2">
    <label htmlFor="email">Email:</label>
    <input
      placeholder="youremail@test.com"
      name="email"
      type="email"
      id="email"
      onChange={handleChange}
    />
  </div>
  <div className="flex-row space-between my-2">
    <label htmlFor="pwd">Password:</label>
    <input
      placeholder="******"
      name="password"
      type="password"
      id="pwd"
      onChange={handleChange}
    />
  </div>
  <div className="flex-row flex-end">
    <button type="submit">Submit</button>
  </div>
</form>
</div> */}
