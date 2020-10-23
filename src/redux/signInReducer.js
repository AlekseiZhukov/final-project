// noinspection SpellCheckingInspection
const UPPDATE_EMAIL = 'UPPDATE_EMAIL';
const SHOW_HIDE_PASSWORD = 'SHOW_HIDE_PASSWORD';
const AUTHORIZED = 'AUTHORIZED';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const CANCEL = 'CANCEL';


let initialState = {
    email: '',
    password: '',
    showPassword: false,
    approved: false,
    authorized: false,
}

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPPDATE_EMAIL:
            return {
                ...state,
                email: action.email,
            };
        case UPDATE_PASSWORD:
            return {
                ...state,
                password: action.password,
            };
        case SHOW_HIDE_PASSWORD:
            return {
                ...state,
                showPassword: !state.showPassword
            }
        case AUTHORIZED:
            return {
                ...state,
                authorized: true
            }
        case CANCEL:
            return {
                email: '',
                password: '',
            }
        default:
            return state;
    }
}

export const setUpdateEmail =(email) => ({type: UPPDATE_EMAIL, email: email});
export const setUpdatePassword =(password) => ({type: UPDATE_PASSWORD, password: password});
export const setShowHidePassword = () => ({type: SHOW_HIDE_PASSWORD});
export const setAuthorized = () => ({type: AUTHORIZED})

export const cetCancel = () => ({type: CANCEL})
export default signInReducer