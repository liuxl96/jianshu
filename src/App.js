import React, { Component, Fragment } from 'react';
import Header from './common/header';
import { Globalstyle } from './style';
import { IconfontStyle } from './statics/iconfont/iconfont.js';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import Detail from './pages/detail';
import Home from './pages/home';
import Login from './pages/login';
import Write from './pages/write';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Globalstyle />
        <IconfontStyle />
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;