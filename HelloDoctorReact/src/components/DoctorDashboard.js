import React, { Component } from 'react';
import DoctorServiceMethods from '../service/DoctorServiceMethods';
import { NavLink } from 'react-router-dom';

class DoctorDashboard extends Component {


    constructor(props) {
        super(props)

        this.state = {
            doctorId: '',
            firstName: ''
        }

        this.loadDoctor = this.loadDoctor.bind(this);
    }

    componentDidMount() {
        this.loadDoctor();
    };

    logout = () => DoctorServiceMethods.doctorLogout();

    loadDoctor = () => {
        let doctor = JSON.parse(sessionStorage.getItem("doctor"));
        this.setState({
            doctorId: doctor.userId,
            firstName: doctor.userFirstName
        })
    }

    deleteHandler(id) {

    }

    render() {
        let doctor = JSON.parse(sessionStorage.getItem("doctor"));
        let { doctorId, firstName } = this.state;
        return (
            <>
                <div className="container">
                    <div className="row my-3">
                        <div className="col-sm-6"><h2 className="text-capitalize">Hello, Dr. {firstName}</h2></div>
                        <div className="col-sm-6">
                            <NavLink onClick={this.logout} className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none " to="/userLogin" >Logout</NavLink>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Active Appointments</h5>
                                    <p className="card-text">View all your active appointments at present.</p>
                                    <button onClick={() => { this.props.history.push('/doctor-current-app') }} className="btn btn-primary">VIEW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Appointment History</h5>
                                    <p className="card-text">View your appointment history.</p>
                                    <button onClick={() => { this.props.history.push('/doctor-app-history') }} className="btn btn-info">VIEW</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-3">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Create Slots</h5>
                                    <p className="card-text">Fill a form to create your slot time-table according to your convenience.</p>
                                    <button onClick={() => { this.props.history.push('/create-appointment-slots') }} className="btn btn-success">CREATE</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Show Todays Slots</h5>
                                    <p className="card-text">Display all slots available for today</p>
                                    <button onClick={() => { this.props.history.push({ pathname: '/show-appointment-slots-doctor', state: { doctorId: doctor.userId } }) }} className="btn btn-warning">VIEW</button>
                                </div>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Update Profile</h5>
                                        <p className="card-text">Updte your account details.</p>
                                        <button onClick={() => { this.props.history.push('/update-doctor-profile') }} className="btn btn-danger">UPDATE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default DoctorDashboard
