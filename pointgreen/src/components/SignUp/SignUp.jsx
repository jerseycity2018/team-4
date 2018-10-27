import React, { PureComponent } from 'react';
import './SignUpCard.css';
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class SignUp extends PureComponent {
    render() {
        return(
            <Card className="card-style">
            <CardContent class="signUpCard">
                <Typography class ="welcome-back-text" variant="h3" component="h1">Welcome Back!</Typography>
                <form>
                <div class="section">
                <Input
                    placeholder="Username or Email"
                    inputProps={{
                    'aria-label': 'Description',
                    }}
                />                        </div>
                <div class="section">
                <br></br>
                <Input
                    placeholder="Password"
                    inputProps={{
                    'aria-label': 'Description',
                    }}
                />
                </div>
                </form>
                <br></br>
                <br></br>
                <Button variant="contained" color="primary">Log In</Button>
            </CardContent>
            </Card>
        )
    }
};

export default SignUp;