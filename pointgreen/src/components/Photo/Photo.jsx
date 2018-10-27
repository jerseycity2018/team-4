import React, {Component} from 'react'; 
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import './Photo.css';
import {LeafIcon} from '..';

class Photo extends Component {
    constructor(props){
        super(props); 
        this.state = {
            likeCount : 0, 
        }
    }

    onClick = () => {
        this.setState({likeCount : this.state.likeCount + 1}); 
        console.log(this.state.likeCount);
    }

    render(){
        const {
            badge, 
            url, 
            numVotes,
            photoId
        } = this.props
        return(
            <Card className="photo-card">
                <div class="feed-photo">
                <h3 style={{textAlign : "center"}}>{badge}</h3>
                <input onClick={this.onClick} class="feed-photo-img" type="image" name="myImage" src={url} ></input>
                <LeafIcon></LeafIcon>
                <span>{this.state.likeCount}</span>
                </div>
            </Card>
            
        )
    }
}

export default Photo; 