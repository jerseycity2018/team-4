import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Feed, Impact, Signin, Signout, Wallet, Puzzles} from './views';
import logo from './logo.svg';
import './App.css';


class App extends PureComponent {

  render() {
    const signedIn = true;
    return (
      
      <Router>
        <div style={{ height: '100%' }}>
          <Route exact path="/" component={Feed} />
          <Route path="/signin" component={Signin} />
          <Route path="/signout" render={Signout} />
            <div>
              <Route path="/home" component={Feed} />
              <Route path="/impact" component={Impact} />
              <Route path="/wallet" component={Wallet} />
              <Route path="/puzzle" component={Puzzles} />
              </div>
        </div>
      </Router>
    );
  }
}

export default App;
