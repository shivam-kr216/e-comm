const initialState = [];

function cartReducer(state=initialState, action) {
    switch(action.type) {        
        case "ADD_PRODUCT_TO_CART": return [...state, action.payload]
        case "REMOVE_PRODUCT": return state.filter((item) => {
            return item.uuid !== action.payload
        });
        default: return state;
    }
}

export default cartReducer;