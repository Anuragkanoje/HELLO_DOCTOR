import React, { Component } from 'react';
import AdminServiceMethods from '../service/AdminServiceMethods';

class AddNewDonor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            contactNumber: '',
            city: '',
            state: '',
            bloodGroup: '',
            message: null
        }

        this.addDonor = this.addDonor.bind(this);
    }


    validateEmail() {
        let email = document.getElementById("email").value;

        var regexEmail = /\S+@\S+\.\S+/;
        if (regexEmail.test(email) === true) {
            document.getElementById("emailVr").innerHTML = "";
            return true;
        } else {
            document.getElementById("emailVr").innerHTML = "email format should be 'abc@gmail.com'"

        }

    }
    removeWarnings() {
        document.getElementById("emailVr").innerHTML = "";
        document.getElementById("mobileNumberVr").innerHTML = "";

    }

    validateMobileNumber() {
        let number = document.getElementById('contactNumber').value;
        if (/^\d{10}$/.test(number)) {
            document.getElementById("contactNumber").innerHTML = "";

        } else {
            document.getElementById("mobileNumberVr").innerHTML = "Phone number must be 10 digits.";

            return false
        }
    }

    addDonor = e => {
        e.preventDefault();
        let donor =
        {
            name: this.state.name,
            email: this.state.email,
            contactNumber: this.state.contactNumber,
            city: this.state.city,
            state: this.state.state,
            bloodGroup: this.state.bloodGroup,
        };

        AdminServiceMethods.saveDonor(donor)
            .then(res => {
                console.log(res.data);
                this.setState({ message: 'Donor added successfully.' });
                alert(this.state.message);
                this.props.history.push('/adminDashboard');
            }).catch(error => {
                console.error("in err ", error.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(error.response.data.message);
                this.props.history.push('/adminDashboard');
            });
    }

    onChange = e =>
        this.setState({ [e.target.name]: e.target.value });

    handleBloodGroupChange = e => {
        this.setState({ bloodGroup: e.target.value })
    }

    render() {
        return (
            <>
                <div className="container overflow-hidden" style={{ minHeight: "100vh" }}>
                    <div className="row mt-3">
                        <div className="col-sm-8">
                            <h2 className="text-muted offset-9">Add Donor</h2>
                        </div>
                        <div className="col-sm-4">
                            <button className="btn btn-secondary text-uppercase offset-8" onClick={() => { this.props.history.push('/adminDashboard') }}>Go Back</button>
                        </div>
                    </div>
                    <form>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="username" className="col-2 col-form-label">Donor Name</label>
                            <div className="col-5">
                                <input type="text" id="name" className="form-control" placeholder="Enter donor's name" name="name" value={this.state.name} onChange={this.onChange} />
                            </div>
                        </div>

                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="email" className="col-2 col-form-label">Email</label>
                            <div className="col-5">
                                <input type="email" id="email" className="form-control" placeholder="e.g. abc@xyz.com" name="email" value={this.state.email} onChange={this.onChange} required onFocus={this.removeWarnings} onBlur={this.validateEmail} /><span style={{ color: 'red' }} id='emailVr'></span>
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label className="col-2 col-form-label">Blood Group</label>
                            <div className="col-5 d-flex justify-content-between">
                                <select value={this.state.bloodGroup} onChange={this.handleBloodGroupChange} style={{ width: "7vw", height: "7vh" }}>
                                    <option value="" disabled>--select--</option>
                                    <option value="A_POSITIVE">A+</option>
                                    <option value="A_NEGATIVE">A-</option>
                                    <option value="B_POSITIVE">B+</option>
                                    <option value="B_NEGATIVE">B-</option>
                                    <option value="O_POSITIVE">O+</option>
                                    <option value="O_NEGATIVE">O-</option>
                                    <option value="AB_POSITIVE">AB+</option>
                                    <option value="AB_NEGATIVE">AB-</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="contactNumber" className="col-2 col-form-label">Contact Number</label>
                            <div className="col-5">
                                <input type="text" id="contactNumber" className="form-control" placeholder="Donor's contact number" name="contactNumber" value={this.state.contactNumber} onChange={this.onChange} pattern="[0-9]{10}" onBlur={this.validateMobileNumber} onFocus={this.removeWarnings} required /><span id='mobileNumberVr' style={{ color: 'red' }}></span>
                            </div>
                        </div>

                        <div className="form-group row mt-3 justify-content-center">
                            <label htmlFor="city" className="col-2 col-form-label">City</label>
                            <div className="col-5">
                                <input type="text" id="city" className="form-control" placeholder="Donor's city " name="city" value={this.state.city} onChange={this.onChange} />
                            </div>
                        </div>

                        <div className="form-group row mt-3 justify-content-center">
                            <label htmlFor="state" className="col-2 col-form-label">State</label>
                            <div className="col-5">
                                <input type="text" id="state" className="form-control" placeholder="Donor's  State" name="state" value={this.state.state} onChange={this.onChange} />
                            </div>
                        </div>

                        <button className="btn btn-lg btn-primary text-uppercase mt-3 offset-6" onClick={this.addDonor}>Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

export default AddNewDonor;
