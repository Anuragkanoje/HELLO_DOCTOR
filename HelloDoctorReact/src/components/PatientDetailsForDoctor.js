import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AppointmentService from '../service/AppointmentService';

class PatientDetailsForDoctor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            patient: [],
            message: ''
        }

        this.getPatient = this.getPatient.bind(this);
    }

    componentDidMount() {
        this.getPatient();
    }

    getPatient = () => {
        console.log(this.props.location.state.appointmentId);
        AppointmentService.getPatientByAppointmentId(this.props.location.state.appointmentId)
            .then(response => {
                console.log(response.data);
                this.setState({
                    patient: response.data,
                    message: "Patient retrieved successfully"
                });
            })
            .catch(error => {
                console.error("in err ", error.response.data);
                alert(error.response.data.message);
            });
    }

    render() {
        let { patient } = this.state;
        return (
            <>
                <div className="container my-4" >
                <button className="btn btn-secondary my-3 offset-10" onClick={() => { this.props.history.push('/doctorDashboard') }}>Go Back</button>
                    <h3 style={{ 'text-align': 'center' }}>Patient Details</h3>
                    <div style={{ 'margin-left': '300px' }}>
                        <table className="table table-striped table-sm table-bordered" style={{ 'width': '700px', 'align': 'center' }}>
                            <tbody>
                                <tr>
                                    <td> FirstName :</td>
                                    <td>  {patient.firstName}</td>
                                </tr>
                                <tr>
                                    <td> LastName :</td>
                                    <td>  {patient.lastName}</td>
                                </tr>
                                <tr>
                                    <td> Mobile No : </td>
                                    <td>{patient.mobileNumber}</td>
                                </tr>
                                <tr>
                                    <td> Date Of Birth : </td>
                                    <td> {patient.dob}</td>
                                </tr>
                                <tr>
                                    <td> Gender : </td>
                                    <td>{patient.gender}</td>
                                </tr>
                                <tr>
                                    <td> BloodGroup :</td>
                                    <td> {patient.bloodGroup}</td>
                                </tr>
                                <tr>
                                    <td> Email :</td>
                                    <td> {patient.email}</td>
                                </tr>
                                <tr>
                                    <td> State :</td>
                                    <td>  {patient.state}</td>
                                </tr>
                                <tr>
                                    <td>  Area :</td>
                                    <td> {patient.area}</td>
                                </tr>
                                <tr>
                                    <td>  City :</td>
                                    <td> {patient.city}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </>
        )
    }
}

export default PatientDetailsForDoctor

