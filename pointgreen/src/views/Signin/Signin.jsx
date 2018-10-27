import React, {Component} from 'react';
import {Header, SignUp} from '../../components';
import "./Signin.css";


class Signin extends Component{
    render() {
        return(
        <div class="sign-in-view">
            <SignUp class="sign-up"></SignUp>
        </div>
        )
    }
};

export default Signin;