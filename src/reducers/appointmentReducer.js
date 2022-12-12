import { ADD_APPOINTMENT, ADD_PRESCRIPTION, DELETE_APPOINTMENT, DELETE_PRESCRIPTION, EDIT_APPOINTMENT, FILTER_APPOINTMENTS, NO_APPOINTMENT, SAVE_APPOINTMENT } from '../actions/types'

const initialState = {
    listofAppointments: [{
        id: 1, patientName: "Ibrahim", title: "Dental Problem", departement: "Dental", doctorName: "Rania", Problem: "Tooth Decay", start: new Date(2022, 11, 22), end: new Date(2022, 11, 23), prescription: true
    },
    {
        id: 2, patientName: "Nada", title: "Neurological Problem", departement: "Neurology", doctorName: "Imen", Problem: "neuromuscular disorders", start: new Date(2022, 11, 21), end: new Date(2022, 11, 21), prescription: false
    }
    ],
    doctorList: ["Rania", "Imen", "Med"],
    Save: null,
    Filter: ""
}

export const appointmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_APPOINTMENT:
            return {
                ...state, listofAppointments: [...state.listofAppointments, ...[{ id: state.listofAppointments.length + 1, patientName: action.payload.patientName, title: action.payload.title, departement: action.payload.departement, doctorName: action.payload.doctorName, Problem: action.payload.Problem, start: action.payload.start, end: action.payload.end, prescription: false }]]
            }
        case NO_APPOINTMENT:
            return {
                ...state, listofAppointments: initialState.listofAppointments
            }
        case DELETE_APPOINTMENT:
            return {
                ...state, listofAppointments: state.listofAppointments.filter(el => el.id !== action.payload)
            }
        case FILTER_APPOINTMENTS:
            return {
                ...state, Filter: action.payload
            }
        case SAVE_APPOINTMENT:
            return {
                ...state, Save: action.payload
            }
        case EDIT_APPOINTMENT:
            return {
                ...state, listofAppointments: state.listofAppointments.map(el => el.id === state.Save.id ? { ...el, patientName: action.payload.patientName, title: action.payload.title, departement: action.payload.departement, doctorName: action.payload.doctorName, Problem: action.payload.doctorName, start: action.payload.start, end: action.payload.end } : el,), Save: null

            }
        case DELETE_PRESCRIPTION:
            return {
                ...state, listofAppointments: state.listofAppointments.map(el => el.id === action.payload ? { ...el, prescription: false} : el,)
            }
            case ADD_PRESCRIPTION:
            return {
                ...state, listofAppointments: state.listofAppointments.map(el => el.id === action.payload ? { ...el, prescription: true} : el,)
            }

        default:
            return state
    }
}