import React from 'react';
import AdminPage from "./AdminPage";
//import {Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";



class AdminPageContainer extends React.Component {

    componentDidMount() {
        //if(!this.props.authorized) {
           // const location = this.props.location;
           // const redirect = location.pathname + location.search;

            //this.props.router.push(`/login?redirect=${redirect}`);
            //console.log('ghjgc')
        }


    render () {

        return <>
            <AdminPage />
        </>
    }

}

const mapStateToProps = (state) => {
    return {
        authorized: state.signIn.authorized
    }
}


export default connect(mapStateToProps, {})(AdminPageContainer)