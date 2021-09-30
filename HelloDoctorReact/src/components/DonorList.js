import React, { Component } from 'react';
import AdminServiceMethods from '../service/AdminServiceMethods';

class DonorList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            donors: [],
            message: null
        }

        this.loadDonorList = this.loadDonorList.bind(this);
    }

    componentDidMount() {
        this.loadDonorList();
    }

    loadDonorList() {
        AdminServiceMethods.fetchAllBloodDonors()
            .then((resp) => {
                this.setState({
                    donors: resp.data,
                    message: "Donor list rendered successfully"
                })
                console.log(this.state.message);
            });
    }

    render() {
        return (
            <>
                <div className="container my-4">
                <button className="btn btn-secondary offset-11" onClick={() => { this.props.history.push('/adminDashboard') }}>Go Back</button>
                    {this.state.donors.length === 0 ? <h3>No donors in database</h3> :
                        <div>
                            <h3>Donor List</h3>
                            <table className="table table-bordered">
                                <thead className="bg-dark text-light">
                                    <tr>
                                        <th className="visually-hidden">Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>City</th>
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
                                                    <td>{donor.city}</td>
                                                    <td>{donor.contactNumber}</td>
                                                    <td>{donor.bloodGroup}</td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>}
                </div>
            </>
        )
    }
}

export default DonorList
