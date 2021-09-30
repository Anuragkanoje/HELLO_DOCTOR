import axios from 'axios';

const PATIENT_API_BASE_URL = 'http://localhost:8080/patient';

class PatientServiceMethods {

    addPatient(patient) {
        return axios.post(PATIENT_API_BASE_URL + "/patientSignUp", patient);
    }

    getPatientById(patientId) {
        return axios.get(PATIENT_API_BASE_URL + '/getPatientDetails/' + patientId);
    }

    updatePatientDetails(id, patient) {
        console.log("yet aahe")
        return axios.put(PATIENT_API_BASE_URL + '/updatePatientDetails/' + id, patient);
    }

    logoutPatient() {
        sessionStorage.removeItem("patient");
    }
}

export default new PatientServiceMethods();