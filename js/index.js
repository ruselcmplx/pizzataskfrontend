import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';
import Menu from './components/Menu';

const root = document.getElementById('root');

if (root) {
   ReactDOM.render((
      <BrowserRouter>
         <div className="justify-content-center">
            <Switch>
               <Route exact path="/menu" component={Menu} />
               <Route component={App} />
            </Switch>
         </div>
      </BrowserRouter>
   ), root);
}
