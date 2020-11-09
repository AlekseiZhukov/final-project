const UPDATE_OFFICER_DATA = 'UPDATE_OFFICER_DATA'
const UPDATE_OFFICER_DATA_IS_FETCHING = 'UPDATE_OFFICER_DATA_IS_FETCHING'
const UPDATE_OFFICER_FIRST_NAME = 'UPDATE_OFFICER_FIRST_NAME'
const UPDATE_OFFICER_LAST_NAME = 'UPDATE_OFFICER_LAST_NAME'
const UPDATE_OFFICER_EMAIL = 'UPDATE_OFFICER_EMAIL'
const UPDATE_APPROVED_IN_OFFICER_PAGE = 'UPDATE_APPROVED_IN_OFFICER_PAGE'
const UPDATE_NEW_PASSWORD_IN_OFFICER_PAGE = 'UPDATE_NEW_PASSWORD_IN_OFFICER_PAGE'
const UPDATE_ALL_DATA_SAVED_IN_OFFICER_PAGE = 'UPDATE_ALL_DATA_SAVED_IN_OFFICER_PAGE'


let initialState = {
    officerData: null,
    newPassword: '',
    officerDataIsFetching: false,
    allDataSaved: false

}

const OfficerPageReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_OFFICER_DATA:
            return {
                ...state,
                officerData: action.data
            }
        case UPDATE_NEW_PASSWORD_IN_OFFICER_PAGE:
            return {
                ...state,
                newPassword: action.newPassword
            }
        case UPDATE_OFFICER_DATA_IS_FETCHING:
            return {
                ...state,
                officerDataIsFetching: action.officerDataIsFetching
            }
        case UPDATE_ALL_DATA_SAVED_IN_OFFICER_PAGE:
            return {
                ...state,
                allDataSaved: !state.allDataSaved
            }
        case UPDATE_OFFICER_FIRST_NAME:
            return {
                ...state,
                officerData: {
                    ...state.officerData,
                    firstName: action.firstName
                }
            }
        case UPDATE_OFFICER_LAST_NAME:
            return {
                ...state,
                officerData: {
                    ...state.officerData,
                    lastName: action.lastName
                }
            }
        case UPDATE_OFFICER_EMAIL:
            return {
                ...state,
                officerData: {
                    ...state.officerData,
                    email: action.email
                }
            }
        case UPDATE_APPROVED_IN_OFFICER_PAGE:
            return {
                ...state,
                officerData: {
                    ...state.officerData,
                    approved: !state.officerData.approved
                }
            }
        default:
            return state;
    }
}
export const setOfficerData =(data) => ({type: UPDATE_OFFICER_DATA, data});
export const setOfficerDataIsFetching =(officerDataIsFetching) => ({type: UPDATE_OFFICER_DATA_IS_FETCHING, officerDataIsFetching});
export const setOfficerFirstName =(firstName) => ({type: UPDATE_OFFICER_FIRST_NAME, firstName});
export const setOfficerLastName =(lastName) => ({type: UPDATE_OFFICER_LAST_NAME, lastName});
export const setOfficerEmail =(email) => ({type: UPDATE_OFFICER_EMAIL, email});
export const setApprovedInOfficerPage =() => ({type: UPDATE_APPROVED_IN_OFFICER_PAGE});
export const setNewPasswordInOfficerPage =(newPassword) => ({type: UPDATE_NEW_PASSWORD_IN_OFFICER_PAGE, newPassword});
export const setAllDataSavedInOfficerPage =() => ({type: UPDATE_ALL_DATA_SAVED_IN_OFFICER_PAGE});

export default OfficerPageReducer