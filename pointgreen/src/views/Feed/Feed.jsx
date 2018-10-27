import React, {Component} from 'react';
import {Header, Photo} from '../../components'
class Feed extends Component{
    
    render(){
        return(
        <div>
            <Photo url='../../logo.svg' badge='TEST'></Photo>
        </div>)
    }
}
export default Feed;
