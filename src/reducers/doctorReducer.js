import { ADD_DOCTOR, DELETE_DOCTOR, EDIT_DOCTOR, FILTER_LIST_DOCTOR, SAVE_DOCTOR } from "../actions/types"

const initialState = {
    ListofDoctors: [{ id: 1, Name: "Ahmed", Gender: "Male", Departement: "Paediatrics", Email: "Ahmed@gmail.com", Mobile: "+859263256", City: "Sousse", Date: "20/9/2022" },
    { id: 2, Name: "Imen", Gender: "Female", Departement: "Neurology", Email: "Imen@gmail.com", Mobile: "+505578964", City: "Mahdia", Date: "20/9/1995" },
    { id: 3, Name: "Rania", Gender: "Female", Departement: "Dental", Email: "Rania@gmail.com", Mobile: "+225578964", City: "Monastir", Date: "16/8/1995" }
    ],
    Save: null,
    Filter: ""

}

export const doctorReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_DOCTOR:
            return {
                ...state, ListofDoctors: state.ListofDoctors.filter(el => el.id !== action.payload)

            }
        case ADD_DOCTOR:
            return {
                ...state, ListofDoctors: [...state.ListofDoctors, ...[{ id: state.ListofDoctors[state.ListofDoctors.length - 1].id + 1, Name: action.payload.Name, Gender: action.payload.Gender, Departement: action.payload.Departement, Email: action.payload.Email, Mobile: action.payload.Mobile, City: Object.values(action.payload)[5], Date: Object.values(action.payload)[6] }]]
            }

        case SAVE_DOCTOR:
            return {
                ...state, Save: action.payload
            }
        case EDIT_DOCTOR:
            return {
                ...state, ListofDoctors: state.ListofDoctors.map(el => el.id === state.Save.id ? { ...el, Name: action.payload.Name, Gender: action.payload.Gender, Departement: action.payload.Departement, Email: action.payload.Email, Mobile: action.payload.Mobile, City: action.payload.City, Date: action.payload.Date } : el,), Save: null
            }
        case FILTER_LIST_DOCTOR:
            return {
                ...state, Filter: action.payload
            }
        default:
            return state
    }

}
