import React from 'react'
import { Feed, Icon, Header} from 'semantic-ui-react'
// import { useParams } from 'react-router-dom'
import '../../styles/PostCards.css';

function SingleUserFeed() {
    // const {postId} = useParams();
  return (
   <div>
    <Header as='h1'>Notification Page </Header>
      <Feed className='userFeedPage' size='large'>

      <Feed.Event>
      <Feed.Label image='https://camo.githubusercontent.com/0ad51238fd215abe73553005bbbc61d4f5b27b05ec6c7be02f6c57125950ac89/68747470733a2f2f73656d616e7469632d75692e636f6d2f696d616765732f617661746172322f736d616c6c2f6d61726b2e706e67' />
      <Feed.Content>
        <Feed.Summary>
          <a>Ben Henderson</a> posted on his page
          <Feed.Date>5 mins ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          Ours is a life of constant reruns. We're always circling back to where
          we'd we started, then starting all over again. Even if we don't run
          extra laps that day, we surely will come back for more of the same
          another day soon.
        </Feed.Extra>
        <Feed.Extra images>
          <a>
            <img src='https://media.istockphoto.com/id/612229354/photo/cardio-training.jpg?s=612x612&w=0&k=20&c=kg0Ihyml3UdbkZotpZcpU5oj4JjSeTk6pUWIiZhmQ6Y=' />
          </a>
          <a>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBQKonnEt2HVoIJGr1lWLbgGhxWADteFtWg&usqp=CAU' />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />180 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>


    <Feed.Event>
      <Feed.Label>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbGpRnrEGGzq1lnfa7OmcP2Hah2uaItobYDUXw1yCs7w&s' />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Elijah James</Feed.User> added you as a friend
          <Feed.Date>15 mins Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />55 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='https://static.vecteezy.com/system/resources/previews/002/002/247/original/beautiful-black-woman-avatar-character-icon-free-vector.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Justina Katte</a> added <a>2 new photos</a> of you
          <Feed.Date>20 mins ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a>
            <img src='https://images.creativemarket.com/0.1.0/ps/6757008/1820/1213/m1/fpnw/wm1/y2m5w5uptxlw988nqk4y8sixfotnhza5uspzacjemtogoh8vqda8giwtlztlifhj-.jpg?1564505075&s=ec018db4d212d74178eebc9f15222753' />
          </a>
          <a>
            <img src='https://media.istockphoto.com/id/820588796/photo/running-man-silhouette-in-sunset-time-sport-and-active-life-concept.jpg?s=170667a&w=0&k=20&c=redNSlxC4UQnA6SdjvB-all0tZygmLbZEZ_4ZAYa3to=' />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            41 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='https://media.istockphoto.com/id/1206845277/vector/african-american-beautiful-woman-with-long-straight-hair-vector-flat-illustration.jpg?s=612x612&w=0&k=20&c=QLHjc8CPJU9jz3zrw29ImllL8tQNMrPHBkp5ktzcBmc=' />
      <Feed.Content>
        <Feed.Summary>
          <a>Helenne Trish</a> added <a>2 new illustrations</a>
          <Feed.Date>55 mins ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a>
            <img src='https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-01/home-workout-kb-1x1-220124-e7a745.jpg' />
          </a>
          <a>
            <img src='https://m.media-amazon.com/images/I/61XyKxlfLxS._AC_UF350,350_QL50_.jpg' />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />1 Like
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFE3N1x3FioBUCt5vp6fAoikCu5Cm8eG4YlV-gJ4Nl_PeqaNY6Sy-GJWKQwi3RQz0LeiU&usqp=CAU' />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Jem Fu</Feed.User> added you as a friend
          <Feed.Date>3 Hours Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />4 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Tina Troy</a> added <a>2 new illustrations</a>
          <Feed.Date>4 hours ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuuaoKvqWBbbpERHu8CyZnOEEYxnpv61qX-6YYSg_xJtvkTsjjhdJjzHlx1qPPKNPZer4&usqp=CAU' />
          </a>
          <a>
            <img src='https://redfairyproject.com/wp-content/uploads/2016/08/The-key-to-get-that-body-moving_The-Red-Fairy-Project.jpg' />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />1 Like
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLsl-YJ5JCBLxr5eUoR1zY0S3UUfZHN9rUOwAsg9gfNwY1BZV24Ql0_MF4Z0YHt6ObAxw&usqp=CAU' />
      <Feed.Content>
        <Feed.Summary
          date='2 Days Ago'
          user='Jenny Hess'
          content='add you as a friend'
        />
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />8 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='https://semantic-ui.com/images/avatar/large/joe.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Justen Drew</a> added <a>2 new photos</a> of him
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a>
            <img src='https://blog.nasm.org/hubfs/iStock-915116594.jpg' />
          </a>
          <a>
            <img src='https://hips.hearstapps.com/hmg-prod/images/701/running-knees-1498166774.jpg' />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            41 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

   
  </Feed>
  </div> 
  )
}

export default SingleUserFeed