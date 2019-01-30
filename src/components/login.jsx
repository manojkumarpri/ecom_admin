import React, { Component } from 'react';
import './login.css';
// import Home from './home.jsx';

// import { browserHistory, withRouter } from "react-router-dom"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userdata1: {},
            userdata2: [],
            admin :"admin",
        }
        this.login = this.login.bind(this);
   
        console.log(this.state.admin)
    }

    login() {

        var login = false;
        console.log(this.state.userdata1.name)
        console.log(this.state.admin)
        if ((this.state.admin === this.state.userdata1.name) && (this.state.admin === this.state.userdata1.password)) {
            alert("successfully logged in" + " " +this.state.userdata1.name);
            localStorage.setItem('user', JSON.stringify(this.state.userdata1));
            window.location.reload();
            this.props.history.push("/");
            login = true;
        }


        if (login === false) {
            alert("invalid username or password");
        }

    }
    render() {
        return (
            // 	<div id="manoj">
            //     <div classNameNameName="card card-container" >

            //         <img id="profile-img" classNameNameName="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            //         <p id="profile-name" classNameNameName="profile-name-card"></p>

            //             <span id="reauth-email" classNameNameName="reauth-email"></span>
            //             <input type="text" id="inputEmail" classNameNameName="form-control" placeholder="username " required autofocus onChange={event => this.setState({userdata1:Object.assign(this.state.userdata1,{"name":event.target.value})})}/>
            //             <input type="password" id="inputPassword" classNameNameName="form-control" placeholder="Password" required  onChange={event => this.setState({userdata1:Object.assign(this.state.userdata1,{"password":event.target.value})})}/>
            //             <div id="remember" classNameNameName="checkbox">
            //                 <label>
            //                     <input type="checkbox" value="remember-me" / > Remember me 
            //                 </label>
            //             </div>
            //             <button classNameNameName="btn btn-lg btn-primary btn-block btn-signin" type="submit" onClick={() => this.login()}>Sign in</button>
            //                    <a  classNameNameName="forgot-password">
            //             Forgot the password?
            //         </a>
            //     </div>
            // </div>
            <div className="container-login100">
                {/* <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-form-title" style={{ backgroundImage: " url(images/bg-01.jpg)" }}>
                                <span className="login100-form-title-1">
                                    Sign In
                        </span>
                            </div>

                            <form className="login100-form validate-form">
                                <div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
                                    <span className="label-input100">Username</span>
                                    <input className="input100" type="text" name="username" placeholder="Enter username" onChange={event => this.setState({ userdata1: Object.assign(this.state.userdata1, { "name": event.target.value }) })} />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input m-b-18" data-validate="Password is required">
                                    <span className="label-input100">Password</span>
                                    <input className="input100" type="password" name="pass" placeholder="Enter password" onChange={event => this.setState({ userdata1: Object.assign(this.state.userdata1, { "password": event.target.value }) })} />
                                    <span className="focus-input100"></span>
                                </div>


                            </form>
                            <div style={{ alignItems: "center" }}>
                                <button className="btn btn-success" type="submit" onClick={() => this.login()}>
                                    Login
                            </button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div class="container" >
                    <div class="row">
                        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div class="card card-signin my-5" style={{backgroundColor:"rgb(178, 182, 179)"}}>
                                <div class="card-body">
                                    <h5 class="card-title text-center">Sign In</h5>
                                    <form class="form-signin">
                                        <div class="form-label-group">
                                            <input type="email" id="inputEmail" class="form-control" placeholder="UserName" onChange={event => this.setState({ userdata1: Object.assign(this.state.userdata1, { "name": event.target.value }) })} required autofocus />
                                            <label for="inputEmail">UserName</label>
                                        </div>

                                        <div class="form-label-group">
                                            <input type="password" id="inputPassword" class="form-control" placeholder="Password" onChange={event => this.setState({ userdata1: Object.assign(this.state.userdata1, { "password": event.target.value }) })} required />
                                            <label for="inputPassword">Password</label>
                                        </div>

                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                            <label class="custom-control-label" for="customCheck1">Remember password</label>
                                        </div>
                                        <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={() => this.login()}>Sign in</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default Login;