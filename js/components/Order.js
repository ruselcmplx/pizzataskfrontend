import React from 'react';

export default class Order extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         phone: user_phone,
         address: '',
         post_code: '',
         eur_to_usd_multiplier: 1,
         order_price: total_price,
         order_price_eur: total_price,
         order: current_order
      };

      this.handleChangeValue = this.handleChangeValue.bind(this);
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

      $('#paymentForm').append(csrf_field);
   }

   handleChangeValue(event) {
      const id = event.target.id;
      const value = event.target.value;
      const newState = {};
      newState[id] = value;
      this.setState(newState);
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

                           <form id="paymentForm" method="POST" action="/payment">
                              <div className="form-group row">
                                 <label htmlFor="phone" className="col-md-4 col-form-label text-md-right">Phone</label>
                                 <div className="col-md-6">
                                    <input id="phone" type="tel" className="form-control" name="phone" value={this.state.phone} onChange={this.handleChangeValue} required autoFocus />
                                 </div>
                              </div>
                              <div className="form-group row">
                                 <label htmlFor="address" className="col-md-4 col-form-label text-md-right">Address</label>
                                 <div className="col-md-6">
                                    <textarea id="address" type="text" rows="3" className="form-control" name="address" value={this.state.address} onChange={this.handleChangeValue} required />
                                 </div>
                              </div>
                              <div className="form-group row">
                                 <label htmlFor="post_code" className="col-md-4 col-form-label text-md-right">Zip/Postal code</label>
                                 <div className="col-md-6">
                                    <input id="post_code" type="text" className="form-control" name="post_code" value={this.state.post_code} onChange={this.handleChangeValue} required />
                                 </div>
                              </div>
                              <input type="hidden" id="order_id" name="order_id" value={order_id} />

                              <button type="submit" className="btn btn-success mt-3">Proceed to payment</button>
                           </form>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
