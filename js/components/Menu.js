import React from 'react';

import MenuItem from './MenuItem';
import axios from 'axios';

const menu_data = [

   {
      "id": "ead23179-f317-4a0e-9d2a-a9b16d9f6000",
      "index": 0,
      "img": "/img/margherita.png",
      "price": 18.69,
      "name": "Margherita",
      "toppings": "Tomato sauce, mozzarella, and oregano"
   },
   {
      "id": "4548811d-2532-44b7-aa72-86d0dffe09a1",
      "index": 1,
      "img": "/img/marinara.png",
      "price": 18.89,
      "name": "Marinara",
      "toppings": "Tomato sauce, garlic and basil"
   },
   {
      "id": "5cd74b15-4caf-4ee9-9bbd-a7999914b171",
      "index": 2,
      "img": "/img/carbonara.png",
      "price": 19.99,
      "name": "Carbonara",
      "toppings": "Tomato sauce, mozzarella, parmesan, eggs, and bacon"
   },
   {
      "id": "8410945f-4041-4858-ba90-9c4d138406e6",
      "index": 3,
      "img": "/img/napoli.png",
      "price": 18.79,
      "name": "Napoli",
      "toppings": "Tomato sauce, mozzarella, oregano, anchovies"
   },
   {
      "id": "1324ef75-b8d3-49f2-8566-49d3428375d4",
      "index": 4,
      "img": "/img/americana.png",
      "price": 19.99,
      "name": "Americana",
      "toppings": "Tomato sauce, mozzarella, sausage and french fries"
   },
   {
      "id": "144519c9-fa71-4eb4-879c-506ac67f36c3",
      "index": 5,
      "img": "/img/diavola.png",
      "price": 19.99,
      "name": "Diavola",
      "toppings": "Tomato sauce, mozzarella, spicy salami, and chilli pepper"
   },
   {
      "id": "c9767ccd-4dda-4c62-a2da-3a749b74b61b",
      "index": 6,
      "img": "/img/vegetariana.png",
      "price": 21.79,
      "name": "Vegetariana",
      "toppings": "Tomato sauce, mozzarella and a various vegetable"
   },
   {
      "id": "c357d21d-1b42-4083-9f87-49a14393a4a7",
      "index": 7,
      "img": "/img/bismarck.png",
      "price": 18.98,
      "name": "Bismarck",
      "toppings": "Tomato sauce, mozzarella, ham, and fried egg"
   }
];

export default class Menu extends React.Component {
   constructor(props) {
      super(props);

      this.state = { 
         menu_data, 
         order_price: 0, 
         order: {}, 
         eur_to_usd_multiplier: 1, 
         delievery_costs: 0,
         phone: ''
      };

      this.handleOrderChange = this.handleOrderChange.bind(this);
      this.handleOrderButtonClick = this.handleOrderButtonClick.bind(this);
      this.handlePhoneChange = this.handlePhoneChange.bind(this);
   }

   componentDidMount() {
      fetch('https://api.exchangeratesapi.io/latest?base=USD').then(res => {
         res.json().then(data => {
            this.setState({ eur_to_usd_multiplier: data.rates.EUR });
         })
      });
   }

   handleOrderChange(amount, item) {
      const currentOrder = this.state.order;
      const itemId = item.id;
      let newPrice = 0;
      let totalAmount = 0;

      if (currentOrder.hasOwnProperty(itemId)) {
         if (amount) {
            currentOrder[itemId] = {
               name: item.name,
               totalPrice: +(item.price * amount).toFixed(2),
               amount
            };
         } else {
            delete currentOrder[itemId];
         }
      } else if (amount) {
         currentOrder[itemId] = {
            name: item.name,
            totalPrice: +(item.price * amount).toFixed(2),
            amount
         }
      }

      for (const id in currentOrder) {
         if (currentOrder.hasOwnProperty(id)) {
            const orderItem = currentOrder[id];
            newPrice += orderItem.totalPrice
            totalAmount += orderItem.amount;
         }
      }

      const formattedPrice = +newPrice.toFixed(2);
      const delievery_costs = 19 * Math.ceil(totalAmount / 10);
      
      this.setState({
         // +delievery
         order_price: Math.fround(formattedPrice + delievery_costs).toFixed(2),
         order: currentOrder,
         delievery_costs
      });

      $('#order_price').toast(formattedPrice ? 'show' : 'dispose');
   }

