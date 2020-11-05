const SHOW_SIGN_IN_FORM = 'SHOW_SIGN_IN_FORM'
const SHOW_SIGN_UP_FORM = 'SHOW_SIGN_UP_FORM'
const AUTHORIZED = 'AUTHORIZED'
const UPPDATE_EMAIL = 'UPPDATE_EMAIL';
const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME';
const UPDATE_LASTNAME = 'UPDATE_LASTNAME';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const UPDATE_REPASSWORD = 'UPDATE_REPASSWORD';
const SHOW_HIDE_PASSWORD = 'SHOW_HIDE_PASSWORD';
const UPDATE_CLIENT_ID = 'UPDATE_CLIENT_ID';
const PASSWORD_MATCHED = 'PASSWORD_MATCHED';
const CANCEL_REQUEST_REGISTRY = 'CANCEL_REQUEST_REGISTRY';
const SHOW_SIGN_INUP_BLOCK = 'SHOW_SIGN_INUP_BLOCK';
const CANCEL_REQUEST_SIGN_IN = 'CANCEL_REQUEST_SIGN_IN';
const SHOW_SIGN_INUP_BLOCK_FALSE = 'SHOW_SIGN_INUP_BLOCK_FALSE';

let initialState = {
    showSignInUpBlock: false,
    showSignInForm: false,
    showSignUpForm: false,
    authorized: false,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    rePassword: '',
    clientId: '',
    passwordMatched: false,
    showPassword: false,


}
const headerReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_SIGN_IN_FORM:
            return {
                ...state,
                showSignInForm: action.showSignInForm
            }
    case SHOW_SIGN_UP_FORM:
            return {
                ...state,
                showSignUpForm: action.showSignUpForm
            }
    case SHOW_SIGN_INUP_BLOCK:
            return {
                ...state,
                showSignInUpBlock: !state.showSignInUpBlock
            }
    case SHOW_SIGN_INUP_BLOCK_FALSE:
            return {
                ...state,
                showSignInUpBlock: false
            }

        case AUTHORIZED:

            return {
                ...state,
                authorized: action.authorized
            }
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
                rePassword: action.rePassword,
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
            if (state.password === state.rePassword) {
                return {
                    ...state,
                    passwordMatched: true
                }
            }
            return {
                ...state,
                passwordMatched: false
            }
        case CANCEL_REQUEST_REGISTRY:
            debugger
            return {

                ...state,
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                rePassword: '',
                clientId: ''
            }
         case CANCEL_REQUEST_SIGN_IN:
            return {
                ...state,
                email: '',
                password: '',
            }
        default:
            return state
    }
}
export const setShowSignInForm = (showSignInForm) => ({type: SHOW_SIGN_IN_FORM, showSignInForm})
export const setShowSignUpForm = (showSignUpForm) => ({type: SHOW_SIGN_UP_FORM, showSignUpForm})
export const setShowSignInUpBlock = (showSignInUpBlock) => ({type: SHOW_SIGN_INUP_BLOCK, showSignInUpBlock})
export const setUpdateEmail = (email) => ({type: UPPDATE_EMAIL, email});
export const setUpdateFirstName = (firstName) => ({type: UPDATE_FIRSTNAME, firstName});
export const setUpdateLastName = (lastName) => ({type: UPDATE_LASTNAME, lastName});
export const setUpdatePassword = (password) => ({type: UPDATE_PASSWORD, password});
export const setUpdateRePassword = (rePassword) => ({type: UPDATE_REPASSWORD, rePassword});
export const setShowHidePassword = () => ({type: SHOW_HIDE_PASSWORD});
export const setUpdateClientId = (clientId) => ({type: UPDATE_CLIENT_ID, clientId});
export const setPasswordMatched = () => ({type: PASSWORD_MATCHED})
export const setCancelRequestRegistry = () => ({type: CANCEL_REQUEST_REGISTRY})
export const setCancelRequestSignIn = () => ({type: CANCEL_REQUEST_SIGN_IN})
export const setAuthorized = (authorized) => ({type: AUTHORIZED, authorized})
export const setShowSignInUpBlockFalse = () => ({type: SHOW_SIGN_INUP_BLOCK_FALSE})

export default headerReducer