import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import './Photo.css';
import { LeafIcon } from '..';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: 0,
    };
  }

    onClick = () => {
      this.setState({ likeCount: this.state.likeCount + 1 });
      console.log(this.state.likeCount);
    }

    render() {
      const {
        badge,
        url,
        numVotes,
        photoId,
        voteUrl,
      } = this.props;
      console.log(voteUrl);
      return (
        <Card className="photo-card">
          <div className="feed-photo">
            <h3 style={{ textAlign: 'center', textTransform: 'uppercase' }}>{badge}</h3>
            <input onClick={() => this.onClick} className="feed-photo-img" type="image" name="myImage" src={url} />
            <LeafIcon voteUrl={voteUrl} />
            <span>{numVotes}</span>
          </div>
        </Card>

      );
    }
}

export default Photo;
