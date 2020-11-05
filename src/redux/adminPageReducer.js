const UPDATE_ARRAY_THEFT_REPORTS ='UPDATE_ARRAY_THEFT_REPORTS'
const UPDATE_ALL_DATA_IS_FETCHING = 'UPDATE_ALL_DATA_IS_FETCHING'
const UPDATE_THEFT_REPORT_STATUS = 'UPDATE_THEFT_REPORT_STATUS'
const UPDATE_THEFT_REPORT_RESOLUTION = 'UPDATE_THEFT_REPORT_RESOLUTION'
const UPDATE_ARRAY_OFFICERS = 'UPDATE_ARRAY_OFFICERS'
const UPDATE_WRITE_FINAL_COMMENT_TRUE = 'UPDATE_WRITE_FINAL_COMMENT_TRUE'
const UPDATE_DATA_CHANGED_FALSE = 'UPDATE_DATA_CHANGED_FALSE'
const UPDATE_WRITE_FINAL_COMMENT_FALSE = 'UPDATE_WRITE_FINAL_COMMENT_FALSE'
const DELETE_REPORT = 'DELETE_REPORT'
const UPDATE_THEFT_REPORT_SENDING = 'UPDATE_THEFT_REPORT_SENDING'
const UPDATE_SHOW_THEFT_REPORTS = 'UPDATE_SHOW_THEFT_REPORTS'
const UPDATE_SHOW_OFFICERS = 'UPDATE_SHOW_OFFICERS'


let initialState = {
        arrayTheftReports: null,
        arrayOfficers: null,
        allDataIsFetching: false,
        theftReportSending: false,
        showTheftReports: true,
        showOfficers: false
    }





const adminPageReducer = (state = initialState, action) => {
    //debugger
    switch (action.type) {
        case UPDATE_ARRAY_THEFT_REPORTS:
            return {
                ...state,
                arrayTheftReports: action.arrayTheftReports
            }
        case UPDATE_ARRAY_OFFICERS:
            return {
                ...state,
                arrayOfficers: action.arrayOfficers
            }
        case UPDATE_ALL_DATA_IS_FETCHING:

            return {
                ...state,
                allDataIsFetching:  action.allDataIsFetching
            }
        case UPDATE_THEFT_REPORT_STATUS:
            return {
                ...state,
                arrayTheftReports: state.arrayTheftReports.map(report => {
                    if(report._id === action.data.id) {
                        return {
                            ...report,
                            status: action.data.status,
                            dataChanged: true
                        }
                    }
                    return report
                })
            }

        case UPDATE_THEFT_REPORT_RESOLUTION:
            return {
                ...state,
                arrayTheftReports: state.arrayTheftReports.map(report => {
                    if(report._id === action.data.id) {
                        return {
                            ...report,
                            resolution: action.data.resolution

                        }
                    }
                    return report
                })
            }

        case UPDATE_WRITE_FINAL_COMMENT_TRUE:
             return {
                 ...state,
                 arrayTheftReports: state.arrayTheftReports.map(report => {
                     if(report._id === action.id) {
                         return {
                             ...report,
                             writeFinalComment: true
                         }
                     }
                     return report
                 })
             }

        case UPDATE_WRITE_FINAL_COMMENT_FALSE:
             return {
                 ...state,
                 arrayTheftReports: state.arrayTheftReports.map(report => {
                     if(report._id === action.id) {
                         return {
                             ...report,
                             writeFinalComment: false
                         }
                     }
                     return report
                 })
             }

        case UPDATE_DATA_CHANGED_FALSE:
            return {
                 ...state,
                 arrayTheftReports: state.arrayTheftReports.map(report => {
                         if(report._id === action.id){
                             return {
                                 ...report,
                                 dataChanged: false
                             }
                         }
                         return report
                     })
                 }
        case DELETE_REPORT:

            return {
                ...state,
                arrayTheftReports: state.arrayTheftReports.filter(report => report._id !== action.id )
            }

        case UPDATE_THEFT_REPORT_SENDING:
            return {
                ...state,
                theftReportSending: !state.theftReportSending
            }

        case UPDATE_SHOW_THEFT_REPORTS:
            return {
                ...state,
                showTheftReports: action.showTheftReports
            }
        case UPDATE_SHOW_OFFICERS:
            return {
                ...state,
                showOfficers: action.showOfficers
            }
        default:
            return state;
    }
}

export const setArrayTheftReports =(array) => ({type: UPDATE_ARRAY_THEFT_REPORTS, arrayTheftReports: array});
export const setArrayOfficers =(array) => ({type: UPDATE_ARRAY_OFFICERS, arrayOfficers: array});
export const setAllDataIsFetching =(allDataIsFetching) => ({type: UPDATE_ALL_DATA_IS_FETCHING, allDataIsFetching});
export const setTheftReportStatus =(status, id) => ({type: UPDATE_THEFT_REPORT_STATUS, data: {status, id}});
export const setTheftReportResolution =(resolution, id) => ({type: UPDATE_THEFT_REPORT_RESOLUTION, data: {resolution, id}});
export const setWriteFinalCommentTheftReport =(id) => ({type: UPDATE_WRITE_FINAL_COMMENT_TRUE, id});
export const setWriteFinalCommentTheftReportFalse =(id) => ({type: UPDATE_WRITE_FINAL_COMMENT_FALSE, id});
export const deleteReport =(id) => ({type: DELETE_REPORT, id});
export const setDataChangedFalse =(id) => ({type: UPDATE_DATA_CHANGED_FALSE, id});
export const setTheftReportSending =() => ({type: UPDATE_THEFT_REPORT_SENDING});
export const setShowTheftReports =(showTheftReports) => ({type: UPDATE_SHOW_THEFT_REPORTS, showTheftReports});
export const setShowOfficers =(showOfficers) => ({type: UPDATE_SHOW_OFFICERS, showOfficers});

export default adminPageReducer