import React from 'react';

import MenuItem from './MenuItem';

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

      this.state = { menu_data };
   }

   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="card">
                     <div className="card-header">Menu</div>
                     <div className="card-body">
                        <div className="container">
                           <div className="row">
                              {this.state.menu_data.map(item => <MenuItem key={item.index} data={item }/>)}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}