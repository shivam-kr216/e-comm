import React, { Component } from 'react';
import Grid from './Grid';
import { getAllProducts } from '../action/product';
import { addElementToCart } from '../action/cart';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

class Products extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // calling function to get all the products
        this.props.dispatch(getAllProducts());
    }

    async handleClick(productDetails) {
        // adding elements to the cart
        await this.props.dispatch(addElementToCart(productDetails));
    }

    render() {
        const { products, error } = this.props.products;
        const renderProduct = products?.map((product, idx) => {
            return (
                <Grid
                    key={idx}
                    product={product}
                    onclick={() => this.handleClick({ id: product.id, title: product.title, image: product.image, category: product.category, price: product.price, uuid: uuid() })}
                    btnText="Add to cart"
                />
            )
        });
        return (
            <div className='container'>
                {
                    error ? <div className='error-message'><h2>{error}</h2></div> : renderProduct
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.productReducer
    }
}

export default connect(mapStateToProps, null)(Products);