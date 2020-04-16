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
      this.setState({ value: event.target.value });
   }

   handleAdd() {
      this.setState({ value: this.state.value+1 });
   }

   handleRemove() {
      this.setState({ value: this.state.value ? this.state.value-1 : 0 });
   }

   render() {
      const data = this.props.data;

      return (
         <div className="container col-sm-3 mb-3">
            <div className="card h-100">
               <img src={data.img} className="card-img-top" />
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