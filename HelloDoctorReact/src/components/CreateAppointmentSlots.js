import React, { Component } from 'react';
import DoctorServiceMethods from '../service/DoctorServiceMethods';

class CreateAppointmentSlots extends Component {
    constructor(props) {
        super(props)

        this.state = {
            startDate: '',
            endDate: '',
            startTime: '',
            endTime: '',
            slotDuration: '30',
            breakTime: '',
            holidays: [],
            message: null
        }

        this.createTimeTable = this.createTimeTable.bind(this);
    }

    createTimeTable = e => {
        e.preventDefault();
        console.log(this.state.holidays);
        let doctorId = JSON.parse(sessionStorage.getItem('doctor')).userId;

        let doctorTimeTable =
        {
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            slotDuration: this.state.slotDuration,
            breakTime: this.state.breakTime,
            holidays: this.state.holidays
        };
       
        var date = new Date();
        var startDate = new Date(this.state.startDate);
        var endDate = new Date(this.state.endDate);

        var str1 =  (this.state.startTime).split(':');
        var str2 = (this.state.endTime).split(':');

        console.log(startDate.getTime() == date.getTime())
       
        if(startDate.getDate() == date.getDate() && endDate.getDate() == date.getDate() && parseInt(str1[0]) < date.getHours()){
            alert("Time is not valid");
        }
        else if (startDate.getDate() != date.getDate() && endDate.getDate() != date.getDate() && startDate < date || endDate < startDate) {
            alert("Date is not valid");
        } 
        else if(parseInt(str1[0]) > parseInt(str2[0])){
            alert("Time is not valid");
        }
        else {
            DoctorServiceMethods.createAppointmentSlots(doctorTimeTable, doctorId)
                .then(res => {
                    console.log(res.data);
                    this.setState({ message: 'Your slot time-table is created successfully.' });
                    alert(this.state.message);
                    this.props.history.push('/doctorDashboard');
                }).catch(error => {
                    console.error("in err ", error.response.data);
                    //err.response.data => DTO on the server side : ErrorResponse
                    alert(error.response.data.message);
                    this.props.history.push('/doctorDashboard');
                });
        }
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    handleChecklist = e => {
        if(e.target.checked){
            switch(e.target.value){
                case "0":
                    this.setState({holidays: [...this.state.holidays, "Sunday"]})
                    break;
                case "1":
                    this.setState({holidays: [...this.state.holidays, "Monday"]});
                    break;
                case "2":
                    this.setState({holidays: [...this.state.holidays, "Tuesday"]})
                    break;
                case "3":
                    this.setState({holidays: [...this.state.holidays, "Wednesday"]})
                    break;
                case "4":
                    this.setState({holidays: [...this.state.holidays, "Thursday"]})
                    break;
                case "5":
                    this.setState({holidays: [...this.state.holidays, "Friday"]})
                    break;
                case "6":
                    this.setState({holidays: [...this.state.holidays, "Saturday"]})
                    break;
            }
        }
    }

    render() {
        return (
            <>
                <div className="container overflow-hidden" style={{ minHeight: "100vh" }}>
                    <div className="row mt-3">
                        <div className="col-sm-8">
                            <h2 className="text-muted offset-8">Create Your Slots</h2>
                        </div>
                        <div className="col-sm-4">
                            <button className="btn btn-secondary text-uppercase offset-8" onClick={() => { this.props.history.push('/doctorDashboard') }}>Go Back</button>
                        </div>
                    </div>
                    <form>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="startDate" className="col-2 col-form-label">Start Date</label>
                            <div className="col-5">
                                <input type="date" id="startDate" className="form-control" name="startDate" value={this.state.startDate} onChange={this.onChange} />
                            </div>
                        </div>

                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="endDate" className="col-2 col-form-label">End Date</label>
                            <div className="col-5">
                                <input type="date" id="endDate" className="form-control" name="endDate" value={this.state.endDate} onChange={this.onChange} />
                            </div>
                        </div>

                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="startTime" className="col-2 col-form-label">Start Time</label>
                            <div className="col-5">
                                <input type="time" id="startTime" className="form-control" name="startTime" value={this.state.startTime} onChange={this.onChange} />
                            </div>
                        </div>

                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="endTime" className="col-2 col-form-label">End Time</label>
                            <div className="col-5">
                                <input type="time" id="endTime" className="form-control" name="endTime" value={this.state.endTime} onChange={this.onChange} />
                            </div>
                        </div>

                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="slotDuration" className="col-2 col-form-label">Slot Duration(minutes)</label>
                            <div className="col-5">
                                <input type="number" id="slotDuration" min="15" max="30" className="form-control" name="slotDuration" value={this.state.slotDuration} onChange={this.onChange} />
                            </div>
                        </div>

                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="breakTime" className="col-2 col-form-label">Break Time</label>
                            <div className="col-5">
                                <input type="time" id="breakTime" className="form-control" name="breakTime" value={this.state.breakTime} onChange={this.onChange} />
                            </div>
                        </div>

                        <div className="form-group row my-3 justify-content-center">
                            <label className="col-2 col-form-label">Holidays</label>
                            <div className="col-5">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="0" name="holidays" value="0" onChange={this.handleChecklist} />
                                    <label className ="form-check-label" htmlFor="0">
                                    Sunday
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="1" name="holidays" value="1" onChange={this.handleChecklist} />
                                    <label className ="form-check-label" htmlFor="1">
                                    Monday
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="2" name="holidays" value="2" onChange={this.handleChecklist}  />
                                    <label className ="form-check-label" htmlFor="2">
                                    Tuesday
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="3" name="holidays" value="3" onChange={this.handleChecklist} />
                                    <label className ="form-check-label" htmlFor="3">
                                    Wednesday
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="4" name="holidays" value="4" onChange={this.handleChecklist}  />
                                    <label className ="form-check-label" htmlFor="4">
                                    Thursday
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="5" name="holidays" value="5" onChange={this.handleChecklist} />
                                    <label className ="form-check-label" htmlFor="5">
                                    Friday
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="6" name="holidays" value="6" onChange={this.handleChecklist}  />
                                    <label className ="form-check-label" htmlFor="6">
                                    Saturday
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-lg btn-primary text-uppercase mt-3 mb-5 offset-6" onClick={this.createTimeTable}>Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

export default CreateAppointmentSlots