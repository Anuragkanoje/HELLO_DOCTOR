import React, { Component } from 'react';
import DoctorServiceMethods from '../service/DoctorServiceMethods';

class UpdateDoctorProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id : '',
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            dob: '',
            gender: '',
            mobileNumber: '',
            beganPractice : '',
            area: '',
            city: '',
            state: '',
            languages: '',
            fees: '',
            qualification: '',
            specialization: '',
            message: null
        }

        this.saveDoctor = this.saveDoctor.bind(this);
        this.loadDoctor = this.loadDoctor.bind(this);
    }

    componentDidMount() {
        this.loadDoctor();
    }

    loadDoctor() {
        let doctor = JSON.parse(sessionStorage.getItem("doctor"));
        DoctorServiceMethods.getDoctorById(doctor.userId)
            .then(response => {
                let doctorFull = response.data;
                console.log(doctorFull);
                this.setState({
                    id : doctorFull.id,
                    username: doctorFull.username,
                    firstName: doctorFull.firstName,
                    lastName: doctorFull.lastName,
                    email: doctorFull.email,
                    dob: doctorFull.dob,
                    gender: doctorFull.gender,
                    mobileNumber: doctorFull.mobileNumber,
                    beganPractice : doctorFull.beganPractice,
                    area: doctorFull.area,
                    city: doctorFull.city,
                    state: doctorFull.state,
                    languages: doctorFull.languages,
                    fees: doctorFull.fees,
                    qualification: doctorFull.qualification,
                    specialization: doctorFull.specialization
                })
            });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    saveDoctor = e => {
        e.preventDefault();
        let doctorFull = {
            id : this.state.id,
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            dob: this.state.dob,
            gender: this.state.gender,
            beganPractice : this.state.beganPractice,
            mobileNumber: this.state.mobileNumber,
            area: this.state.area,
            city: this.state.city,
            state: this.state.state,
            languages: this.state.languages,
            fees: this.state.fees,
            qualification: this.state.qualification,
            specialization: this.state.specialization
        };

        DoctorServiceMethods.updateDoctorDetails(this.state.id, doctorFull)
            .then(response => {
                this.setState({ message: 'Doctor details updated successfully.' });
                console.log(this.state.message);
                alert(this.state.message);
                this.props.history.push('/doctorDashboard');
            });
    }

    render() {
        return (
            <>
                <div className="container overflow-hidden" style={{ minHeight: "100vh" }}>
                <div className="row my-3">
                        <div className="col-sm-8">
                            <h2 className="text-muted offset-8">Update Profile</h2>
                        </div>
                            <div className="col-sm-4">
                            <button className="btn btn-secondary text-uppercase offset-8" onClick={()=>{this.props.history.push('/doctorDashboard')}}>Go Back</button>
                            </div>
                    </div>
                    <form className="mb-5">
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="username" className="col-2 col-form-label">Username</label>
                            <div className="col-5">
                                <input type="text" id="username" className="form-control" name="username" readOnly={true} defaultValue={this.state.username} onChange={this.onChange} readOnly={true}/>
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="firstName" className="col-2 col-form-label">First Name</label>
                            <div className="col-5">
                                <input type="text" id="firstName" className="form-control" placeholder="Doctor's first name" name="firstName" value={this.state.firstName} onChange={this.onChange} readOnly={true}/>
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="lastName" className="col-2 col-form-label">Last Name</label>
                            <div className="col-5">
                                <input type="text" id="lastName" className="form-control" placeholder="Doctor's last name" name="lastName" value={this.state.lastName} onChange={this.onChange} readOnly={true}/>
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="email" className="col-2 col-form-label">Email</label>
                            <div className="col-5">
                                <input type="email" id="email" className="form-control" placeholder="e.g. abc@xyz.com" name="email" value={this.state.email} onChange={this.onChange} readOnly={true}/>
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="dob" className="col-2 col-form-label">Date of Birth</label>
                            <div className="col-5">
                                <input type="date" id="dob" className="form-control" name="dob" value={this.state.dob} onChange={this.onChange} readOnly={true}/>
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center visually-hidden">
                            <label className="col-2 col-form-label">Gender</label>
                            <div className="col-5 d-flex justify-content-between">
                                <div><input type="radio" id="gender" name="gender" value="MALE" onChange={this.onChange} disabled/> Male</div>
                                <div><input type="radio" id="gender" name="gender" value="FEMALE" onChange={this.onChange} disabled/> Female</div>
                                <div><input type="radio" id="gender" name="gender" value="OTHER" onChange={this.onChange} disabled/> Other</div>
                            </div>
                        </div>
                        <div className="form-group row my-3 justify-content-center">
                            <label htmlFor="mobileNumber" className="col-2 col-form-label">Mobile</label>
                            <div className="col-5">
                                <input type="text" id="mobileNumber" className="form-control" placeholder="Doctor's mobile number" name="mobileNumber" value={this.state.mobileNumber} onChange={this.onChange} pattern="[0-9]{10}" />
                            </div>
                        </div>

                        <div className="form-group row mt-3 justify-content-center">
                            <label htmlFor="area" className="col-2 col-form-label">Area</label>
                            <div className="col-5">
                                <input type="text" id="area" className="form-control" placeholder="Doctor's Clinic Area" name="area" value={this.state.area} onChange={this.onChange} />
                            </div>
                        </div>

                        <div className="form-group row mt-3 justify-content-center">
                            <label htmlFor="city" className="col-2 col-form-label">City</label>
                            <div className="col-5">
                                <input type="text" id="city" className="form-control" placeholder="Doctor's city " name="city" value={this.state.city} onChange={this.onChange} />
                            </div>
                        </div>

                        <div className="form-group row mt-3 justify-content-center">
                            <label htmlFor="state" className="col-2 col-form-label">State</label>
                            <div className="col-5">
                                <input type="text" id="state" className="form-control" placeholder="Doctor's  State" name="state" value={this.state.state} onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="form-group row mt-3 justify-content-center">
                            <label htmlFor="languages" className="col-2 col-form-label">Languages</label>
                            <div className="col-5">
                                <input type="text" id="languages" className="form-control" placeholder="Languages known by doctor" name="languages" value={this.state.languages} onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="form-group row mt-3 justify-content-center">
                            <label htmlFor="fees" className="col-2 col-form-label">Consultation Fee</label>
                            <div className="col-5">
                                <input type="number" id="fees" min="200" max="1000" step="50" className="form-control" name="fees" value={this.state.fees} onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="form-group row mt-3 justify-content-center">
                            <label htmlFor="qualification" className="col-2 col-form-label">Qualification</label>
                            <div className="col-5">
                                <input type="text" id="qualification" className="form-control" placeholder="Doctor's qualification" name="qualification" value={this.state.qualification} onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="form-group row mt-3 justify-content-center">
                            <label htmlFor="specialization" className="col-2 col-form-label">Specialization</label>
                            <div className="col-5">
                                <input type="text" id="specialization" className="form-control" placeholder="Doctor's specialization" name="specialization" value={this.state.specialization} onChange={this.onChange} />
                            </div>
                        </div>
                                <button className="btn btn-lg btn-primary text-uppercase mt-3 mb-5 offset-6" onClick={this.saveDoctor}>Update</button>
                    </form>
                </div>
            </>
        )
    }
}

export default UpdateDoctorProfile