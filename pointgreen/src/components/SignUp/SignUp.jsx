import React, { PureComponent } from 'react';
import './SignUpCard.css';
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Input from '@material-ui/core/Input';



class SignUp extends PureComponent {
    render() {
        var cardStyle = {
            display: 'block',
            width: '30vw',
            transitionDuration: '0.3s',
            height: '25vw',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
        }
        return(
            <Card style={cardStyle}>
            <CardContent class="signUpCard">
                <Typography class ="welcome-back-text" variant="h5" component="h2">Welcome Back!</Typography>
                <form>
                <div class="section">
                <Input
                    placeholder="Username or Email"
                    inputProps={{
                    'aria-label': 'Description',
                    }}
                />                        </div>
                <div class="section">
                <Input
                    placeholder="Password"
                    inputProps={{
                    'aria-label': 'Description',
                    }}
                />
                </div>
                </form>
            </CardContent>
            </Card>
        )
    }
};

export default SignUp;