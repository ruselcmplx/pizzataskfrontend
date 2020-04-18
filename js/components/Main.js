import React from 'react';
import ReactDOM from 'react-dom';

function Main() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-md-12">
               <div className="card">
                  <div className="card-header">Home Page</div>

                  <div className="card-body">
                     Order pizza on the <a href='/menu'>menu</a>.
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Main;

if (document.getElementById('root')) {
   ReactDOM.render(<Main />, document.getElementById('root'));
}
