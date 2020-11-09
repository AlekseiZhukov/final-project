import {connect} from "react-redux";
import Officers from "./Officers";
import {setDeleteOfficer, setOfficerApproved} from "../../../redux/adminPageReducer";




const mapStateToProps = (state) => {

    return {
        state: state.adminPage

    }
}

export default connect(mapStateToProps,
    {setOfficerApproved,
        setDeleteOfficer
    }
)(Officers)