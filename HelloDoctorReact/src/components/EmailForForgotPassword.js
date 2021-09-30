import React, { Component } from 'react';
import UserLoginAPI from '../service/UserLoginAPI';
//import ReactModuleLoader from 'react-module-loader';

class EmailForForgotPassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            email: '',
            token: '',
            message: null
        }

        this.submit = this.submit.bind(this);
    }

    submit = e => {
        e.preventDefault();

        this.setState({ loading: true });

        //Faking API call here
        setTimeout(() => {
            this.setState({ loading: false });
        }, 10000);

        UserLoginAPI.generateToken(this.state.email)
            .then(response => {
                this.setState({
                    token: response.data,
                    message: "Token received"
                })
                alert("Token has been sent to registered email!!!")
                this.props.history.push({

                    pathname: '/enter-token',
                    state: {
                        email: this.state.email,
                        token: this.state.token
                    }
                });
            })
            .catch(error => {
                console.error("in err ", error.response.data);
                alert("Invalid Email");
                this.props.history.push('#');
            })

    }

    validateEmail() {
        let email = document.getElementById("email1").value;
        let emailRegex = /\S+@\S+\.\S+/;
        if (emailRegex.test(email) === true || email == '') {
            return true;
        }
        else {
            document.getElementById("emailVR").innerHTML = "Email format should be abc@xyz.com"
            return false;
        }
    }

    removeAlert() {
        document.getElementById("emailVR").innerHTML = "";

    }

    onChange = e => this.setState({ email: e.target.value });

    render() {
        return (
            <>
                <h2 className="text-center mt-5 mb-3">Forgot Password?</h2>
                <form className="container bg-dark pt-2" style={{ width: "30vw" }}>
                    <div className="form-group">
                        <input type="email" id="email1" className="form-control text-center mt-3" placeholder="Enter Registered Email" id="email1" name="email" value={this.state.email} onChange={this.onChange} onBlur={this.validateEmail} onFocus={this.removeAlert} required /><span id="emailVR" style={{ color: "red" }}></span>
                    </div>
                    <button className="btn btn-primary my-3 offset-5" onClick={this.submit}>
                        {this.state.loading && (
                            <i
                                className="fas fa-spinner"
                                style={{ marginRight: "5px" }}
                            />
                        )}
                        {this.state.loading && <span>Submitting</span>}
                        {!this.state.loading && <span>Submit</span>}

                    </button>
                </form>
            </>
        )
    }
}

export default EmailForForgotPassword