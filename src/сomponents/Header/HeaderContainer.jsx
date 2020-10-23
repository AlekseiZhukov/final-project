
import Header from "./Header";
import {connect} from "react-redux";


const mapStateToProps = (state) => {

    return {
        authorized: state.signIn.authorized
    }
}

export default connect(mapStateToProps)(Header)