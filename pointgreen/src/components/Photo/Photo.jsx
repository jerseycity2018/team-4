import React, {Component} from 'react'; 
import './Photo.css';

class Photo extends Component {
    constructor(props){
        super(props); 
    }

    render(){
        const {
            badge, 
            url, 
            numVotes,
            photoId
        } = this.props
        return(
            <div class="feed-photo">
                <h3>{badge}</h3>
                <input class="feed-photo-img" type="image" name="myImage" src={url} ></input>
            </div>
        )
    }
}

export default Photo; 