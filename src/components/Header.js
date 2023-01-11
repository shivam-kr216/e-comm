import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        const { cartElements } = this.props;
        return (
            <div className='header'>
                <Link to='/'>
                    <div className='title'><h2>E-comm</h2></div>
                </Link>
                <Link to='/cart'>
                    <div className='logo'>
                    <div className='product-count'>{ cartElements.length }</div>
                        <span className="material-symbols-outlined">
                            shopping_cart
                        </span>
                    </div>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cartElements: state.cartReducer
    }
}

export default connect(mapStateToProps, null)(Header);