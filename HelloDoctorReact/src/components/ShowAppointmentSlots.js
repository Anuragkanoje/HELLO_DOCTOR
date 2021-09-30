import React, { Component } from 'react';
import moment from 'moment';
import AppointmentService from '../service/AppointmentService';
import { NavLink } from "react-router-dom";
import { Button } from 'bootstrap';

class ShowAppointmentSlots extends Component {
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
        AppointmentService.getAllAppointmentSlots(this.props.location.state.doctorId)
            .then(response => {
                console.log(response.data);
                this.setState({
                    slots: response.data,
                    message: "Slots retrieved successfully"
                })
            })
            // .catch(error => {
            //     console.error("in err ", error.response.data);

            //     alert(error.response.data.message);
            // });

    }


    render() {
        let doctor = JSON.parse(sessionStorage.getItem("doctor"));

        return (
            <>
                <div className="container">
                <button className="btn btn-secondary offset-11 mt-3" style={{minWidth:"7vw"}} onClick={() => { this.props.history.push('/doctorDashboard') }}>Go Back</button>
                    <h3 className="bg-dark text-light py-2 mt-3 text-center">Today's Available Slots</h3>
                    {                       
                        <div className="container d-flex justify-content-around">
                            <div>
                                {
                                    this.state.slots.map(
                                        slot =>
                                            <button key={slot} className="btn btn-success my-3 mx-3 btn-link text-decoration-none text-light" style={{minWidth:"7vw"}}>
                                                {moment(Date.parse(slot)).format("LT")}
                                            </button>
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

export default ShowAppointmentSlots