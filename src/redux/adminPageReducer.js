const UPDATE_ARRAY_THEFT_REPORTS ='UPDATE_ARRAY_THEFT_REPORTS'
const UPDATE_THEFT_REPORTS_FETCHING = 'UPDATE_THEFT_REPORTS_FETCHING'
const UPDATE_THEFT_REPORT_STATUS = 'UPDATE_THEFT_REPORT_STATUS'
const UPDATE_THEFT_REPORT_RESOLUTION = 'UPDATE_THEFT_REPORT_RESOLUTION'

let initialState = {
    arrayTheftReports: null,
    theftReportsIsFetching: false,

}


const adminPageReducer = (state = initialState, action) => {
    //debugger
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
            case UPDATE_THEFT_REPORT_STATUS:
            return {
                ...state,
                arrayTheftReports: state.arrayTheftReports.map(report => {
                    if(report._id === action.data.id) {
                        return {...report, status:action.data.status}
                    }
                    return report
                })
            }
        case UPDATE_THEFT_REPORT_RESOLUTION:
            return {
                ...state,
                arrayTheftReports: state.arrayTheftReports.map(report => {
                    if(report._id === action.data.id) {
                        return {...report, resolution:action.data.resolution}
                    }
                    return report
                })
            }
        default:
            return state;
    }
}

export const arrayTheftReports =(array) => ({type: UPDATE_ARRAY_THEFT_REPORTS, arrayTheftReports: array});
export const setTheftReportsIsFetching =(theftReportsIsFetching) => ({type: UPDATE_THEFT_REPORTS_FETCHING, theftReportsIsFetching});
export const setTheftReportStatus =(status, id) => ({type: UPDATE_THEFT_REPORT_STATUS, data: {status, id}});
export const setTheftReportResolution =(resolution, id) => ({type: UPDATE_THEFT_REPORT_RESOLUTION, data: {resolution, id}});
export default adminPageReducer