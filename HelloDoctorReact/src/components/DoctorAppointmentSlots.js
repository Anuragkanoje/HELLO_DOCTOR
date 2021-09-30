import React, { Component } from 'react';
import moment from 'moment';
import AppointmentService from '../service/AppointmentService';
import { NavLink } from "react-router-dom";

class DoctorAppointmentSlots extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slots: [],
            message: null
        }

        this.getSlots = this.getSlots.bind(this);
    }

    componentDidMount() {
        this.getSlots();
    }

    getSlots = () => {
        console.log(this.props.location.state.doctorId);
        sessionStorage.setItem("doctor", JSON.stringify(this.props.location.state.doctor));
        AppointmentService.getAllAppointmentSlots(this.props.location.state.doctor.id)
            .then(response => {
                console.log(response.data);
                this.setState({
                    slots: response.data,
                    message: "Slots retrieved successfully"
                })
            })
            .catch(error => {
                console.error("in err ", error.response.data);
            });

    }


    render() {
        let doctor = JSON.parse(sessionStorage.getItem("doctor"));

        return (
            <>
                <div className="container my-4">
                    <button className="btn btn-secondary offset-11" style={{ minWidth: "7vw" }} onClick={() => { this.props.history.push('/patientDashboard') }}>Go Back</button>
                    <h3 className="bg-dark text-light py-2 my-3 text-center">Today's Available Slots</h3>
                    {
                        <div className="container d-flex justify-content-around">
                            <div>
                                {
                                    this.state.slots.length === 0 ? <h3>No slots available right now</h3> : this.state.slots.map(
                                        slot =>
                                            <NavLink key={slot} to={{
                                                pathname: '/book-slot-for-patient',
                                                state: {
                                                    doctor: doctor,
                                                    time: slot
                                                }
                                            }} className="btn btn-success my-3 mx-3 btn-link text-decoration-none text-light" style={{ minWidth: "7vw" }}>
                                                {moment(Date.parse(slot)).format("LT")}
                                            </NavLink>
                                    ).sort(function (a, b) {
                                        console.log(Date.parse(a.key))
                                        console.log(Date.parse(b.key))
                                        return Date.parse(a.key) - Date.parse(b.key);
                                    })
                                }
                            </div>
                        </div>
                    }
                </div>
            </>
        )
    }
}

export default DoctorAppointmentSlots
