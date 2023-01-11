import React, { Component } from 'react';
import ProductContainer from './ProductContainer';

class Grid extends Component {

    render() {
        const { product, onclick, btnText } = this.props;
        return (
            <ProductContainer>
                <div className='product-grid'>
                    <img src={product.image} alt={product.category} />
                </div>
                <div className='product-description'>
                    <h3>{product.title}</h3>
                </div>
                <div className='btn'>
                    <h4>${product.price}</h4>
                    <button onClick={onclick}>{btnText}</button>
                </div>
            </ProductContainer>
        )
    }
}

export default Grid;