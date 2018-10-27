import React, {Component} from 'react';
import {Header, Photo} from '../../components'
import './Feed.css'
class Feed extends Component{
    
    render(){
        return(
        <div className="feed-container">
            <Photo badge='Insert Badge here' url='https://images.pexels.com/photos/634038/pexels-photo-634038.jpeg?cs=srgb&dl=america-architecture-commute-634038.jpg&fm=jpg' ></Photo>
        </div>)
    }
}
export default Feed;
