import { Component } from 'react';
import './Product.css';

export default class Product extends Component {
  render() {
    const { name, category, description, price } = this.props.product;

    return (
      <div className='product-card'>
        <h3>{name}</h3>
        <p>{description}</p>
        <span className='price'>${price}</span>
        <h5>Category : {category}</h5>
      </div>
    );
  }
}
