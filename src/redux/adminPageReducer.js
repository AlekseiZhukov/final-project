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


const adminPageReducer = (state = initialState, action) => {
    return {
        ...state
    }
}

export default adminPageReducer