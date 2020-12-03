import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom'

export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            redirectTo: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("logging in");
        axios
            .post(
                "/api/user/login",
                {
                    user: {
                        email: this.state.email,
                        password: this.state.password
                    }
                },
                { withCredentials: true }
            )
            .then(response => {
                if (response.data.status === 200) {
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    });
                    this.setState({
                        redirectTo: '/Home'
                    })
                }
            })
            .catch(error => {
                console.log("error", error);
            });

    }

    render() {
        if (this.state.redirectTo){
            return <Redirect to ={{ pathname: this.state.redirectTo }} />
        } else {
            return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                <button type="submit">Log In</button>
                </form>
            </div>
        )
    }
}

}

