import React from 'react'
import { useQuery } from '@apollo/client'
import {GET_ALL_POSTS} from '../utils/queries';
import {Grid, Transition} from 'semantic-ui-react';
import PostCard from '../components/PostCard/index';
import spinner from '../assets/spinner.gif';
// import PostForm from '../components/PostForm';

function Home() {
  const {data,loading,error,posts} = useQuery(GET_ALL_POSTS);
  if (loading) {
      return  <img src={spinner} alt="loading" /> 
  }
  if (data) {
      console.log(data);
  }
  if (error) {
      console.log(error);
  }
  // const {
  //   loading,
  //   data: { getAllPosts: posts }
  // } = useQuery(GET_ALL_POSTS);

  return (

    // <div>HI</div>
    <Grid columns={3}>
    <Grid.Row className="page-title">
      <h1 style={{margin: "auto"}}>Recent Posts</h1>
    </Grid.Row>
    <Grid.Row>
      {loading ? (
        <h1>Loading posts..</h1>
      ) : (
        data &&
        data.getAllPosts.map((post) => (
          <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
            <PostCard post={post} />
          </Grid.Column>
        ))
      )}
    </Grid.Row>
  </Grid>
  );
}


export default Home