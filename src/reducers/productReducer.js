const initialState = {
    products: [],
    error: null
};

function productReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PRODUCTS": return { ...state, products: action.payload };
        case "ERROR": return { ...state, error: action.payload };
        default: return state;
    }
}

export default productReducer;