import React, { Component} from "react";
import Login from "../Components/auth/login";
import Registration from "../Components/auth/registration";


export default class LoggedIn extends Component {
    // constuctor() {
    //     super();

    //     this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    // }

    // handleSuccessfulAuth(data) {
    //     this.props.handleLogin(data);
    //     this.props.history.push("/home");
    // }

    render() {
        return(
            <div>
                {/* <Jumbotron /> */}
                <h1>Login</h1>
                
                <div className = "container">
                    <p>Registration</p>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <br></br>
                </div>
                <div className = "container">
                    <p>Log in</p>
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}