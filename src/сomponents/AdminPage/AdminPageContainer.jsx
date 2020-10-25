import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import AdminPage from "./AdminPage";
import {
    arrayTheftReports,
    setTheftReportResolution,
    setTheftReportsIsFetching,
    setTheftReportStatus
} from "../../redux/adminPageReducer";


class AdminPageContainer extends React.Component {

    componentDidMount() {
        let token = localStorage.getItem('token');
        axios.get('http://84.201.129.203:8888/api/cases',
            {headers: {Authorization: `Bearer ${token}`}})
            .then(response => {
                if (response.data) {
                    this.props.arrayTheftReports(response.data)
                    this.props.setTheftReportsIsFetching(true)
                }

            })
    }

    render () {

        return <>
            <AdminPage {...this.props}/>
        </>
    }


}
const mapStateToProps = (state) => {

    return {
        state: state.adminPage
    }
}

export default connect(mapStateToProps, { arrayTheftReports,
                                            setTheftReportsIsFetching,
                                            setTheftReportStatus,
                                            setTheftReportResolution
                    })(AdminPageContainer)