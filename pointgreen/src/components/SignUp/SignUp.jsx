import React, { PureComponent } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from "@material-ui/core/Typography";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './SignUpCard.css';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  });

class SignUp extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            value: 0,
            userName: "",
            password: ""
        }
        this.handleChange2 = this.handleChange2.bind(this);
    }

    
      handleChange = (event, value) => {
        this.setState({ value });
      };
      handleChange2(event){
          console.log("Event " + event)
        this.setState({[event.target.id]: event.target.value})
      }
    render() {
        const { value,userName, password } = this.state;
        return(
            <div>
            <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange}>
                <Tab label="Login"/>
                <Tab label="Register"/>
            </Tabs>
            </AppBar>
            {value === 0 && <Card className="card-style">
            <CardContent class="signUpCard">
                <Typography class ="welcome-back-text" variant="h3" component="h1">Welcome Back!</Typography>
                <form>
                <div class="section">
                <Input
                    controlId="userName"
                    placeholder="Username or Email"
                    inputProps={{
                    'aria-label': 'Description',
                    }}
                    type="userName"
                    onChange={this.handleChange2}
                    value={userName}
                />                        </div>
                <div class="section">
                <br></br>
                <Input
                    placeholder="Password"
                    inputProps={{
                    'aria-label': 'Description',
                    }}
                    onChange={this.handleChange2}
                    value={password}

                />
                </div>
                </form>
                <br></br>
                <br></br>
                <Button variant="contained" color="primary" onClick="">Log In</Button>
            </CardContent>
            </Card>
            }
            {value === 1 &&
            <Card>
                        <CardContent class="signUpCard">
                        <Typography class ="welcome-back-text" variant="h3" component="h1">Join!</Typography>
                        <form>
                        <div class="section">
                        <Input
                            placeholder="Username or Email"
                            inputProps={{
                            'aria-label': 'Description',
                            }}
                            onChange={this.handleChange}
                            value={userName}

                        />                        
                        </div>
                        <div class="section">
                        <br></br>
                        <Input
                            placeholder="Password"
                            inputProps={{
                            'aria-label': 'Description',
                            }}
                            onChange={this.handleChange}
                            value={password}

                        />
                        </div>
                        </form>
                        <br></br>
                        <br></br>
                        <Button variant="contained" color="primary">Log In</Button>
                    </CardContent>
                    </Card>
                    
            }
        </div>
        )
    }
};

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SignUp);