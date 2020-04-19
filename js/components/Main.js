import React from 'react';

export default class Main extends React.Component {
   render() {
      return(
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
   };
}
