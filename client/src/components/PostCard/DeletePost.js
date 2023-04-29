import React, {useState} from 'react'
import gql from '@apollo/client'
import { useMutation } from '@apollo/client'
import {Button, Confirm, Icon} from 'semantic-ui-react'
import { DELETE_POST } from '../../utils/mutations';



function DeletePost({postId}) {
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [deletePost] = useMutation(DELETE_POST, {
       update(){
            setConfirmOpen(false);
            // TO DO -REMOVE post from cache later
       },
      variables: {
        postId
      }  
    })  
  return (
    <> 
    {/* Wrapped in a Fragment to remove error */}
    <Button as='div' color='yellow' floated='right' onClick={() => setConfirmOpen(true)}>
    <Icon name='trash' style={{margin:2}} color='red'/>
</Button>
<Confirm
    open={confirmOpen}
    onCancel={() => setConfirmOpen(false)}
    onConfirm={deletePost} />
    </>
  )
}

export default DeletePost