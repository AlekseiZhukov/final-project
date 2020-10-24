import {connect} from "react-redux";
//import React from "react";
import {
    cetCancelRequest,
    setCreatedData,
    setOIdOfficer,
    setOwnerFullName, setUpdateClientId,
    setUpdateColor,
    setUpdateData, setUpdatedData, setUpdateDescription, setUpdateLicenseNumber, setUpdateResolution,
    setUpdateStatus, setUpdateTypeBike

} from "../../redux/TheftReportReducer";
import TheftReport from "./TheftReport";
import {setUpdateShowFormTheftReport} from "../../redux/homePageReducer";




const mapStateToProps = (state) => {

    return {
        state: state.theftForm,
        showFormTheftReport: state.homePage
    }
}

export default connect(mapStateToProps,
    {
        setUpdateStatus,
        setUpdateData,
        setUpdateLicenseNumber,
        setUpdateColor,
        setUpdateTypeBike,
        setOwnerFullName,
        setOIdOfficer,
        setCreatedData,
        setUpdatedData,
        setUpdateClientId,
        setUpdateDescription,
        setUpdateResolution,
        cetCancelRequest,
        setUpdateShowFormTheftReport
    })(TheftReport)