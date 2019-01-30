import React, { Component } from 'react';

import './App.css';

import Routes from './route.jsx';
import NavBar from './components/navbar.jsx';
 //import Product_Create from'./components/product_Create.jsx';
 import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="container-fluid "  style={{backgroundColor:"#778899	" }}>
       
        <NavBar />  
        <Routes /><br/><br/>
        <br/> <br/><Footer/>
         </div>
    );
  }
}

export default App;
