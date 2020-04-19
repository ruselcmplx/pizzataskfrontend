import React from 'react';

export default class Order extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         eur_to_usd_multiplier: 1,
         order_price: total_price,
         order_price_eur: total_price,
         order: current_order
      };
   }

   componentDidMount() {
      fetch('https://api.exchangeratesapi.io/latest?base=USD').then(res => {
         res.json().then(data => {
            this.setState({ 
               eur_to_usd_multiplier: data.rates.EUR,
               order_price_eur: +(this.state.order_price * data.rates.EUR).toFixed(2)
            });
         })
      });
   }

   render() {
      const order = JSON.parse(this.state.order);
      const orderItems = [];
      for (const id in order) {
         if (order.hasOwnProperty(id)) {
            orderItems.push(order[id]);
         }
      }
      const priceInUsd = this.state.order_price + '$';
      const priceInEur = this.state.order_price_eur + '€';

      return (
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="card">
                     <div className="card-header">Order</div>

                     <div className="card-body">
                        <ul className="list-unstyled">
                           <li>
                              <ul>
                                 {orderItems.map((item, index) => <li key={index}><strong>{item.name}:</strong> {item.amount} pcs.</li>)}
                              </ul>

                           </li>
                           <li className="mt-3">
                              <strong>
                                 Total price:&nbsp;
                                 {priceInUsd},&nbsp;
                                 {priceInEur}
                              </strong>

                           </li>
                           <li>
                              <button type="button" className="btn btn-success mt-3">Proceed to payment</button>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
