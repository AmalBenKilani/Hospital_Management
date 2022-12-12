import { DELETE_PATIENT, ADD_PATIENT, EDIT_PATIENT, SAVE_PATIENT, FILTER_LIST, DELETE_DOCTOR, ADD_DOCTOR, SAVE_DOCTOR, EDIT_DOCTOR, FILTER_LIST_DOCTOR, ADD_APPOINTMENT, NO_APPOINTMENT, DELETE_APPOINTMENT, FILTER_APPOINTMENTS, SAVE_APPOINTMENT, EDIT_APPOINTMENT, DELETE_PRESCRIPTION, ADD_PRESCRIPTION } from "./types";

export const deletePatient = (id) => {
    return {
        type: DELETE_PATIENT,
        payload: id
    }
}

export const addPatient = (input) => {
    return {
        type: ADD_PATIENT,
        payload: input
    }
}
export const savePatient = (patient) => {
    return {
        type: SAVE_PATIENT,
        payload: patient
    }
}
export const editPatient = (editedpatient) => {
    return {
        type: EDIT_PATIENT,
        payload: editedpatient
    }
}

export const filterList = (filterValue) => {
    return {
        type: FILTER_LIST,
        payload: filterValue
    }
}

export const deleteDoctor = (id) => {
    return {
        type: DELETE_DOCTOR,
        payload: id
    }
}
export const addDoctor = (input) => {
    return {
        type: ADD_DOCTOR,
        payload: input
    }
}
export const saveDoctor = (doctor) => {
    return {
        type: SAVE_DOCTOR,
        payload: doctor
    }
}
export const editDoctor = (editeddoctor) => {
    return {
        type: EDIT_DOCTOR,
        payload: editeddoctor
    }
}

export const filterListDoctor = (filterValue) => {
    return {
        type: FILTER_LIST_DOCTOR,
        payload: filterValue
    }
}

export const addAppointment = (newEvent) => {
    return {
        type: ADD_APPOINTMENT,
        payload: newEvent
    }
}

export const NoAppointment = (newEvent) => {
    return {
        type: NO_APPOINTMENT,
        payload: newEvent
    }
}
export const DeleteAppointment = (id) => {
    return {
        type: DELETE_APPOINTMENT,
        payload: id
    }
}

export const filterAppointment =(filterAp)=>{
    return {
        type:FILTER_APPOINTMENTS,
        payload:filterAp
    }
}
export const saveAppointment=(appointment)=>{
    return {
        type:SAVE_APPOINTMENT,
        payload:appointment
    }
}

export const editAppointment =(editapp)=>{
    return{
        type:EDIT_APPOINTMENT,
        payload:editapp
    }
}
export const DeletePrescription = (id) => {
    return {
        type: DELETE_PRESCRIPTION,
        payload: id
    }
}
export const AddPrescription = (id) => {
    return {
        type: ADD_PRESCRIPTION,
        payload: id
    }
}

