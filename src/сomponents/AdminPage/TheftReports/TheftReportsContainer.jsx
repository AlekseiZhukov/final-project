import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import TheftReports from "./TheftReports";
import {
    setArrayTheftReports, setChangStatusReportFalse, setChangStatusReportTrue,
    setTheftReportResolution,
    setTheftReportsIsFetching,
    setTheftReportStatus, setWriteFinalCommentTheftReport, setWriteFinalCommentTheftReportFalse
} from "../../../redux/adminPageReducer";


class TheftReportsContainer extends React.Component {

    componentDidMount() {
        let token = localStorage.getItem('token');
        axios.get('http://84.201.129.203:8888/api/cases',
            {headers: {Authorization: `Bearer ${token}`}})
            .then(response => {
                if (response.data) {
                    this.props.setArrayTheftReports(response.data)
                    this.props.setTheftReportsIsFetching(true)
                }

            })
    }

    render () {

        return <>
            <TheftReports {...this.props}/>
        </>
    }


}
const mapStateToProps = (state) => {

    return {
        state: state.adminPage.theftReport
    }
}

export default connect(mapStateToProps,
        {
            setArrayTheftReports,
            setTheftReportsIsFetching,
            setTheftReportStatus,
            setTheftReportResolution,
            setWriteFinalCommentTheftReport,
            setWriteFinalCommentTheftReportFalse,
            setChangStatusReportFalse,
            setChangStatusReportTrue
        }
    )(TheftReportsContainer)