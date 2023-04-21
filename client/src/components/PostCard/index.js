import React from 'react'
import { Icon, Label, Card, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

function index({post: {id, body, createdAt, username,likeCount, likes, commentCount}}) {

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
      <p>TO ADD buttons later</p>
    </Card.Content>
  </Card>
  )
}

export default index