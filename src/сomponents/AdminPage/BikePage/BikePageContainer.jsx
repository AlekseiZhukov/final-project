import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
import BikePage from './BikePage';
import {withRouter} from "react-router-dom";
import {
    setAllDataIsFetching,
    setArrayOfficers,
    setBikePageData, setColor, setDateEvents, setLicenseNumber, setOfficerId,
    setShowListOfficers, setStatusValue, setOwnerFullName, setDescription,
    setTypeBike, setResolution, setSavedAllDataToServer
} from "../../../redux/bikePageReducer";


class BikePageContainer extends React.Component {

    componentDidMount() {
        const messageid = this.props.match.params.messageid
        const token = localStorage.getItem('token');
        axios.all([
            axios.get(`http://84.201.129.203:8888/api/cases/${messageid}`,
                {headers: {Authorization: `Bearer ${token}`}}),
            axios.get(`http://84.201.129.203:8888/api/officers`,
                {headers: {Authorization: `Bearer ${token}`}})])
            .then(axios.spread((firstResponse, secondResponse) => {
                if (firstResponse.data && secondResponse.data) {
                    this.props.setBikePageData(firstResponse.data)
                    this.props.setArrayOfficers(secondResponse.data)
                    this.props.setAllDataIsFetching(true)
                }
            }))
    }

    saveDataOnBikePage = (reportId, data) => {
        const token = localStorage.getItem('token');
        axios.put(`http://84.201.129.203:8888/api/cases/${reportId}`,
            data,
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            .then(response => {
                if (response.status === 200) {
                    this.props.setSavedAllDataToServer()
                }
            })
            .then(
                this.props.setSavedAllDataToServer()
            )
    }



    render() {
        return (
            <>
                <BikePage {...this.props} saveDataOnBikePage={this.saveDataOnBikePage}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bikePage: state.bikePage
    }
}

const WithUrlDataBikePageContainer = withRouter(BikePageContainer);

export default connect(mapStateToProps, {
    setBikePageData,
    setArrayOfficers,
    setAllDataIsFetching,
    setShowListOfficers,
    setOfficerId,
    setLicenseNumber,
    setStatusValue,
    setDateEvents, setColor,
    setOwnerFullName,
    setDescription,
    setTypeBike,
    setResolution,
    setSavedAllDataToServer,

})(WithUrlDataBikePageContainer)