import { ADD_PATIENT, DELETE_PATIENT, EDIT_PATIENT, FILTER_LIST, SAVE_PATIENT } from "../actions/types"

const initialState = {
  ListofPatients: [{ id: 1, Name: "Ibrahim", Gender: "Male", Age: 38, BloodGroup: "A", Mobile: "+1234567890", City: "Sousse", Date: "26/9/2022" },
  { id: 2, Name: "Nada", Gender: "Female", Age: 30, BloodGroup: "B+", Mobile: "	+0123456789", City: "Tunis", Date: "26/9/2022" }
  ],
  Save: null,
  Filter:""

}

export const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PATIENT:
      return {
        ...state, ListofPatients: state.ListofPatients.filter(el => el.id !== action.payload)

      }
    case ADD_PATIENT:
      return {
        ...state, ListofPatients: [...state.ListofPatients, ...[{ id: state.ListofPatients[state.ListofPatients.length - 1].id + 1, Name: action.payload.Name, Gender: action.payload.Gender, Age: action.payload.Age, BloodGroup: action.payload.BloodGroup, Mobile: action.payload.Mobile, City: Object.values(action.payload)[5], Date: Object.values(action.payload)[6] }]]
      }

    case SAVE_PATIENT:
      return {
        ...state, Save: action.payload
      }
    case EDIT_PATIENT:
      return {
        ...state, ListofPatients: state.ListofPatients.map(el => el.id === state.Save.id ? { ...el, Name: action.payload.Name, Gender: action.payload.Gender, Age: action.payload.Age, BloodGroup: action.payload.BloodGroup, Mobile: action.payload.Mobile, City: action.payload.City, Date: action.payload.Date } : el,) ,Save: null
      }
      case FILTER_LIST:
        return{
          ...state,Filter:action.payload
        }
    default:
      return state
  }

}
