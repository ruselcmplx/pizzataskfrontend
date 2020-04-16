import React from 'react';

export default class MenuItem extends React.Component {
   constructor(props) {
      super(props);
      this.state = { value: 0 };

      this.handleChange = this.handleChange.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
   }

   handleChange(event) {
      const value = event.target.value;
      this.setState({ value });
      this.props.handleOrderChange(value, this.props.data);
   }

   handleAdd() {
      const value = this.state.value + 1;
      this.setState({ value });
      this.props.handleOrderChange(value, this.props.data);
   }

   handleRemove() {
      if (!this.state.value) {
         return;
      }
      
      const value = this.state.value - 1;

      if (this.state.value) {
         this.props.handleOrderChange(value, this.props.data);
      }
      this.setState({ value });
   }

   render() {
      const data = this.props.data;

      return (
         <div className="container col-sm-4 mb-3">
            <div className="card h-100">
               <img src={data.img} className="card-img-top bg-light" />
               <div className="card-body d-flex flex-column justify-content-between">
                  <h3 className="card-title">{data.name}</h3>
                  <h5 className="card-subtitle">{data.price}</h5>
                  <p className="card-text">Toppings: {data.toppings}</p>
                  <div className="input-group mb-3">
                     <div className="input-group-prepend">
                        <button type="button" className="btn btn-secondary" onClick={this.handleRemove}>-</button>
                     </div>
                     <input type="text" className="form-control" placeholder="0" value={this.state.value} onChange={this.handleChange} />
                     <div className="input-group-append">
                        <button type="button" className="btn btn-secondary" onClick={this.handleAdd}>+</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}