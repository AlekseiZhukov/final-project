import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import {
    cetCancelRequest,
    setCreatedData,
    setOIdOfficer,
    setOwnerFullName,
    setUpdateClientId,
    setUpdateColor,
    setUpdateData,
    setUpdatedData,
    setUpdateDescription,
    setUpdateLicenseNumber,
    setUpdateResolution,
    setUpdateShowSendingLoader,
    setUpdateStatus,
    setUpdateTypeBike

} from "../../../redux/TheftReportReducer";
import {setUpdateShowFormTheftReport} from "../../../redux/homePageReducer";
import TheftReport from "./TheftReport";
import {setTheftReportSending} from "../../../redux/adminPageReducer";


class TheReportContainer extends React.Component {

    onClickButtonSendTheftReport = () => {
        this.props.setUpdateShowSendingLoader()
        let date = new Date().toISOString().split('T')[0]
        axios.post('http://84.201.129.203:8888/api/public/report',
            {
                status: 'new',
                date: this.props.state.date,
                licenseNumber: this.props.state.licenseNumber,
                color: this.props.state.color,
                type: this.props.state.typeBike,
                ownerFullName: this.props.state.ownerFullName,
                createdAt: date,
                updateAt: date,
                clientId: '099ebf16951b434e2ed9dbac12633f42',
                description: this.props.state.description,
                resolution: '',
            })
            .then(response => {

                if (response.status === 200) {
                    this.props.setUpdateShowSendingLoader()
                    alert('Сообщение принято');
                    this.props.setUpdateShowFormTheftReport()
                    this.props.cetCancelRequest()
                    this.props.updateCases()
                }

            })

            .catch(error => {
                if (error.response) {
                    alert(`${error.response.statusText}, ${error.response.data.error.message}`)
                }
            })
    }

    render() {

        return (
            <TheftReport {...this.props} onClickButtonSendTheftReport={this.onClickButtonSendTheftReport}/>
        )
    }
}


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
        setUpdateShowFormTheftReport,
        setUpdateShowSendingLoader,
        setTheftReportSending
    })(TheReportContainer)