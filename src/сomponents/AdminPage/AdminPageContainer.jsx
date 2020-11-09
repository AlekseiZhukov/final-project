import React from 'react';
import AdminPage from "./AdminPage";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import * as axios from "axios";
import {
    setAllDataIsFetching,
    setArrayOfficers,
    setArrayTheftReports, setShowOfficers,
    setShowTheftReports
} from "../../redux/adminPageReducer";



class AdminPageContainer extends React.Component {

    componentDidMount() {

        setTimeout(this.updateAllDataForAdminPage, 100)
    }

    updateAllDataForAdminPage = () => {
        let token = localStorage.getItem('token');
        axios.all([
            axios.get('http://84.201.129.203:8888/api/cases',
                {headers: {Authorization: `Bearer ${token}`}}),
            axios.get('http://84.201.129.203:8888/api/officers',
                {headers: {Authorization: `Bearer ${token}`}})
        ])
            .then(axios.spread((firstResponse, secondResponse) => {
                if(firstResponse.status === 200 && secondResponse.status === 200) {
                    this.props.setArrayTheftReports(firstResponse.data)
                    this.props.setArrayOfficers(secondResponse.data)
                    this.props.setAllDataIsFetching(true)
                    console.log('админ контейнер запрос выполнен')
                }
            }))
            .catch(error => {
                if (error) {
                   // console.log(error.response)

                }
            })
    }

    updateCases = () => {
        let token = localStorage.getItem('token');
        axios.get('http://84.201.129.203:8888/api/cases',
            {headers: {Authorization: `Bearer ${token}`}})
            .then(response => {
                if(response.status === 200) {
                    this.props.setArrayTheftReports(response.data)
                }
            })
    }


    render () {

        return <>
            {this.props.authorized ? <AdminPage showTheftReports={this.props.state.showTheftReports}
                                                showOfficers={this.props.state.showOfficers}
                                                setShowTheftReports={this.props.setShowTheftReports}
                                                setShowOfficers={this.props.setShowOfficers}
                updateCases={this.updateCases}
            /> : <Redirect to={'./'}/>}
        </>
    }

}

const mapStateToProps = (state) => {
    return {
        state: state.adminPage,
        authorized: state.header.authorized
    }
}

export default connect(mapStateToProps, {setArrayOfficers,
    setArrayTheftReports, setAllDataIsFetching, setShowTheftReports, setShowOfficers})(AdminPageContainer)