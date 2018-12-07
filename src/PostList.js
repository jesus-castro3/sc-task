import React, { Component} from 'react';
import Post from './Post';



export default class PostList extends Component {
  
  render() {
    
    const { posts, users } = this.props;
    
    const postByUser = posts.map((p) => {
      const foundUser = users.find((u) => p.userId === u.id )
      return {
        ...p,
        by: { ...foundUser }
      }
    })
    

    return(
      <div>
        <ul>
          {postByUser.map((p) => <Post post={p} key={p.id}></Post>)}
        </ul>
      </div>
    )
  }
}