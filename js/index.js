import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';
import Menu from './components/Menu';

ReactDOM.render((
   <BrowserRouter>
      <div className="row justify-content-center">
         <Switch>
            <Route exact path="/menu" component={Menu} />
            <Route component={App} />
         </Switch>
      </div>
   </BrowserRouter>
), document.getElementById('root'));