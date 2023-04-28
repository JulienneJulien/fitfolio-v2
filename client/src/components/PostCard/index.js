import React from 'react'
import { Icon, Label, Card, Image, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

function index({post: {id, body, createdAt, username,likeCount, likes, commentCount}}) {

  function likePost(){
    console.log('like post')
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
        src='https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg'
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
        <Button basic>
          <Icon name='comments' />
        </Button>
        <Label basic onClick={commentOnPost}> 
          {commentCount}
        </Label>
      
    </Card.Content>
  </Card>
  )
}

export default index