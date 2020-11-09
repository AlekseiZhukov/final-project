import {connect} from "react-redux";
import OfficerPage from "./OfficerPage";
import React from 'react'
import {
    setAllDataSavedInOfficerPage,
    setApprovedInOfficerPage, setNewPasswordInOfficerPage,
    setOfficerData,
    setOfficerDataIsFetching, setOfficerEmail,
    setOfficerFirstName,
    setOfficerLastName
} from "../../../redux/officerPageReducer";
import {withRouter} from "react-router-dom";
import * as axios from "axios";


class OfficersPageContainer extends React.Component {

    componentDidMount() {
        const officerid = this.props.match.params.officerid
        const token = localStorage.getItem('token');

        axios.get(`http://84.201.129.203:8888/api/officers/${officerid}`,
                {headers: {Authorization: `Bearer ${token}`}})
            .then(response => {
                if (response.status === 200) {
                    this.props.setOfficerData(response.data)
                    this.props.setOfficerDataIsFetching(true)
                    //console.log(response)
                }
            })
    }

    saveDataOnOfficerPage = (officerId, data) => {
        const token = localStorage.getItem('token');
        axios.put(`http://84.201.129.203:8888/api/officers/${officerId}`,
            data,
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            .then(response => {
                if (response.status === 200) {
                    this.props.setAllDataSavedInOfficerPage()
                }
            })
            .then(
                this.props.setAllDataSavedInOfficerPage()
            )
    }


    render () {

        return (
            <OfficerPage {...this.props} saveDataOnOfficerPage={this.saveDataOnOfficerPage}/>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        state: state.officerPage,

    }
}
const WithUrlDataOfficerPageContainer = withRouter(OfficersPageContainer);
export default connect(mapStateToProps,
    {   setOfficerData,
        setOfficerDataIsFetching,
        setOfficerFirstName,
        setOfficerLastName,
        setOfficerEmail,
        setApprovedInOfficerPage,
        setNewPasswordInOfficerPage,
        setAllDataSavedInOfficerPage,
    })(WithUrlDataOfficerPageContainer)