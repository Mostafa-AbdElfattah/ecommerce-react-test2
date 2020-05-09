import React, { Component } from "react";

export class AddProduct extends Component {
  render() {
    const {
      handleNameChange,
      handlePriceChange,
      handleSubmit,
      name,
      price,
    } = this.props;
    return (
      <div className="add-container">
      <div className="create-product">
        <label>
          Product Name
          {/* Controlled vs uncontrolled input fields */}
          {/* this is an controlled input field */}
          <br/>
          <br/>
          <input
            type="text"
            onChange={handleNameChange}
            placeholder="Product Name"
            value={name}
          />
        </label>
        <br/>
        <br/>
        <label>
          Price
          <br/>
          <input
            type="text"
            onChange={handlePriceChange}
            value={price}
            placeholder="Price"
          />
        </label>
        <br/>
        <br/>
        <button onClick={handleSubmit}>Submit Product</button>
      </div>
      </div>
    );
  }
}
