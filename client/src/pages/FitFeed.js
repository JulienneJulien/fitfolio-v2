
import { useState, React } from 'react'
import { useQuery } from '@apollo/client'
import {GET_ALL_POSTS} from '../utils/queries';
import {Grid, Transition} from 'semantic-ui-react';
import PostCard from '../components/PostCard/index';
import spinner from '../assets/spinner.gif';



// import PostForm from '../components/PostForm';

function Home() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
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
    // Add logic to submit the post
    // using a GraphQL mutation
    console.log("Post submitted");
  }

  
  return (

    // <div>HI</div>
    <Grid columns={3}>
      <div style={{ border: "1px solid #ccc", padding: 10, }}>
            <h2>Create a new post</h2>
            <form onSubmit={handleSubmit}>
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
              <button type="submit">Submit</button>
            </form>
          </div>
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