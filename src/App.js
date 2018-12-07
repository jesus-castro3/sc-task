import React, { Component } from 'react';
import './App.css';
import PostList from './PostList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      users: []
    }
  }
  componentDidMount() {
    this.fetchPosts()
    this.fetchUsers();
  }

  fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(( res ) => {
      return res.json();
    })
    .then( (json) => {
      this.setState({posts: json})
    })
  }

  fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(( res ) => {
      return res.json();
    })
    .then( (json) => {
      this.setState({users: json})
    })
  }

  render() {
    return (
      <div className="App">
        <PostList posts={this.state.posts} users={this.state.users}/>
      </div>
    );
  }
}

export default App;