import {connect} from "react-redux";
import {
    cetCancel, setAuthorized,
    setShowHidePassword,
    setUpdateEmail,
    setUpdatePassword
} from "../../../redux/signInReducer";
import SignIn from "./SignIn";


const mapStateToProps = (state) => {

    return {
        state: state.signIn
    }
}

export default connect(mapStateToProps,
    {
        setUpdateEmail,
        setUpdatePassword,
        setShowHidePassword,
        cetCancel,
        setAuthorized,
    })(SignIn)