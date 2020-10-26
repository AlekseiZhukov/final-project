const UPDATE_ARRAY_THEFT_REPORTS ='UPDATE_ARRAY_THEFT_REPORTS'
const UPDATE_THEFT_REPORTS_FETCHING = 'UPDATE_THEFT_REPORTS_FETCHING'
const UPDATE_THEFT_REPORT_STATUS = 'UPDATE_THEFT_REPORT_STATUS'
const UPDATE_THEFT_REPORT_RESOLUTION = 'UPDATE_THEFT_REPORT_RESOLUTION'
const UPDATE_WRITE_FINAL_COMMENT_TRUE = 'UPDATE_WRITE_FINAL_COMMENT_TRUE'
const UPDATE_WRITE_FINAL_COMMENT_FALSE = 'UPDATE_WRITE_FINAL_COMMENT_FALSE'
const UPDATE_CHANG_STATUS_REPORT_FALSE = 'UPDATE_CHANG_STATUS_REPORT_FALSE'
const UPDATE_CHANG_STATUS_REPORT_TRUE = 'UPDATE_CHANG_STATUS_REPORT_TRUE'

let initialState = {
    theftReport:{
        arrayTheftReports: null,
        theftReportsIsFetching: false,
    }


}


const adminPageReducer = (state = initialState, action) => {
    //debugger
    switch (action.type) {
        case UPDATE_ARRAY_THEFT_REPORTS:
            return {
                ...state,
                theftReport:{...state.theftReport,  arrayTheftReports: action.arrayTheftReports}
            }
        case UPDATE_THEFT_REPORTS_FETCHING:
            return {
                ...state,
                theftReport:{...state.theftReport, theftReportsIsFetching:  action.theftReportsIsFetching}
            }
            case UPDATE_THEFT_REPORT_STATUS:
            return {
                ...state,
                theftReport:{
                    ...state.theftReport,
                    arrayTheftReports: state.theftReport.arrayTheftReports.map(report => {
                        if(report._id === action.data.id && action.data.status === 'done') {
                            return {...report, status:action.data.status, writeFinalComment: true, changReport: true}
                        } else if (report._id === action.data.id) {
                            return {...report, status:action.data.status, changReport: true}
                        }
                        return report
                    })
                }
            }
        case UPDATE_THEFT_REPORT_RESOLUTION:
            return {
                ...state,
                theftReport:{
                    ...state.theftReport,
                    arrayTheftReports: state.theftReport.arrayTheftReports.map(report => {
                        if(report._id === action.data.id) {
                            return {...report, resolution:action.data.resolution}
                        }
                        return report
                    })
                }
            }
        case UPDATE_WRITE_FINAL_COMMENT_TRUE:
            return {
                ...state,
                theftReport: {
                    ...state.theftReport,
                    arrayTheftReports: state.theftReport.arrayTheftReports.map(report => {
                        if(report._id === action.id) {
                            return {...report, writeFinalComment: true}
                        }
                        return report
                    })
                }
            }
        case UPDATE_WRITE_FINAL_COMMENT_FALSE:
            return {
                ...state,
                theftReport: {
                    ...state.theftReport,
                    arrayTheftReports: state.theftReport.arrayTheftReports.map(report => {
                        if(report._id === action.id){
                            return {...report, writeFinalComment: false}
                        }
                        return report
                    })
                }
            }
        case UPDATE_CHANG_STATUS_REPORT_FALSE:
            return {
                ...state,
                theftReport: {
                    ...state.theftReport,
                    arrayTheftReports: state.theftReport.arrayTheftReports.map(report => {
                        if(report._id === action.id){
                            return {...report, changReport: false}
                        }
                        return report
                    })
                }
            }
        case UPDATE_CHANG_STATUS_REPORT_TRUE:
            return {
                ...state,
                theftReport: {
                    ...state.theftReport,
                    arrayTheftReports: state.theftReport.arrayTheftReports.map(report => {
                        if(report._id === action.id){
                            return {...report, changReport: true}
                        }
                        return report
                    })
                }
            }
        default:
            return state;
    }
}

export const setArrayTheftReports =(array) => ({type: UPDATE_ARRAY_THEFT_REPORTS, arrayTheftReports: array});
export const setTheftReportsIsFetching =(theftReportsIsFetching) => ({type: UPDATE_THEFT_REPORTS_FETCHING, theftReportsIsFetching});
export const setTheftReportStatus =(status, id) => ({type: UPDATE_THEFT_REPORT_STATUS, data: {status, id}});
export const setTheftReportResolution =(resolution, id) => ({type: UPDATE_THEFT_REPORT_RESOLUTION, data: {resolution, id}});
export const setWriteFinalCommentTheftReport =(id) => ({type: UPDATE_WRITE_FINAL_COMMENT_TRUE, id});
export const setWriteFinalCommentTheftReportFalse =(id) => ({type: UPDATE_WRITE_FINAL_COMMENT_FALSE, id});
export const setChangStatusReportTrue =(id) => ({type: UPDATE_CHANG_STATUS_REPORT_TRUE, id});
export const setChangStatusReportFalse =(id) => ({type: UPDATE_CHANG_STATUS_REPORT_FALSE, id});
export default adminPageReducer