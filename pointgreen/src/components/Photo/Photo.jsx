import React from 'react'; 

class Photo extends Component {
    constructor(props){
        super(props); 
        this.state = {
            url : props.url, 
            badge : props.badge, 
            votes : props.numVotes, 
            photoId : props.photoId,
            likes : props.likes
        };   
    }

    render(){
        return(
            <div>
                <h3>{this.state.badge}</h3>
                <p><a href={this.state.url}>{this.state.link}</a></p>
                <p>tags: {photo.tags}</p>
            </div>
        )
    }
}