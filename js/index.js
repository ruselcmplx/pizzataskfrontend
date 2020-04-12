import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import App from './components/App';
import Menu from './components/Menu';

ReactDOM.render((
   <BrowserRouter>
      <div>
         <nav className="container nav-container">
            <ul className="nav mt-2 mb-2">
               <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/menu">Menu</Link>
               </li>
            </ul>

            <div className="mt-2 mb-2 nav-link">
               Your order: {123}$
            </div>
         </nav>

         <Switch>
            <Route exact path="/menu" component={Menu} />
            <Route component={App} />
         </Switch>
      </div>
   </BrowserRouter>
), document.getElementById('root'));