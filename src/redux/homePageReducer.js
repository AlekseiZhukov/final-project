
const UPDATE_SHOW_FORM_THEFT_REPORT ='UPDATE_SHOW_FORM_THEFT_REPORT'
let initialState = {
    showFormTheftReport: false
}


const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SHOW_FORM_THEFT_REPORT:
            return {
                ...state,
                showFormTheftReport: !state.showFormTheftReport,
            };
        default:
            return state
    }
}

export const setUpdateShowFormTheftReport =() => ({type: UPDATE_SHOW_FORM_THEFT_REPORT});

export default homePageReducer