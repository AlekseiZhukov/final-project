import {connect} from "react-redux";
import {

    setUpdateShowFormTheftReport,


} from "../../redux/homePageReducer";

import HomePage from "./HomePage";


const mapStateToProps = (state) => {

    return {
        state: state.homePage
    }
}

export default connect(mapStateToProps,
    {
        setUpdateShowFormTheftReport
    })(HomePage)