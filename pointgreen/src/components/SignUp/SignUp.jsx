import React, { PureComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
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
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      userName: '',
      password: '',
      email: '',
    };
  }

      handlePageChange = (event, value) => {
        this.setState({ value });
      }

      handleChange = name => (event) => {
        this.setState({
          [name]: event.target.value,
        });
      };

      render() {
        const {
          value, userName, password, email,
        } = this.state;
        return (
          <div style={{ width: '400px', height: '400px' }}>
            <AppBar position="static">
              <Tabs value={value} onChange={this.handlePageChange}>
                <Tab label="Login" />
                <Tab label="Register" />
              </Tabs>
            </AppBar>
            {value === 0 && (
              <Card className="card-style">
                <CardContent class="signUpCard">
                  <Typography class="welcome-back-text" variant="h3" component="h1">Welcome Back!</Typography>
                  <form>
                    <div className="section">
                      <Input
                        id="userName"
                        placeholder="Username or Email"
                        inputProps={{
                          'aria-label': 'Description',
                        }}
                        type="userName"
                        onChange={this.handleChange('email')}
                        value={email}
                      />
                    </div>
                    <div className="section">
                      <br />
                      <Input
                        placeholder="Password"
                        inputProps={{
                          'aria-label': 'Description',
                        }}
                        type="password"
                        onChange={this.handleChange('password')}
                        value={password}
                      />
                    </div>
                  </form>
                  <br />
                  <br />
                  <Button variant="contained" color="primary" onClick="">Log In</Button>
                </CardContent>
              </Card>
            )
            }
            {value === 1
            && (
            <Card>
              <CardContent class="signUpCard">
                <Typography class="welcome-back-text" variant="h3" component="h1">Join!</Typography>
                <form>
                  <div className="section">
                    <Input
                      placeholder="Username"
                      inputProps={{
                        'aria-label': 'Description',
                      }}
                      onChange={this.handleChange('userName')}
                      value={userName}
                    />
                  </div>
                  <div className="section">
                    <Input
                      placeholder="Email"
                      inputProps={{
                        'aria-label': 'Description',
                      }}
                      onChange={this.handleChange('email')}
                      value={email}
                    />
                  </div>
                  <div className="section">
                    <br />
                    <Input
                      placeholder="Password"
                      inputProps={{
                        'aria-label': 'Description',
                      }}
                      type="password"
                      onChange={this.handleChange('password')}
                      value={password}
                    />
                  </div>
                </form>
                <br />
                <br />
                <Button variant="contained" color="primary">Log In</Button>
              </CardContent>
            </Card>
            )

            }
          </div>
        );
      }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);
