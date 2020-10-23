// noinspection SpellCheckingInspection
const UPPDATE_EMAIL = 'UPPDATE_EMAIL';
const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME';
const UPDATE_LASTNAME = 'UPDATE_LASTNAME';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const UPDATE_REPASSWORD = 'UPDATE_REPASSWORD';
const SHOW_HIDE_PASSWORD = 'SHOW_HIDE_PASSWORD';
const UPDATE_CLIENT_ID = 'UPDATE_CLIENT_ID';
const PASSWORD_MATCHED = 'PASSWORD_MATCHED';
const CANCEL_REQUEST = 'CANCEL_REQUEST';


let initialState = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    repassword: '',
    clientId: '',
    passwordMatched: false,
    showPassword: false
}

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPPDATE_EMAIL:
            return {
                ...state,
                email: action.email,
            };
        case UPDATE_FIRSTNAME:
            return {
                ...state,
                firstName: action.firstName,
            };
        case UPDATE_LASTNAME:
            return {
                ...state,
                lastName: action.lastName,
            };
        case UPDATE_PASSWORD:
            return {
                ...state,
                password: action.password,
            };
        case UPDATE_REPASSWORD:
            return {
                ...state,
                repassword: action.repassword,
            };
        case SHOW_HIDE_PASSWORD:
            return {
                ...state,
                showPassword: !state.showPassword
            }
        case UPDATE_CLIENT_ID:
            return {
                ...state,
                clientId: action.clientId,
            };
        case PASSWORD_MATCHED:
            if (state.password === state.repassword){
            return {
                ...state,
                passwordMatched: true
            }}
            return {
                ...state,
                passwordMatched: false
            }
        case CANCEL_REQUEST:
            return {
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                repassword: '',
                clientId: ''
             }
        default:
            return state;
    }
}

export const setUpdateEmail =(email) => ({type: UPPDATE_EMAIL, email: email});
export const setUpdateFirstName =(firstName) => ({type: UPDATE_FIRSTNAME, firstName: firstName});
export const setUpdateLastName =(lastName) => ({type: UPDATE_LASTNAME, lastName: lastName});
export const setUpdatePassword =(password) => ({type: UPDATE_PASSWORD, password: password});
export const setUpdateRePassword =(repassword) => ({type: UPDATE_REPASSWORD, repassword: repassword});
export const setShowHidePassword = () => ({type: SHOW_HIDE_PASSWORD});
export const setUpdateClientId =(clientId) => ({type: UPDATE_CLIENT_ID, clientId: clientId});
export const setPasswordMatched = () => ({type: PASSWORD_MATCHED})
export const cetCancelRequest = () => ({type: CANCEL_REQUEST})
export default signUpReducer