import React, { PureComponent } from 'react';
import './SignUpCard.css';
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Input from '@material-ui/core/Input';


class SignUp extends PureComponent {
    render() {
        return(
            <Card>
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