import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {
    setCancelRequestRegistry,
    setCancelRequestSignIn,
    setAuthorized,
    setShowHidePassword,
    setShowSignInForm,
    setShowSignInUpBlock,
    setUpdateEmail,
    setUpdatePassword,
    setUpdateFirstName,
    setUpdateLastName,
    setShowSignInUpBlockFalse,
    setShowSignUpForm,
    setPasswordMatched, setUpdateRePassword, setUpdateClientId
} from "../../redux/headerReducer";
import * as axios from "axios";



class HeaderContainer extends React.Component {

    componentDidMount() {
        const token = localStorage.getItem('token')
        const firstName = localStorage.getItem('firstName')
        const lastName = localStorage.getItem('lastName')
        if (token) {

            this.props.setAuthorized(true)
            this.props.setUpdateFirstName(firstName)
            this.props.setUpdateLastName(lastName)
            this.props.setShowSignInUpBlockFalse()

        } else {
        this.props.setAuthorized(false)
        }
    }

    onClickButtonSubmit = () => {

        axios.post('http://84.201.129.203:8888/api/auth/sign_in',
            {
                email: this.props.state.email,
                password: this.props.state.password,
            })
            .then(response => {
                if (response.status === 200 ) {
                    //console.log(response)
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('firstName', response.data.firstName);
                    localStorage.setItem('lastName', response.data.lastName);
                    this.props.setUpdateFirstName(response.data.firstName)
                    this.props.setUpdateLastName(response.data.lastName)
                    this.props.setCancelRequestSignIn()
                    this.props.setShowSignInUpBlockFalse()
                    this.props.setAuthorized(true)
                }
            })
            .catch(error => {
                if (error.response) {
                    alert(`${error.response.statusText}, ${error.response.data.error.message}`)
                    this.props.setCancelRequestSignIn()
                }
            })
    }

    onClickAddEmployee = () => {
        axios.post('http://84.201.129.203:8888/api/auth/sign_up',
            {
                email: this.props.state.email,
                firstName: this.props.state.firstName,
                lastName: this.props.state.lastName,
                password: this.props.state.password,
                repassword: this.props.state.repassword,
                clientId: this.props.state.clientId,
            })
            .then(response => {
                //console.log(response)
                if (response.status === 201 ) {
                    alert('Сотрудник создан');
                }
            })
            .catch(error => {
                if (error.response) {
                    alert(`${error.response.statusText}, ${error.response.data.error.message}`)
                }
            })
    }

    render() {

        return (
            <Header
                {...this.props}
                onClickButtonSubmit={this.onClickButtonSubmit}
                onClickAddEmployee={this.onClickAddEmployee}
            />
        )
    }
}






const mapStateToProps = (state) => {

    return {
        state: state.header
    }
}

export default connect(mapStateToProps,
    {
        setShowSignInForm,
        setUpdateEmail,
        setUpdatePassword,
        setShowHidePassword,
        setCancelRequestRegistry,
        setShowSignInUpBlock,
        setCancelRequestSignIn,
        setAuthorized,
        setUpdateFirstName,
        setUpdateLastName,
        setShowSignInUpBlockFalse,
        setShowSignUpForm,
        setPasswordMatched,
        setUpdateRePassword,
        setUpdateClientId,

    })(HeaderContainer)