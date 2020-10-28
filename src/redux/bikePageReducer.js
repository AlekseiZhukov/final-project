const UPDATE_BIKE_PAGE_DATA = 'UPDATE_BIKE_PAGE_DATA';
const UPDATE_ARRAY_OFFICERS = 'UPDATE_ARRAY_OFFICERS';
const UPDATE_ALL_DATA_IS_FETCHING = 'UPDATE_ALL_DATA_IS_FETCHING';
const UPDATE_SHOW_LIST_OFFICERS = 'UPDATE_SHOW_LIST_OFFICERS';
const UPDATE_OFFICER_ID_IN_BIKE_PAGE_DATA = 'UPDATE_OFFICER_ID_IN_BIKE_PAGE_DATA';
const UPDATE_LICENSE_NUMBER_IN_BIKE_PAGE_DATA = 'UPDATE_LICENSE_NUMBER_IN_BIKE_PAGE_DATA';
const UPDATE_STATUS_VALUE_IN_BIKE_PAGE_DATA = 'UPDATE_STATUS_VALUE_IN_BIKE_PAGE_DATA';
const UPDATE_DATE_VALUE_IN_BIKE_PAGE_DATA = 'UPDATE_DATE_VALUE_IN_BIKE_PAGE_DATA';
const UPDATE_COLOR_IN_BIKE_PAGE_DATA = 'UPDATE_COLOR_IN_BIKE_PAGE_DATA';
const UPDATE_OWNER_FULLNAME_IN_BIKE_PAGE_DATA = 'UPDATE_OWNER_FULLNAME_IN_BIKE_PAGE_DATA';
const UPDATE_DESCRIPTION_IN_BIKE_PAGE_DATA = 'UPDATE_DESCRIPTION_IN_BIKE_PAGE_DATA';
const UPDATE_TYPE_IN_BIKE_PAGE_DATA = 'UPDATE_TYPE_IN_BIKE_PAGE_DATA';
const UPDATE_RESOLUTION_IN_BIKE_PAGE_DATA = 'UPDATE_RESOLUTION_IN_BIKE_PAGE_DATA';



let initialState = {
    bikePageData: null,
    arrayOfficers: null,
    allDataIsFetching: false,
    showListOfficers: false,
    //bikePageArrayOfficersIsFetching: false

}

const BikePageReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_BIKE_PAGE_DATA:
            return {
                ...state,
                bikePageData: action.data
            }
        case UPDATE_ARRAY_OFFICERS:
            return {
                ...state,
                arrayOfficers: action.array
            }
        case UPDATE_ALL_DATA_IS_FETCHING:
            return {
                ...state,
                allDataIsFetching: action.answer
            }
        case UPDATE_SHOW_LIST_OFFICERS:
            return {
                ...state,
                showListOfficers: !state.showListOfficers
            }
        case UPDATE_OFFICER_ID_IN_BIKE_PAGE_DATA:
            return {
                ...state,
                bikePageData: {
                    ...state.bikePageData,
                    officer: action.officerId
                }
            }
        case UPDATE_LICENSE_NUMBER_IN_BIKE_PAGE_DATA:
            return {
                ...state,
                bikePageData: {
                    ...state.bikePageData,
                    licenseNumber: action.licenseNumber
                }
            }
        case UPDATE_STATUS_VALUE_IN_BIKE_PAGE_DATA:
            return {
                ...state,
                bikePageData: {
                    ...state.bikePageData,
                    status: action.statusValue
                }
            }
        case UPDATE_DATE_VALUE_IN_BIKE_PAGE_DATA:
            return {
                ...state,
                bikePageData: {
                    ...state.bikePageData,
                    date: action.date
                }
            }
        case UPDATE_COLOR_IN_BIKE_PAGE_DATA:
            return {
                ...state,
                bikePageData: {
                    ...state.bikePageData,
                    color: action.color
                }
            }
        case UPDATE_OWNER_FULLNAME_IN_BIKE_PAGE_DATA:
            return {
                ...state,
                bikePageData: {
                    ...state.bikePageData,
                    ownerFullName: action.ownerFullName
                }
            }
        case UPDATE_DESCRIPTION_IN_BIKE_PAGE_DATA:
            return {
                ...state,
                bikePageData: {
                    ...state.bikePageData,
                    description: action.description
                }
            }
        case UPDATE_TYPE_IN_BIKE_PAGE_DATA:
            return {
                ...state,
                bikePageData: {
                    ...state.bikePageData,
                    type: action.typeBike
                }
            }
        case UPDATE_RESOLUTION_IN_BIKE_PAGE_DATA:
            return {
                ...state,
                bikePageData: {
                    ...state.bikePageData,
                    resolution: action.resolution
                }
            }
        default:
            return state;
    }
}

export const setBikePageData =(data) => ({type: UPDATE_BIKE_PAGE_DATA, data});
export const setArrayOfficers =(array) => ({type: UPDATE_ARRAY_OFFICERS, array});
export const setAllDataIsFetching =(answer) => ({type: UPDATE_ALL_DATA_IS_FETCHING, answer});
export const setShowListOfficers =() => ({type: UPDATE_SHOW_LIST_OFFICERS});
export const setOfficerId =(officerId) => ({type: UPDATE_OFFICER_ID_IN_BIKE_PAGE_DATA, officerId});
export const setLicenseNumber =(licenseNumber) => ({type: UPDATE_LICENSE_NUMBER_IN_BIKE_PAGE_DATA, licenseNumber});
export const setStatusValue =(statusValue) => ({type: UPDATE_STATUS_VALUE_IN_BIKE_PAGE_DATA, statusValue});
export const setDateEvents =(date) => ({type: UPDATE_DATE_VALUE_IN_BIKE_PAGE_DATA, date});
export const setColor =(color) => ({type: UPDATE_COLOR_IN_BIKE_PAGE_DATA, color});
export const setOwnerFullName =(ownerFullName) => ({type: UPDATE_OWNER_FULLNAME_IN_BIKE_PAGE_DATA, ownerFullName});
export const setDescription =(description) => ({type: UPDATE_DESCRIPTION_IN_BIKE_PAGE_DATA, description});
export const setTypeBike =(typeBike) => ({type: UPDATE_TYPE_IN_BIKE_PAGE_DATA, typeBike});
export const setResolution =(resolution) => ({type: UPDATE_RESOLUTION_IN_BIKE_PAGE_DATA, resolution});

export default BikePageReducer