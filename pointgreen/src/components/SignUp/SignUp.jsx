import React, { PureComponent } from 'react';
import './SignUpCard.css';
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from "@material-ui/core/Typography";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


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
    state = {
        value: 0,
      };
    
      handleChange = (event, value) => {
        this.setState({ value });
      };
    render() {
        const { value } = this.state;
        return(
            <div>
            <AppBar position="static">
            <Tabs value={value}>
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
            }
            {value === 1 &&
            <Card>
                        <CardContent class="signUpCard">
                        <Typography class ="welcome-back-text" variant="h3" component="h1">Welcome Back!</Typography>
                        <form>
                        <div class="section">
                        <Input
                            placeholder="Username or Email"
                            inputProps={{
                            'aria-label': 'Description',
                            }}
                        />                        
                        </div>
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
                    
            }
        </div>
        )
    }
};

export default SignUp;