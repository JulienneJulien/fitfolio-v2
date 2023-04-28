
import { useState, React } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import {GET_ALL_POSTS} from '../utils/queries';
import {Grid, Transition} from 'semantic-ui-react';
import PostCard from '../components/PostCard/index';
import spinner from '../assets/spinner.gif';
import "../styles/FitFeed.css"



// import PostForm from '../components/PostForm';

function Home() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const [] = useMutation(CREATE_POST);
  const {loading, data, error} = useQuery(GET_ALL_POSTS);
  if (loading) {
      return  <img src={spinner} alt="loading" /> 
  }
  if (data) {
      console.log(data);
  }
  if (error) {
      console.log(error);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/posts',{
      method: 'POST',
      body: JSON.stringify({
        title,
        body
      })
    })
    // Add logic to submit the post
    // using a GraphQL mutation
    console.log(event);
  }

  
  return (

    // <div>HI</div>
    <Grid columns={3}>
      <div class="flex-column justify-content-center" id='feedDiv'>
            <h2>Create a new post</h2>
            <form class=" flex-column justify-content-center" id="feed-form">
              <div>
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="body">Body:</label>
                <textarea
                  id="body"
                  value={body}
                  onChange={(event) => setBody(event.target.value)}
                ></textarea>
              </div>
              <button id='button' data-testid='button' class="btn btn-outline-dark mt-4" type="submit" onSubmit={handleSubmit}>Submit</button>
            </form>
          </div>
    <Grid.Row className="page-title">
      <h1 class="flex-column justify-content-center" id='feedDiv'>Recent Posts</h1>
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