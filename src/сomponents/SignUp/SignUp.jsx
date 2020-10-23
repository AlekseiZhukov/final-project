import React from 'react';
import style from './SignUp.module.css';
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import * as axios from "axios";



const SignUp = (props) => {

    const onEmailChange = (event) => {
        let newEmail = event.target.value;
        props.setUpdateEmail(newEmail)
    }
    const onFirstNameChange = (event) => {
        let firstName = event.target.value;
        props.setUpdateFirstName(firstName)
    }
    const onLastNameChange = (event) => {
        let lastName = event.target.value;
        props.setUpdateLastName(lastName)
    }
    const onPasswordChange = (event) => {
        let password = event.target.value;
        props.setUpdatePassword(password);
        props.setPasswordMatched();
    }
    const onRePasswordChange = (event) => {
        let repassword = event.target.value;
        props.setUpdateRePassword(repassword);
        props.setPasswordMatched();
    }
    const onClientIdChange = (event) => {
        let clientId = event.target.value
        props.setUpdateClientId(clientId)
    }

    const onClickShowHidePassword = () => {
        props.setShowHidePassword()
    }

    const onClickCancelButton = () => {
        props.cetCancelRequest()
    }

    const onClickAddEmployee = () => {

        axios.post('http://84.201.129.203:8888/api/auth/sign_up',
            {
                email: props.state.email,
                firstName: props.state.firstName,
                lastName: props.state.lastName,
                password: props.state.password,
                repassword: props.state.repassword,
                clientId: props.state.clientId,
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


    return (

        <div>
            <div>
                <label> email:
                    <Input
                        type={'email'}
                        value={props.state.email}
                        onChange={onEmailChange}
                    />
                </label>
            </div>

            <div>
                <label> first name:
                    <Input
                        type={'text'}
                        value={props.state.firstName}
                        onChange={onFirstNameChange}
                    />
                </label>
            </div>

            <div>
                <label> last name:
                    <Input
                        type={'text'}
                        value={props.state.lastName}
                        onChange={onLastNameChange}
                    />
                </label>
            </div>

            <div>
                <label> password:
                    <Input
                        type={ props.state.showPassword ? 'text' : 'password'}
                        value={props.state.password}
                        onChange={onPasswordChange}
                        className={props.state.passwordMatched ? `${style.passwordMatched}` : `${style.passwordNotMatch}`}
                    /><br></br>
                    <label>retry password
                    <Input
                        type={ props.state.showPassword ? 'text' : 'password'}
                        value={props.state.repassword}
                        onChange={onRePasswordChange}
                        className={props.state.passwordMatched ? `${style.passwordMatched}` : `${style.passwordNotMatch}`}
                    /></label><br></br>
                    <Button
                        value={props.state.showPassword ? 'Hide password' : 'Show password'}
                        onClick={onClickShowHidePassword}
                    />
                </label>
            </div>

            <div>
                <label> Client Id:
                    <Input
                        type={'text'}
                        value={props.state.clientId}
                        onChange={onClientIdChange}
                    />
                </label>
            </div>
            <Button value={'Зарегистрироваться'} onClick={onClickAddEmployee}/>
            <Button value={'Отменить'} onClick={onClickCancelButton}/>

        </div>
    )
}

export default SignUp;