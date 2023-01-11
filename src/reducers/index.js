import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    productReducer: productReducer,
    cartReducer: cartReducer
});

export default rootReducer;