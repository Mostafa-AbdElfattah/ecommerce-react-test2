import React, { Component } from "react";

export class ProductPage extends Component {
  render() {
    return (
      <div className="product-preview-container">
        <div className="product-preview">
          <h1>{this.props.cllickedName}</h1>
          <b>Price: ${this.props.cllickedPrice}</b>
        </div>
      </div>
    );
  }
}
