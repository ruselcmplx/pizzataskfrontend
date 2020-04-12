import React from 'react';
import ReactDOM from 'react-dom';

function App() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-md-12">
               <div className="card">
                  <div className="card-header">Home Page</div>

                  <div className="card-body">
                     Order pizza on the menu.
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;

if (document.getElementById('root')) {
   ReactDOM.render(<App />, document.getElementById('root'));
}
