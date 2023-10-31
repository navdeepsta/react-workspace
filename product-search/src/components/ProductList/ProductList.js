import { Component } from 'react';
import Product from '../Product/Product';
import Button from '../Button/Button';
import './ProductList.css';

const products = [
  {
    name: "Leather Jacket",
    category: "jackets",
    description:
      "Whether it's to protect from wind or just to look super cool, this leather jacket has you covered.",
    price: 400,
  },
  {
    name: "Wool cardigan",
    category: "jackets",
    description:
      "Beautifully warm and soft, this cardigan will make you feel cosy on a cold day.",
    price: 80,
  },
  {
    name: "Striped business shirt",
    category: "shirts",
    description:
      "No ironing necessary to look professional every day with this striped shirt.",
    price: 50,
  },
  {
    name: "Short-sleeved polo shirt",
    category: "shirts",
    description: "The best shirt you can get for that business-casual look.",
    price: 30,
  },
  {
    name: "Plain business shirt",
    category: "shirts",
    description:
      "No ironing necessary to look professional every day with this plain business shirt.",
    price: 50,
  },
  {
    name: "Suit Jacket",
    category: "jackets",
    description: "Wear it with jeans or suit pants, it works with both!",
    price: 120,
  },
  {
    name: "Suit Trousers",
    category: "pants",
    description:
      "Get 5 of these and you've got pants for every day of the week.",
    price: 100,
  },
  {
    name: "Denim Jeans",
    category: "pants",
    description:
      "A timeless classic, these denim jeans will never go out of style.",
    price: 80,
  },
  {
    name: "Pencil Skirt",
    category: "skirts",
    description:
      "A classy work-ready skirt that will make you feel like a million bucks.",
    price: 100,
  },
  {
    name: "Cotton flowy skirt",
    category: "skirts",
    description:
      "For those warm summer days when you just need to feel the breeze on your legs.",
    price: 45,
  },
];

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
