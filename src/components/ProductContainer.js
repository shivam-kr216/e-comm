import React, { Component } from 'react';

class ProductContainer extends Component {
    render() {
        return (
            <div className='product-container'>
                { this.props.children }
            </div>
        )
    }
}

export default ProductContainer;