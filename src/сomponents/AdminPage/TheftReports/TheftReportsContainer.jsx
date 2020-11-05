import {connect} from "react-redux";
import TheftReports from "./TheftReports";
import {
    deleteReport,
    setDataChangedFalse,
    setTheftReportResolution,
    setTheftReportStatus, setWriteFinalCommentTheftReport, setWriteFinalCommentTheftReportFalse,
} from "../../../redux/adminPageReducer";
import {setUpdateShowFormTheftReport} from "../../../redux/homePageReducer";


const mapStateToProps = (state) => {

    return {
        state: state.adminPage,
        showFormTheftReport: state.homePage,

    }
}

export default connect(mapStateToProps,
    {
        setTheftReportStatus,
        setTheftReportResolution,
        setWriteFinalCommentTheftReport,
        setDataChangedFalse, setWriteFinalCommentTheftReportFalse, deleteReport,setUpdateShowFormTheftReport,
    }
)(TheftReports)