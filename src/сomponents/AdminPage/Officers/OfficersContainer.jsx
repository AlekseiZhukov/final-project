import {connect} from "react-redux";
import Officers from "./Officers";
//import {} from "../../../redux/adminPageReducer";
//import {setUpdateShowFormTheftReport} from "../../../redux/homePageReducer";


const mapStateToProps = (state) => {

    return {
        state: state.adminPage,


    }
}

export default connect(mapStateToProps,  {  })(Officers)