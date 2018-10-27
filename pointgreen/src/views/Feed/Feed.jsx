import React, {Component} from 'react';
import {Header, Photo} from '../../components'
class Feed extends Component{
    
    render(){
        return(
        <div>
            <Photo url='https://images.pexels.com/photos/634038/pexels-photo-634038.jpeg?cs=srgb&dl=america-architecture-commute-634038.jpg&fm=jpg' badge='TEST'></Photo>
        </div>)
    }
}
export default Feed;
