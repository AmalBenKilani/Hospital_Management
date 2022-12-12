import { patientReducer } from "./patientReducer";
import { combineReducers } from "redux";
import { doctorReducer } from "./doctorReducer"
import { appointmentReducer } from "./appointmentReducer";

export default combineReducers({
    patientReducer, doctorReducer,appointmentReducer,
})