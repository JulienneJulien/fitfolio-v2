import { useQuery } from '@apollo/client'
// import {GET_ALL_POSTS} from '../utils/queries';
// ADDED SPINNER FOR PAGE LOAD
import spinner from '../assets/spinner.gif';
import React from 'react'

function Exercise() {
    // const {data,loading,error} = useQuery(GET_ALL_POSTS);
    // if (loading) {
    //     return  <img src={spinner} alt="loading" /> 
    // }
    // if (data) {
    //     console.log(data);
    // }
    // if (error) {
    //     console.log(error);
    // }


  return (
    
    <div>
      <h1 style={{color: "red"}}>WORKOUT POSTS TESTING!</h1>
      <div style={{backgroundColor: "green", padding: " 20rem", margin: "auto"}}>
        HI
        </div>

        {/* <form>
            {data &&
            data.getAllPosts.map((getAllPosts) => {
                return (
                    <form>
                        <div>
                        <label>{getAllPosts.username}</label>
                        <textarea>{getAllPosts.createdAt}</textarea>
                        </div>

                    </form>
                );
        })}
        </form>   */}

      </div>

   


  )
}

export default Exercise;