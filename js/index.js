import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import Menu from './components/Menu';

const root = document.getElementById('root');

if (root) {
   ReactDOM.render((
      <BrowserRouter>
         <div className="justify-content-center">
            <Switch>
               <Route exact path="/menu" component={Menu} />
               <Route component={Main} />
            </Switch>
         </div>
      </BrowserRouter>
   ), root);
}
