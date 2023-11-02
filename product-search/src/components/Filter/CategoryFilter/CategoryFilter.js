import React, { Component } from 'react';
import './CategoryFilter.css';
import Button from '../../Button/Button';

export default class CategoryFilter extends Component {
    filterProducts = (...categories) => {
        const filteredProducts = [];
        categories.map((category) =>
          category
            ? filteredProducts.push(
                ...this.props.products.filter((product) => product.category === category)
              )
            : ''
        );
        this.props.onFilterProducts(filteredProducts);
    }
    render() {
        return (
            <div className='filter-links'>
                <Button name='Shirts' onClick={() => this.filterProducts('shirts')}/>
                <Button name='Pants and skirts' onClick={() => this.filterProducts('shirts', 'pants')}/>
                <Button name='Jackets' onClick={() => this.filterProducts('jackets')}/>
                <Button name='All products' onClick={() => this.filterProducts()}/>
        </div>
        )
  }
}
