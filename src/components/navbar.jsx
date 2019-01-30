import React, { Component } from 'react';


class NavBar extends Component {
        constructor(props){
            super(props);
            this.state={
            username: '',
             userdata: [],
            }
        this.state.userdata = JSON.parse(localStorage.getItem("user"));
        console.log(this.state.userdata);
        }

        logoutHandler = (e) => {
            localStorage.clear()
            this.props.history.replace("/");
            window.location.reload();
            
        }
    render() {
        return (
            <div>
                {/* <nav className="navbar navbar-expand-sm bg-info navbar-light">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/order">order</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">Signup</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/checkout">Checkout</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/userdash"><i className="fa fa-user-circle fa-2x" aria-hidden="true"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">login</a>
                        </li>
                    </ul>
                </nav> */}
                <nav className="navbar navbar-expand-xl  navbar-dark bg-dark" style={{backgroundColor: "#34F1EE"}}>
                <a className="navbar-brand" href="/">Online Shopping</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                           
                            {this.state.userdata == undefined ? (
                                <div>
                            <li className="nav-item">
                                <a className="nav-link" href="/login"><span class="glyphicon glyphicon-log-in"></span>&nbsp;&nbsp;Login</a>
                            </li>
                            </div>
                            ):(
                                <div>
                                     <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home <span className="sr-only">(Current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="/orders">Orders</a>
                                </li> 
                                <li className="nav-item">
                                    <a className="nav-link " href="/provider">Enter Provider</a>
                                </li> 
                                <li className="nav-item">
                                    <a className="nav-link " href="/product">Enter Product</a>
                                </li>
                               
                                 <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="" onClick={e => this.logoutHandler(e)}><i className="fa fa-power-off" aria-hidden="true">&nbsp;&nbsp;Logout</i></a>
                                   </li>
                                </ul>
                             </ul>
                            </div> 
                            )}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default NavBar;

