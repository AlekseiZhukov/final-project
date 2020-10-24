const UPDATE_ARRAY_THEFT_REPORTS ='UPDATE_ARRAY_THEFT_REPORTS'
const UPDATE_THEFT_REPORTS_FETCHING = 'UPDATE_THEFT_REPORTS_FETCHING'

let initialState = {
    arrayTheftReports: null,
    theftReportsIsFetching: false,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    repassword: '',
    clientId: '',
    passwordMatched: false,
    showPassword: false
}


const adminPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ARRAY_THEFT_REPORTS:

            return {
                ...state,
                arrayTheftReports:  action.arrayTheftReports
            }
        case UPDATE_THEFT_REPORTS_FETCHING:
            return {
                ...state,
                theftReportsIsFetching:  action.theftReportsIsFetching
            }
        default:
            return state;
    }
}

export const arrayTheftReports =(array) => ({type: UPDATE_ARRAY_THEFT_REPORTS, arrayTheftReports: array});
export const setTheftReportsIsFetching =(theftReportsIsFetching) => ({type: UPDATE_THEFT_REPORTS_FETCHING, theftReportsIsFetching});
export default adminPageReducer