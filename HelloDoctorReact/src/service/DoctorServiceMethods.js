import axios from 'axios';

const DOCTOR_BASE_URL = 'http://localhost:8080/doctor';

class DoctorServiceMethods {

    createAppointmentSlots(doctorTimeTable,doctorId){
        return axios.post(DOCTOR_BASE_URL + '/createAppointmentSlot/' + doctorId,doctorTimeTable);
    }

    getDoctorById(doctorId){
        return axios.get(DOCTOR_BASE_URL + '/getDoctorDetails/' + doctorId);
    }

    updateDoctorDetails(id, doctor){
        return axios.put(DOCTOR_BASE_URL + '/updateDoctor/' + id,doctor);
    }

    doctorLogout() {
        sessionStorage.removeItem("doctor");
    }
}

export default new DoctorServiceMethods();