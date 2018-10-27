import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { Feed, Impact, Signin, Signout, Wallet, Puzzles, Upload, Business} from './views';
import { NavBar } from './components';
import logo from './logo.svg';
import './App.css';


class App extends PureComponent {
  render() {
    const signedIn = true;
    return (
      <Router>
        <div style={{ height: '100%' }}>
          <NavBar />
          <Route exact path="/" component={Feed} />
          {/* <Route exact path="/" component={Signin} /> */}
          <Route path="/signin" component={Signin} />
          <Route path="/signout" render={Signout} />
            <div>
              <Route path="/feed" component={Feed} />
              <Route path="/stats" component={Impact} />
              <Route path="/wallet" component={Wallet} />
              <Route path="/puzzle" component={Puzzles} />
              <Route path="/upload" component={Upload} />
              <Route path="/business" component={Business}/>
              </div>
        </div>
      </Router>
    );
  }
}

export default App;
