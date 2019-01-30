import React from 'react';
import Login from './components/login.jsx';
import Orders from './components/orders.jsx';

import Home from './components/home.jsx';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Provider from './components/provider';
import Product from './components/product';
import product_Create from './components/product_Create.jsx';
import product_Update from './components/product_update.jsx';
import Err from './components/404.jsx';
 const Routes =() => (
     <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}></Route>
             <Route path='/login' component={Login}></Route>
             <Route path='/orders' component={Orders}></Route>
             <Route path='/provider' component={Provider}></Route>
             <Route path='/product' component={Product}></Route>
             <Route path='/product_Create' component={product_Create}></Route>
             <Route path='/product_Update' component={product_Update}></Route>
           
           
           
           
             <Route path='*' component={Err}></Route>
             
            {/* <Route path='/cart' component={Cart}></Route>
            <Route path='/checkout' component={CheckOut}></Route> */}
           
            
        </Switch>
    </BrowserRouter>
 )

 export default Routes;
