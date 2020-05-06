import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { get as axiosGet, post as axiosPost } from "axios";
import { ProductsList } from "./ProductsList.js";
import { AddProduct } from "./AddProduct";
import { ProductPage } from "./ProductPage";
import { Cart } from "./Cart";

// Renders all products to the screen
export class Home extends React.Component {
  componentDidMount() {
    this.getProducts();
  }

  state = {
    count: 0,
    products: [],
    name: "",
    price: "",
  };

  getProducts = () => {
    axiosGet(`${process.env.REACT_APP_BASE_URL}/products`).then((res) =>
      this.setState({ products: res.data })
    );
  };

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handlePriceChange = (e) => {
    this.setState({
      price: e.target.value,
    });
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = () => {
    axiosPost(`${process.env.REACT_APP_BASE_URL}/products`, {
      name: this.state.name,
      price: this.state.price,
    }).then((res) =>
      this.setState({ products: [...this.state.products, res.data] })
    );
  };

  handleProductClick = (productId) => {
    console.log("the product is: ", productId);
  };

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add-product">Add New Product</Link>
              </li>
              <li>
                <Link to="/cart">Shopping Cart</Link>
              </li>
            </ul>
          </nav>
          <div className="home">
            <Switch>
              <Route path="/add-product">
                <AddProduct
                  handleNameChange={this.handleNameChange}
                  handlePriceChange={this.handlePriceChange}
                  handleSubmit={this.handleSubmit}
                  name={this.state.name}
                  price={this.state.price}
                />
              </Route>
              <Route path="/cart">
                <Cart count={this.state.count} />
              </Route>
              <Route path="/">
                <ProductsList
                  handleClick={this.increaseCount}
                  products={this.state.products}
                  handleProductClick={this.handleProductClick}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
