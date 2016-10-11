import React, { Component } from 'react';

import { ProductList } from '../components/ProductList/ProductList.js';
import axios from 'axios';

export class ProductsPage extends Component {

  constructor(props) {
     super(props);
     this.state = { products: [] }; 
 }

  componentDidMount() {
    console.log('yolo');
    axios('http://dev.backend.xvacz00.vse.handson.pro/api/products')
      .then(response => {
        console.log(response);
        this.setState({
          products: response.data
        });
      });
  }

 addNewProduct() {
  console.log('todo');
} 

 render() {
    const { products } = this.state;
    
    return (
      <div>
        <div className="jumbotron">
          <h1>All Products</h1>
        </div>
        <ProductList products={products}/>
      	<button onClick={this.addNewProduct.bind(this)}>
		click me
	</button>
	</div>
    );
  }
}

