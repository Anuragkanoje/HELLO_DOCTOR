import axios from 'axios';

const APPOINTMENT_BASE_URL = 'http://localhost:8080/appointment';

class AppointmentServiceMethods {

  getSpecializationListByCity(city) {
    return axios.get(APPOINTMENT_BASE_URL + "/specialization/" + city);
  }

  getDoctorsBySpecializationAndCity(specialization,city) {
    return axios.get(APPOINTMENT_BASE_URL + "/search/" + specialization + "/" + city);
  }

  getAllCurrentAppointments(patientId) {
    return axios.get(APPOINTMENT_BASE_URL + "/currAppointmentP/" + patientId);
  }

  getAllAppointmentsHistory(patientId) {
    return axios.get(APPOINTMENT_BASE_URL + '/appointementHistoryP/' + patientId);
  }

  bookAppointmentForPatient(doctorId,patientId,time) {
    return axios.get(APPOINTMENT_BASE_URL + '/bookAppointment/' + doctorId + '/' + patientId + '/' + time);
  }

  cancelAppointment(appointmentId) {
    return axios.delete(APPOINTMENT_BASE_URL + '/cancelAppointment/' + appointmentId);
  }

  getAllAppointmentSlots(doctorId){
    return axios.get(APPOINTMENT_BASE_URL + '/getAppointmentSlots/' + doctorId);
  }

  getCurrentAppointmentsForDoctor(doctorId) {
    return axios.get(APPOINTMENT_BASE_URL + '/currAppointmentD/' + doctorId);
  }

  getPatientByAppointmentId(appointmentId){
    return axios.get(APPOINTMENT_BASE_URL + '/patient/' + appointmentId);
  }

  getDoctorByAppointmentId(appointmentId){
    return axios.get(APPOINTMENT_BASE_URL + '/doctor/' + appointmentId);
  }


  getAppoinmentsHistoryOfPatientForDoctor(doctorId,patientId) {
    return axios.get(APPOINTMENT_BASE_URL + '/appointementHistoryD/' + doctorId + '/' + patientId);
  }

  getAllAppoinmentsHistoryForDoctor(doctorId) {
    return axios.get(APPOINTMENT_BASE_URL + '/appointementHistoryD/' + doctorId);
  }
}

export default new AppointmentServiceMethods();