   handleOrderButtonClick() {
      const is_auth = window.Laravel.auth.user;
      const request_data = {
         phone: '',
         order: JSON.stringify(this.state.order)
      }
      if (is_auth) {
         // proceed
         this.handleRequest(request_data);
      } else {
         const modal = new Promise((resolve, reject) => {
            $('#phoneModalDialog').modal('show');

            $('#phoneModalDialog .btn-proceed').click(() => {
               const phone = this.state.phone;
               if (phone && phone.match(/\d+/)) {
                  resolve(this.state.phone);
               } else {
                  $('#phoneModalDialog .phone').addClass('border-danger');
                  $('#phoneModalDialog .error').append('<div className="error-text">Please enter valid phone.</div>');
                  reject();
               }
            })
         }).then((phone) => {
            // proceed with phone
            request_data.phone = phone;
            this.handleRequest(request_data);
            $('#phoneModalDialog').modal('hide');
         }).catch(() => {
            return false;
         });
      }
   }

   handleRequest(data) {
      const req = JSON.stringify(data);

      axios.post('/order', req).then((res) => {
         if (res && res.status === 200 && res.data) {
            window.location.href="/order"
         }
      }).catch(() => {
         return;
      });
   }

   handlePhoneChange(event) {
      $('#phoneModalDialog .phone').removeClass('border-danger');
      $('#phoneModalDialog .error').empty();
      this.setState({
         phone: event.target.value
      });
   }

   render() {
      const order = this.state.order;
      const orderItems = [];
      for (const id in order) {
         if (order.hasOwnProperty(id)) {
            orderItems.push(order[id]);
         }
      }

      return (
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="card">
                     <div className="card-header">Menu</div>
                     <div className="card-body">
                        <div className="container">
                           <div className="row mb-5">
                              {this.state.menu_data.map(item => <MenuItem key={item.index} data={item} handleOrderChange={this.handleOrderChange} />)}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div id="order_price" className="order_price toast fixed-bottom ml-3 mb-3" role="alert" data-autohide="false">
               <div className="toast-header">
                  <strong className="mr-auto">Your order</strong>

               </div>
               <div className="toast-body">
                  <ul className="list-unstyled">
                     <li>
                        <ul>
                           {orderItems.map((item, index) => <li key={index}><strong>{item.name}:</strong> {item.amount} pcs.</li>)}
                        </ul>
                     </li>
                     <li>
                        Delievery costs: {this.state.delievery_costs + '$'}
                     </li>
                     <li className="mt-2">
                        <strong>
                           Total price:&nbsp;
                           {this.state.order_price + '$'},&nbsp;
                           {+(this.state.order_price * this.state.eur_to_usd_multiplier).toFixed(2) + '€'}
                        </strong>
                     </li>
                     <button type="button" className="btn btn-success mt-3" onClick={this.handleOrderButtonClick}>Proceed to order</button>
                  </ul>
               </div>
            </div>
            <div className="modal phone_dialog" id="phoneModalDialog" role="dialog">
               <div className="modal-dialog">
                  <div className="modal-content">
                        <div className="modal-header">Enter your phone:</div>
                        <div className="modal-body">
                           <input 
                              type="tel" 
                              className="phone form-control" 
                              required
                              value={this.state.phone} 
                              onChange={this.handlePhoneChange}
                           />
                           <div className="error text-danger"></div>
                        </div>
                        <div className="modal-footer">
                           <button className="btn btn-primary btn-proceed">Proceed</button>
                        </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}