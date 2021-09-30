import './App.css';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import UserLogin from './components/UserLogin';
import EmailForForgotPassword from './components/EmailForForgotPassword';
import EnterToken from './components/EnterToken';
import ResetPassword from './components/ResetPassword';
import PatientSignUp from './components/PatientSignUp';
import PatientDashboard from './components/PatientDashboard';
import AdminDashboard from './components/AdminDashboard';
import DoctorDashboard from './components/DoctorDashboard';
import SpecializationListByCity from './components/SpecializationListByCity';
import ShowCurrentAppointment from './components/ShowCurrentAppointment';
import AppointmentHistory from './components/AppointmentHistory';
import UpdatePatientProfile from './components/UpdatePatientProfile';
import DoctorListForPatient from './components/DoctorListForPatient';
import DoctorListForAdmin from './components/DoctorListForAdmin';
import PatientList from './components/PatientList';
import AddNewDctor from './components/AddNewDoctor';
import AddNewDonor from './components/AddNewDonor';
import DonorList from './components/DonorList';
import DoctorCurrentAppointments from './components/DoctorCurrentAppointments';
import DoctorAppointmentHistory from './components/DoctorAppointmentHistory';
import DoctorAppointmentSlots from './components/DoctorAppointmentSlots';
import CreateAppointmentSlots from './components/CreateAppointmentSlots';
import BookSlotForPatient from './components/BookSlotForPatient';
import GetDonorsByCityAndBloodGroup from './components/GetDonorsByCityAndBloodGroup';
import UpdateDoctorProfile from './components/UpdateDoctorProfile';
import PatientDetailsForDoctor from './components/PatientDetailsForDoctor';
import ShowAppointmentSlots from './components/ShowAppointmentSlots';
import DoctorDetailsForPatient from './components/DoctorDetailsForPatient';

import {
  Switch,
  Route
} from 'react-router';

function App() {
  return (
    <>
      <Header title="HelloDoctor" />
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/patient-sign-up" component={PatientSignUp}></Route>
        <Route exact path="/userLogin" component={UserLogin}></Route>
        <Route exact path="/email-for-forgot-password" component={EmailForForgotPassword}></Route>
        <Route exact path="/enter-token" component={EnterToken}></Route>
        <Route exact path="/reset-password" component={ResetPassword}></Route>
        <Route exact path="/patientDashboard" component={PatientDashboard}></Route>
        <Route exact path="/adminDashboard" component={AdminDashboard}></Route>
        <Route exact path="/doctorDashboard" component={DoctorDashboard}></Route>
        <Route exact path="/specialization-list-by-city" component={SpecializationListByCity}></Route>
        <Route exact path="/current-app" component={ShowCurrentAppointment}></Route>
        <Route exact path="/app-history" component={AppointmentHistory}></Route>
        <Route exact path="/update-profile" component={UpdatePatientProfile}></Route>
        <Route exact path="/doctor-list-patient" component={DoctorListForPatient}></Route>
        <Route exact path="/doctor-list-admin" component={DoctorListForAdmin}></Route>
        <Route exact path="/patientList" component={PatientList}></Route>
        <Route exact path="/add-new-doctor" component={AddNewDctor}></Route>
        <Route exact path="/add-new-donor" component={AddNewDonor}></Route>
        <Route exact path="/donorList" component={DonorList}></Route>
        <Route exact path="/doctor-current-app" component={DoctorCurrentAppointments}></Route>
        <Route exact path="/doctor-app-history" component={DoctorAppointmentHistory}></Route>
        <Route exact path="/doctor-appointment-slots" component={DoctorAppointmentSlots}></Route>
        <Route exact path="/create-appointment-slots" component={CreateAppointmentSlots}></Route>
        <Route exact path="/book-slot-for-patient" component={BookSlotForPatient}></Route>
        <Route exact path="/get-donors-by-city-and-blood-group" component={GetDonorsByCityAndBloodGroup}></Route>
        <Route exact path="/update-doctor-profile" component={UpdateDoctorProfile}></Route>
        <Route exact path="/patient-details-for-doctor" component={PatientDetailsForDoctor}></Route>
        <Route exact path="/show-appointment-slots-doctor" component={ShowAppointmentSlots}></Route>
        <Route exact path="/doctor-details-for-patient" component={DoctorDetailsForPatient}></Route>

        {/* <Redirect to="/" /> */}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
