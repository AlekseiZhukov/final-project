// noinspection SpellCheckingInspection
const UPPDATE_STATUS = 'UPPDATE_STATUS';
const UPDATE_DATA = 'UPDATE_DATA';
const UPDATE_LICENSE_NUMBER = 'UPDATE_LICENSE_NUMBER';
const UPDATE_COLOR = 'UPDATE_COLOR';
const UPDATE_TYPE_BIKE = 'UPDATE_TYPE_BIKE';
const UPDATE_OWNER_FULL_NAME = 'UPDATE_OWNER_FULL_NAME';
const UPDATE_ID_OFFICER = 'UPDATE_ID_OFFICER';
const UPDATE_CREATED_DATA = 'UPDATE_CREATED_DATA';
const UPDATE_UPDATE_DATA = 'UPDATE_UPDATE_DATA';
const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
const UPDATE_RESOLUTION = 'UPDATE_RESOLUTION';
const UPDATE_CLIENT_ID = 'UPDATE_CLIENT_ID';
const CANCEL_REQUEST = 'CANCEL_REQUEST';


let initialState = {
    status: 'new',
    date: '',
    licenseNumber: '',
    color: '',
    typeBike: '',
    ownerFullName: '',
    officer: '',
    createdAt: '',
    updateAt: '',
    clientId: '',
    description: '',
    resolution: '',


}

const TheftReportReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPPDATE_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case UPDATE_DATA:

            return {
                ...state,
                date: action.date,
            };
        case UPDATE_LICENSE_NUMBER:
            return {
                ...state,
                licenseNumber: action.licenseNumber,
            };
        case UPDATE_COLOR:
            return {
                ...state,
                color: action.color,
            };
        case UPDATE_TYPE_BIKE:
            return {
                ...state,
                typeBike: action.typeBike,
            };
        case UPDATE_OWNER_FULL_NAME:
            return {
                ...state,
                ownerFullName: action.ownerFullName
            }
        case UPDATE_ID_OFFICER:
            return {
                ...state,
                ownerFullName: action.ownerFullName
            }
        case UPDATE_CREATED_DATA:
            return {
                ...state,
                createdAt: action.createdAt
            }
        case UPDATE_UPDATE_DATA:
            return {
                ...state,
                updatedAt: action.updatedAt
            }
        case UPDATE_CLIENT_ID:
            return {
                ...state,
                clientId: action.clientId,
            };
        case UPDATE_DESCRIPTION:
            return {
                ...state,
                description: action.description,
            };
        case UPDATE_RESOLUTION:
            return {
                ...state,
                resolution: action.resolution,
            };

        case CANCEL_REQUEST:
            return {
                status: '',
                date: '',
                licenseNumber: '',
                color: '',
                typeBike: '',
                ownerFullName: '',
                officer: '',
                createdAt: '',
                updateAt: '',
                clientId: '',
                description: '',
                resolution: '',
            }
        default:
            return state;
    }
}

export const setUpdateStatus =(status) => ({type: UPPDATE_STATUS, status: status});
export const setUpdateData =(date) => ({type: UPDATE_DATA, date: date});
export const setUpdateLicenseNumber =(licenseNumber) => ({type: UPDATE_LICENSE_NUMBER, licenseNumber: licenseNumber});
export const setUpdateColor =(color) => ({type: UPDATE_COLOR, color: color});
export const setUpdateTypeBike =(typeBike) => ({type: UPDATE_TYPE_BIKE, typeBike: typeBike});
export const setOwnerFullName = (ownerFullName) => ({type: UPDATE_OWNER_FULL_NAME, ownerFullName: ownerFullName});
export const setOIdOfficer = (officer) => ({type: UPDATE_ID_OFFICER, officer: officer});
export const setCreatedData = (createdAt) => ({type: UPDATE_CREATED_DATA, createdAt: createdAt});
export const setUpdatedData = (updatedAt) => ({type: UPDATE_UPDATE_DATA, updatedAt: updatedAt});
export const setUpdateClientId =(clientId) => ({type: UPDATE_CLIENT_ID, clientId: clientId});
export const setUpdateDescription =(description) => ({type: UPDATE_DESCRIPTION, description: description});
export const setUpdateResolution =(resolution) => ({type: UPDATE_RESOLUTION, resolution: resolution});
export const cetCancelRequest = () => ({type: CANCEL_REQUEST})
export default TheftReportReducer