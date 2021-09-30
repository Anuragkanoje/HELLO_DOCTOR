import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import PatientServiceMethods from '../service/PatientServiceMethods';

class PatientDashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            patientId: '',
            firstName: ''
        }

        this.loadPatient = this.loadPatient.bind(this);
        this.updatePatient = this.updatePatient.bind(this);
    }

    componentDidMount() {
        this.loadPatient();
    };

    loadPatient = () => {
        let patient = JSON.parse(sessionStorage.getItem("patient"));
        this.setState({
            patientId: patient.userId,
            firstName: patient.userFirstName
        })
    }

    updatePatient = id => {
        this.props.history.push('/update-profile');
    }

    logoutPatient = () => PatientServiceMethods.logoutPatient();

    render() {
        let { patientId, firstName } = this.state;

        return (
            <>
                <div className="container">
                    <div className="row my-3">
                        <div className="col-sm-6"><h2 className="text-capitalize">Hello, {firstName}</h2></div>
                        <div className="col-sm-6">
                            <NavLink onClick={this.logoutPatient} className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none " to="/">Logout</NavLink>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Book Appointment</h5>
                                    <p className="card-text">Book appointments with best doctors in city.</p>
                                    <button onClick={() => { this.props.history.push('/specialization-list-by-city') }} className="btn btn-primary">Book</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Show Current Appointment</h5>
                                    <p className="card-text">View your current appointment.</p>
                                    <button onClick={() => { this.props.history.push('/current-app') }} className="btn btn-warning">View</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-3">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">View Appointment History</h5>
                                    <p className="card-text">Click to view your till date appointment history.</p>
                                    <button onClick={() => { this.props.history.push('/app-history') }} className="btn btn-info">View</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Update Profile</h5>
                                    <p className="card-text">Edit your account details.</p>
                                    <button className="btn btn-success" onClick={() => { this.updatePatient(this.state.patientId) }}>Update</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-3">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Get Blood Donor Info</h5>
                                    <p className="card-text">Click to view details of available blood donors.</p>
                                    <button onClick={() => { this.props.history.push('/get-donors-by-city-and-blood-group') }} className="btn btn-warning">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PatientDashboard

