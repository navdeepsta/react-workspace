import { Component } from 'react';
import Product from '../Product/Product';
import Button from '../Button/Button';
import './ProductList.css';
import products from '../../data/products';

export default class ProductList extends Component {
  
  state = { products: products, search: '' };
  
  filterProducts = (...categories) => {
    const filteredProducts = [];
    categories.map((category) =>
      category
        ? filteredProducts.push(
            ...products.filter((product) => product.category === category)
          )
        : ''
    );
    this.setState({
      products: filteredProducts.length > 0 ? filteredProducts : products,
    });
  };

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  searchProducts = (searchText) => {
    if (searchText) {
      this.setState({
        products: products.filter(
          (product) =>
            product.name.toLowerCase().includes(searchText.toLowerCase()) ||
            product.description.toLowerCase().includes(searchText.toLowerCase())
        ),
        search: '',
      });
    }
  };

  sortByPriceLowToHigh = () =>
    this.setState({ products: products.sort((p1, p2) => p1.price - p2.price) });

  sortByPriceHighToLow = () =>
    this.setState({ products: products.sort((p1, p2) => p2.price - p1.price) });

  render() {
    return (
      <>
        <div className='filter-links'>
          <Button name='Shirts' onClick={() => this.filterProducts('shirts')}/>
          <Button name='Pants and skirts' onClick={() => this.filterProducts('shirts', 'pants')}/>
          <Button name='Jackets' onClick={() => this.filterProducts('jackets')}/>
          <Button name='All products' onClick={() => this.filterProducts()}/>
        </div>
        <div className='search'>
          <input
            type='text'
            onChange={this.handleChange}
            value={this.state.search}
            placeholder='Enter product name or description'
          />
          <Button name='Search' onClick={() => this.searchProducts(this.state.search)} />
        </div>
        <div className='sort-price'>
          Price: 
          <Button name='Low to High' onClick={this.sortByPriceLowToHigh} />
          <Button name='High to Low' onClick={this.sortByPriceHighToLow} />
        </div>
        <div className='product-list-card'>
          {this.state.products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </>
    );
  }
}
