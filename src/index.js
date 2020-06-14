import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './redux/store';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import DashBoard from './components/pages/DashBoard';
import Login from './components/pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <Provider store={store}>
      <div>
        <ToastContainer />
      </div>
      
      <Router>
        <Switch>
        <div>
          <Route path="/">
            <DashBoard/>
          </Route>
        </div>
        </Switch>
      </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
