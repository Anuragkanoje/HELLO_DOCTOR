import React, { Component } from 'react';
import BloodDonorService from '../service/BloodDonorService';

class GetDonorsByCityAndBloodGroup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            donors: [],
            city: 'Pune',
            bloodGroup: 'A_POSITIVE',
            message: null
        }

        this.getDonorsList = this.getDonorsList.bind(this);
        this.displayFirst = this.displayFirst.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.displayFirst();
    }

    displayFirst = () => {
        BloodDonorService.getAllBloodDonorsByCityAndBloodGroup(this.state.city, this.state.bloodGroup)
            .then(response => {
                console.log(response.data);
                this.setState({
                    donors: response.data,
                    message: "Donor list retrieved successfully"
                });
            })
    }

    getDonorsList = e => {
        e.preventDefault();
        BloodDonorService.getAllBloodDonorsByCityAndBloodGroup(this.state.city, this.state.bloodGroup)
            .then(response => {
                console.log(response.data);
                this.setState({
                    donors: response.data,
                    message: "Donor list retrieved successfully"
                });
            })
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    handleBloodGroupChange = e => this.setState({ bloodGroup: e.target.value });


    render() {
        return (
            <>
                <div className="container overflow-hidden">
                <div className="row my-3">
                        <div className="col-sm-10">
                            <h2 className="text-muted offset-6">Blood Donor Information</h2>
                        </div>
                            <div className="col-sm-2">
                                <button className="btn btn-secondary text-uppercase offset-4" onClick={() => { this.props.history.push('./patientDashboard') }}>Go Back</button>
                            </div>
                    </div>
                    <form>
                        <div className="form-group row mt-3 justify-content-center">
                            <label htmlFor="city" className="col-1 col-form-label">City</label>
                            <div className="col-5">
                                <input type="text" id="city" className="form-control" name="city" value={this.state.city} onChange={this.onChange} />
                            </div>
                        </div>

                        <div className="form-group row my-3 justify-content-center">
                            <label className="col-3 col-form-label">Blood Group</label>
                            <div className="col-4">
                                <select value={this.state.bloodGroup} onChange={this.handleBloodGroupChange} style={{ width: "7vw", height: "7vh" }}>
                                    <option value="" disabled>--select--</option>
                                    <option value="A_POSITIVE">A+</option>
                                    <option value="A_NEGATIVE">A-</option>
                                    <option value="B_POSITIVE">B+</option>
                                    <option value="B_NEGATIVE">B-</option>
                                    <option value="O_POSITIVE">O+</option>
                                    <option value="O_NEGATIVE">O-</option>
                                    <option value="AB_POSITIVE">AB+</option>
                                    <option value="AB_NEGATIVE">AB-</option>
                                </select>
                            </div>
                        </div>
                                <button className="btn btn-primary mt-3 offset-6" onClick={this.getDonorsList}>Submit</button>
                    </form>

                    {this.state.donors.length === 0 ? <h3 className="mt-3">No donors in given criteria</h3> :
                        <table className="table table-bordered my-3">
                            <thead className="bg-dark text-light">
                                <tr>
                                    <th className="visually-hidden">Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Contact Number</th>
                                    <th>Blood Group</th>
                                 </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.donors.map(
                                        donor =>
                                            <tr key={donor.id}>
                                                <td className="visually-hidden">{donor.id}</td>
                                                <td>{donor.name}</td>
                                                <td>{donor.email}</td>
                                                <td>{donor.contactNumber}</td>
                                                <td>{donor.bloodGroup}</td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    }
                </div>
            </>
        )
    }
}

export default GetDonorsByCityAndBloodGroup

