import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import AppointmentService from '../service/AppointmentService';

class DoctorListForPatient extends Component {

    constructor(props) {
        super(props)
        this.state = {
            doctors: [],
            message: null
        }

        this.getDoctorList = this.getDoctorList.bind(this);
    };

    getDoctorList = () => {
        console.log(this.props.location.state.city);
        console.log(this.props.location.state.specialization)

        AppointmentService.getDoctorsBySpecializationAndCity(this.props.location.state.specialization, this.props.location.state.city)
            .then(response => {
                console.log(response.data);
                this.setState({ doctors: response.data, message: "Doctor list rendered successfully" });
            })
            .catch(error => {
                console.error("in err ", error.response.data);
                alert(error.response.data.message);
            });
    }

    componentDidMount() {
        this.getDoctorList();
    }

    render() {
        
        return (
            <>
                <div className="container my-4">
                <button className="btn btn-secondary offset-11" onClick={() => { this.props.history.push('/specialization-list-by-city') }}>Go Back</button>
                    <h3>Available {this.props.location.state.specialization}s in {this.props.location.state.city}</h3>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                            <tr>
                                <th className="visually-hidden">Id</th>
                                <th>Name</th>
                                <th>Qualification</th>
                                <th>Consultation Fee</th>
                                <th>Email</th>
                                <th>Mobile Number</th>
                                <th>Area</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.doctors.map(
                                    doctor =>
                                        <tr key={doctor.id}>
                                            <td className="visually-hidden">{doctor.id}</td>
                                            <td>{`${'Dr. ' + doctor.firstName + ' ' + doctor.lastName}`}</td>
                                            <td>{doctor.qualification}</td>
                                            <td>{doctor.fees}</td>
                                            <td>{doctor.email}</td>
                                            <td>{doctor.mobileNumber}</td>
                                            <td>{doctor.area}</td>
                                            <td>
                                                <NavLink className="btn btn-success btn-link text-decoration-none text-light" to={{pathname:'/doctor-appointment-slots',state:{doctor:doctor}}}>Book Appointment</NavLink>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )

    }


}
export default DoctorListForPatient

