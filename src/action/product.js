import axios from "axios";

export const getAllProducts = () => async dispatch => {
    try {
        const result = await axios.get('https://fakestoreapi.com/products');
        dispatch({
            type: "GET_PRODUCTS",
            payload: result.data
        });
    }
    catch (error) {
        dispatch({
            type: "ERROR",
            payload: error.message
        });
    }
}