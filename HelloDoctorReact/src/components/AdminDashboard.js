import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import AdminServiceMethods from '../service/AdminServiceMethods';


class AdminDashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            adminId: '',
            firstName: ''
        }

        this.loadAdmin = this.loadAdmin.bind(this);
    }

    componentDidMount() {
        this.loadAdmin();
    };

    loadAdmin = () => {
        let admin = JSON.parse(sessionStorage.getItem("admin"));
        this.setState({
            adminId: admin.userId,
            firstName: admin.userFirstName
        })
    }

    logout() {
        AdminServiceMethods.logoutAdmin()
    }

    render() {

        let { adminId, firstName } = this.state;
        return (
            <>
                <div className="container">
                    <div className="row my-3">
                        <div className="col-sm-6"><h2 className="text-capitalize">Hello, {firstName}</h2></div>
                        <div className="col-sm-6">
                            <NavLink onClick={this.logout} className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none " to="/">Logout</NavLink>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Add New Doctor</h5>
                                    <p className="card-text">Register a new doctor to database.</p>
                                    <button onClick={() => { this.props.history.push('/add-new-doctor') }} className="btn btn-primary">ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">View Doctor List</h5>
                                    <p className="card-text">View details of all registered doctors.</p>
                                    <button onClick={() => { this.props.history.push('/doctor-list-admin') }} className="btn btn-warning">VIEW</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-3">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Add New Donor</h5>
                                    <p className="card-text">Add a new blood donor to database.</p>
                                    <button onClick={() => { this.props.history.push('/add-new-donor') }} className="btn btn-info">ADD</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">View Donor List</h5>
                                    <p className="card-text">View details of all registered donors.</p>
                                    <button className="btn btn-success" onClick={() => { this.props.history.push('/donorList') }}>VIEW</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-3">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">View Patient List</h5>
                                    <p className="card-text">View details of all patients.</p>
                                    <button onClick={() => { this.props.history.push('/patientList') }} className="btn btn-danger">VIEW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AdminDashboard


