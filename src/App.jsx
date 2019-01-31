import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import Nav from './views/Nav';
import Footer from './views/Footer';
import Profile from './views/Profile';
import News from './views/News';
// import CommentPage from './views/Comment';
import { username, firstname } from './services/profile.service'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="xxx">
          <Nav username={username} firstname={firstname}/>
            <Switch>
            <Route exact path="/" component={News} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/news" component={News} />
</Switch>
            {/* <Route exact path="/news/:slug/comments" component={CommentPage} /> */}
           <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
