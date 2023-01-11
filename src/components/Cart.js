import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from './Grid';
import { removeElementFromCart } from '../action/cart';

class Cart extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick(id){
        await this.props.dispatch(removeElementFromCart(id));
    }

    render() {
        const { cartElements } = this.props;
        const renderCartElement = cartElements?.map((cartElement, idx) => {
            return (
                <Grid
                    key={idx}
                    product={cartElement}
                    onclick={() => this.handleClick(cartElement.uuid)}
                    btnText="Remove item"
                />
            )
        });
        return (
            <div className='container'>
                {
                    cartElements && cartElements.length > 0 ? renderCartElement : 
                    <div className='error-message'><h2>Your cart is empty!</h2></div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cartElements: state.cartReducer
    }
}

export default connect(mapStateToProps, null)(Cart);
