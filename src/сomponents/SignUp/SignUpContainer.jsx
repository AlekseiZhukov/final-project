import {connect} from "react-redux";
import {
    cetCancelRequest,
    setPasswordMatched,
    setShowHidePassword, setUpdateClientId,
    setUpdateEmail,
    setUpdateFirstName,
    setUpdateLastName,
    setUpdatePassword, setUpdateRePassword,
} from "../../redux/signUpReducer";
import SignUp from "./SignUp";


const mapStateToProps = (state) => {

    return {
        state: state.signUp
    }
}

export default connect(mapStateToProps,
    {
        setUpdateEmail,
        setUpdateFirstName,
        setUpdateLastName,
        setUpdatePassword,
        setUpdateRePassword,
        setShowHidePassword,
        setUpdateClientId,
        setPasswordMatched,
        cetCancelRequest
    })(SignUp)