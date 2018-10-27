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
            <div>
                <h3>{badge}</h3>
                {/* <img class='feed-Photo' src={url}></img>
                <button class='feed-Photo-button'>Like</button> */}
                <input class="feed-Photo" type="image" name="myImage" src={url} ></input>
            </div>
        )
    }
}

export default Photo; 