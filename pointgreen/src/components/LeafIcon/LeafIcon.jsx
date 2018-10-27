import React, {Component} from 'react'; 
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';

class LeafIcon extends Component{

    constructor(props)  {
        super(props);
        this.state = {
            clicked : false 
        }; 
    }
    onClick = () => {
        this.setState({clicked : !(this.state.clicked)}); 
        console.log(this.state.clicked);
    }

    render(){
        return(
            <IconButton onClick={this.onClick}>
                <svg style={{width:"24px", height:"24px"}} viewBox="0 0 24 24">
            <path fill="#000000" d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                </svg>
            </IconButton>
            
        )
    }
}

export default LeafIcon; 