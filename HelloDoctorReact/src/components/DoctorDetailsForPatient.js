import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AppointmentService from '../service/AppointmentService';

class DoctorDetailsForPatient extends Component {
    constructor(props) {
        super(props)

        this.state = {
            doctor: [],
            message: ''
        }

        this.getDoctor = this.getDoctor.bind(this);
    }

    componentDidMount() {
        this.getDoctor();
    }

    getDoctor = () => {
        console.log("Hello")
        console.log(this.props.location.state.appointmentId);
        AppointmentService.getDoctorByAppointmentId(this.props.location.state.appointmentId)
            .then(response => {
                console.log(response.data);
                this.setState({
                    doctor: response.data,
                    message: "Doctor retrieved successfully"
                });
            })
            .catch(error => {
                console.error("in err ", error.response.data);
                alert(error.response.data.message);
            });
    }

    render() {
        let { doctor } = this.state;
        return (
            <>
                <div className="container my-4" >
                <button className="btn btn-secondary my-3 offset-10" onClick={() => { this.props.history.push('/patientDashboard') }}>Go Back</button>
                    <h3 style={{ 'text-align': 'center' }}>Doctor Details</h3>
                    <div style={{ 'margin-left': '300px' }}>
                        <table className="table table-striped table-sm table-bordered" style={{ 'width': '700px', 'align': 'center' }}>
                            <tbody>
                                <tr>
                                    <td> FirstName :</td>
                                    <td>  {doctor.firstName}</td>
                                </tr>
                                <tr>
                                    <td> LastName :</td>
                                    <td>  {doctor.lastName}</td>
                                </tr>
                                <tr>
                                    <td> Mobile No : </td>
                                    <td>{doctor.mobileNumber}</td>
                                </tr>
                                <tr>
                                    <td> Email :</td>
                                    <td> {doctor.email}</td>
                                </tr>
                                <tr>
                                    <td> State :</td>
                                    <td>  {doctor.state}</td>
                                </tr>
                                <tr>
                                    <td>  Area :</td>
                                    <td> {doctor.area}</td>
                                </tr>
                                <tr>
                                    <td>  City :</td>
                                    <td> {doctor.city}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default DoctorDetailsForPatient

