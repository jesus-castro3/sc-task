import React, { Fragment } from 'react';

export default function Post(props) {
  const { post } = props;
  
  return(
    <Fragment>
      <li className="post__container">
        <p><b>Title: </b>{post.title}</p>
        <p><b>Description: </b>{post.body}</p>
        <p><b>User: </b>{post.by.name}</p>
      </li>
    </Fragment>
  )
}