import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import Add from './components/add';

class Routes extends Component {
   render() {
      return (
         <Router>
            <div>
               <h2>Shifu-Project-1</h2>
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Admin'}>Admin</Link></li>
                  <li><Link to={'/Add'}>Add</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Admin' component={Admin} />
                  <Route exact path='/Add' component={Add} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default Routes;