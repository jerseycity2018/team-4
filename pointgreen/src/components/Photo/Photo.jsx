import React, {Component} from 'react'; 
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
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
            <Card className="photo-card">
                <div class="feed-photo">
                <h3 style={{textAlign : "center"}}>{badge}</h3>
                <input class="feed-photo-img" type="image" name="myImage" src={url} ></input>
                <IconButton></IconButton>
                </div>
            </Card>
            
        )
    }
}

export default Photo; 