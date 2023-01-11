import React, { Component } from 'react';
import Products from './components/Products';
import store from './store';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Routes>
              <Route path='/' element={<Products />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>

        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
