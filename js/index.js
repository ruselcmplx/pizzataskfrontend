import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import App from './components/App';
import Products from './components/Products';

ReactDOM.render((
   <BrowserRouter>
      <div>
         <nav className="container">
            <ul className="nav mt-2 mb-2">
               <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/products">List</Link>
               </li>
            </ul>
         </nav>

         <Switch>
            <Route exact path="/products" component={Products} />
            <Route component={App} />
         </Switch>
      </div>
   </BrowserRouter>
), document.getElementById('root'));