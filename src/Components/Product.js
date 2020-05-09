import React, { Component } from "react";

import {withRouter} from 'react-router-dom';

class Product extends Component {
  render() {
    return (
      <div className="product">
        <h1>{this.props.product.name}</h1>
        <b>Price: ${this.props.product.price}</b>
        <div className="btn-container">
          <button onClick={this.props.handleClick} className=" btn ">
            Add to Cart
          </button>
          <button
            onClick={() => {this.props.handleProductClick(this.props.product.id);
             this.props.history.push(`/product-page/${this.props.product.id}`)}}
            className="btn view-button"
          >
            View Product
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter (Product);
