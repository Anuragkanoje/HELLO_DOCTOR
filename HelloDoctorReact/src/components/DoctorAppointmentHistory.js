import React, { Component } from 'react';
import AppointmentService from '../service/AppointmentService';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

class DoctorAppointmentHistory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            appointments: [],
            message: null
        }

        this.getAllAppointments = this.getAllAppointments.bind(this);
    }

    componentDidMount() {
        this.getAllAppointments();
    }

    getAllAppointments = () => {
        let doctor = JSON.parse(sessionStorage.getItem("doctor"));

        AppointmentService.getAllAppoinmentsHistoryForDoctor(doctor.userId)
            .then(response => {
                console.log(response.data);
                this.setState({
                    appointments: response.data,
                    message: "Appointments retrieved successfully"
                })
            })
            .catch(error => {
                console.error("in err ", error.response.data);
                alert(error.response.data.message);
            });
    }

    render() {
        return (
            <>
                <div className="container my-4">
                <button className="btn btn-secondary offset-11" onClick={() => { this.props.history.push('/doctorDashboard') }}>Go Back</button>
                    {this.state.appointments.length === 0 ? <h3>You have no appointment history</h3> :
                        <div>
                            <h3>Your Appointment History</h3>
                            <table className="table table-bordered">
                                <thead className="bg-dark text-light">
                                    <tr>
                                        <th>S. No.</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Appointment Type</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.appointments.map(
                                            (appointment, index) =>
                                                <tr key={appointment.id}>
                                                    <td>{`${index + 1}`}</td>
                                                    <td>{moment(Date.parse(appointment.appointmentTime)).format("D MMMM,YYYY")}</td>
                                                    <td>{moment(Date.parse(appointment.appointmentTime)).format("LT")}</td>
                                                    <td>{appointment.appointmentType}</td>
                                                    <td><NavLink className="btn btn-info btn-link text-dark text-decoration-none offset-1" to={{ pathname: '/patient-details-for-doctor', state: { appointmentId: appointment.id } }}>Patient Details</NavLink></td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
                </div>

            </>
        )
    }
}

export default DoctorAppointmentHistory
