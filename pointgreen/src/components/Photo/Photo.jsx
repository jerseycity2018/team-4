import React, {Component} from 'react'; 


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
                <img src={url}></img>
            </div>
        )
    }
}

export default Photo; 