import { useState, React } from 'react'
import { Icon, Label, Card, Image, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import DeletePost from './DeletePost';

function index({post: {id, body, createdAt, username,likeCount, likes, commentCount}}) {

  function likePost() {
console.log('liked post')
  }

  function commentOnPost(){
    console.log('Commented on post')
  }


  return (
    <Card fluid>
    <Card.Content>
      <Image
        floated='right'
        size='mini'
        src='https://p7.hiclipart.com/preview/247/564/869/computer-icons-user-profile-clip-art-user-avatar.jpg'
      />
      <Card.Header>{username}</Card.Header>
      <Card.Meta as={Link} to={`/posts/${id}`}>{createdAt}</Card.Meta>
      <Card.Description>{body}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button 
        onClick={likePost}
       icon='heart' basic
       label={{ as: 'a', basic: true }}
       labelPosition='right'>
      </Button>
      <Label basic onClick={likePost}> 
          {likeCount}
        </Label>
        <Button basic as={Link} to={`/posts/${id}`}>
          <Icon name='comments' />
        </Button>
        <Label basic onClick={commentOnPost}> 
          {commentCount}
        </Label>
        <DeletePost postId={id}/>
    </Card.Content>

  </Card>
  )
}

export default index