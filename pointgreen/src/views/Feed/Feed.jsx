import React, { Component } from 'react';
import axios from 'axios';
import { Header, Photo } from '../../components';
import './Feed.css';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
    };
  }

  componentDidMount() {
    const instance = axios.create({
      baseURL: 'http://localhost:3001/api/',
      timeout: 1000,
      headers: { 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZDNjN2ExNzY5ODdmNjllNDU0NjRjNiIsImlhdCI6MTU0MDYwOTA2MiwiZXhwIjoxNTQwNjk1NDYyfQ.n9ZGz4hJHPnygyVCrFGk7FuzV3ttKKQxr08UWV7HUXY' },
    });
    instance.get('feed').then((response) => {
      console.log(response);
      this.setState({ feed: response.data });
    })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {
      feed,
    } = this.state;
    return (
      <div className="feed-container">
        <center>
          {feed.map(photo => <Photo badge={photo.badgeName} url={photo.url} numVotes={photo.numVotes} voteUrl={photo.voteUrl} />)}
        </center>
      </div>);
  }
}
export default Feed;
