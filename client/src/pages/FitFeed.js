
import { useState, React } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import {GET_ALL_POSTS} from '../utils/queries';
import {Grid, Transition, Header} from 'semantic-ui-react';
import PostCard from '../components/PostCard/index';
import spinner from '../assets/spinner.gif';
import "../styles/FitFeed.css"
import { CREATE_POST } from '../utils/mutations';




// import PostForm from '../components/PostForm';

function Home() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [createPost] = useMutation(CREATE_POST);
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('TEST', body, title)
      const mutationResponse = await createPost({
        variables: { body: body , title: title},
      });
    } catch (e) {
      console.log(e);
    }
    // Add logic to submit the post
    // using a GraphQL mutation
    console.log(event);
    window.location.reload();
  }

  
  return (

    // <div>HI</div>
    <Grid columns={3}>
      <Header as='h2'> Celebrate your achievements, no matter how small! <br></br> Flip back to the start of your training diary and appreciate how far you’ve come! <br></br> Don’t give up! You’re worth the effort!</Header>
      <div className="flex-column justify-content-center" id='feedDiv'>
            <Header as='h2' >Create a new post</Header>
            <form className=" flex-column justify-content-center" id="feed-form">
              <div>
                <label htmlFor="title">Title:</label>
                <input
                 
                  id="title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="body">Body:</label>
                <textarea
                  id="body" className="withd-500px"
                  value={body}
                  onChange={(event) => setBody(event.target.value)}
                ></textarea>
              </div>
              <button id='button' data-testid='button' className="btn btn-outline-dark mt-4" type="submit" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
    <Grid.Row className="page-title">
      <Header as='h2' className="flex-column justify-content-center" id='feedDiv'>Our FitFeed</Header>
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