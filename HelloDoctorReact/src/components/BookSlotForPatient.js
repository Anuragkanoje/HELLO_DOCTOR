import React, { Component } from 'react';
import AppointmentService from '../service/AppointmentService';
import moment from 'moment';

class BookSlotForPatient extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slots: [],
            message: null
        }

        this.confirmSlot = this.confirmSlot.bind(this);
    }

    confirmSlot = (doctorId, patientId, time) => {
        AppointmentService.bookAppointmentForPatient(doctorId, patientId, time.replace("T"," "))
            .then(response => {
                this.setState({
                    slots: response.data,
                    message: "Appointment Confirmed!!!"
                })
                alert(this.state.message);
                console.log(this.state.message);
                this.props.history.push('/patientDashboard');
            })
            .catch(error => {
                console.error("in err ", error.response.data);
                alert(error.response.data.message);
            });
    }

    render() {
        let { doctor, time } = this.props.location.state;
        let patient = JSON.parse(sessionStorage.getItem("patient"));

        return (
            <>
                <div className="container my-4">
                <button className="btn btn-secondary my-2 offset-10" onClick={() => { this.props.history.push('/patientDashboard') }} style={{minWidth: "13vw"}}>Back To Dashboard</button>
                    <h3>Confirm Appointment</h3>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                            <tr>
                                <th className="visually-hidden">Patient ID</th>
                                <th>Patient Name</th>
                                <th>Doctor Name</th>
                                <th>Area</th>
                                <th>Consultaion Fee</th>
                                <th>Specialization</th>
                                <th>Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="visually-hidden">{patient.userId}</td>
                                <td>{patient.userFirstName}</td>
                                <td>{`${'Dr. ' + doctor.firstName + ' ' + doctor.lastName}`}</td>
                                <td>{`${doctor.area + ', ' +  doctor.city}`}</td>
                                <td>{doctor.fees}</td>
                                <td>{doctor.specialization}</td>
                                <td>{moment(Date.parse(time)).format("LT")}</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => { this.confirmSlot(doctor.id, patient.userId, time)}}>Confirm</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default BookSlotForPatient
