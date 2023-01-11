export function addElementToCart(productDetails) {
    return dispatch => {
        dispatch({
            type: "ADD_PRODUCT_TO_CART",
            payload: productDetails
        });
    }
}

export function removeElementFromCart(id) {
    return dispatch => {
        dispatch({
            type: "REMOVE_PRODUCT",
            payload: id
        });
    }
}